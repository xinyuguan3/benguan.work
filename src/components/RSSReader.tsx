import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./RSSReader.css";

export type FeedSource = {
  name: string;
  url: string;
  description?: string;
};

type FeedItem = {
  id: string;
  title: string;
  link: string;
  date: Date | null;
  summary: string;
  source: string;
};

type FeedState = {
  name: string;
  url: string;
  status: "idle" | "loading" | "ok" | "error";
  itemCount: number;
  error?: string;
  title?: string;
};

const REFRESH_MS = 1000 * 60 * 15;
const MAX_ITEMS = 24;
const SUMMARY_LIMIT = 200;
const FEED_ACCEPT =
  "application/rss+xml, application/atom+xml, application/xml, text/xml, text/plain";

const stripHtml = (value: string) =>
  value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const truncateText = (value: string, limit: number) => {
  if (value.length <= limit) return value;
  const clipped = value.slice(0, limit);
  const lastSpace = clipped.lastIndexOf(" ");
  return `${clipped.slice(0, lastSpace > 80 ? lastSpace : limit).trim()}...`;
};

const getText = (node: ParentNode, selector: string) =>
  node.querySelector(selector)?.textContent?.trim() ?? "";

const parseDate = (value: string) => {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const buildProxyUrl = (url: string) =>
  `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;

const fetchText = async (target: string, signal?: AbortSignal) => {
  const response = await fetch(target, {
    headers: {
      Accept: FEED_ACCEPT,
    },
    cache: "no-store",
    signal,
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.text();
};

const fetchProxyXml = async (url: string, signal?: AbortSignal) => {
  const response = await fetch(buildProxyUrl(url), {
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
    signal,
  });

  if (!response.ok) {
    throw new Error(`Proxy HTTP ${response.status}`);
  }

  const text = await response.text();
  try {
    const json = JSON.parse(text) as { contents?: string };
    if (json.contents) return json.contents;
  } catch (_error) {
    // Fall through when proxy returns raw XML instead of JSON.
  }
  return text;
};

const fetchFeedXml = async (url: string, signal?: AbortSignal) => {
  try {
    return await fetchText(url, signal);
  } catch (error) {
    if ((error as Error).name === "AbortError") throw error;
    return fetchProxyXml(url, signal);
  }
};

const readEntryLink = (entry: Element, isAtom: boolean) => {
  if (isAtom) {
    const linkEl =
      entry.querySelector("link[rel='alternate']") || entry.querySelector("link");
    return linkEl?.getAttribute("href") || linkEl?.textContent?.trim() || "";
  }

  const linkEl = entry.querySelector("link");
  return linkEl?.getAttribute("href") || linkEl?.textContent?.trim() || "";
};

const parseFeed = (xmlText: string, fallbackName: string) => {
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlText, "text/xml");
  if (xml.querySelector("parsererror")) {
    return { title: fallbackName, items: [] as FeedItem[] };
  }

  const feedTitle =
    getText(xml, "channel > title") || getText(xml, "feed > title") || fallbackName;
  let entries = Array.from(xml.querySelectorAll("item"));
  const isAtom = entries.length === 0;
  if (isAtom) {
    entries = Array.from(xml.querySelectorAll("entry"));
  }

  const items = entries
    .map((entry) => {
      const title = getText(entry, "title") || "Untitled";
      const link = readEntryLink(entry, isAtom);
      const rawDate =
        getText(entry, "pubDate") ||
        getText(entry, "updated") ||
        getText(entry, "published") ||
        getText(entry, "dc\\:date");
      const date = parseDate(rawDate);
      const rawSummary =
        getText(entry, "description") ||
        getText(entry, "summary") ||
        getText(entry, "content") ||
        getText(entry, "content\\:encoded");
      const summary = rawSummary
        ? truncateText(stripHtml(rawSummary), SUMMARY_LIMIT)
        : "";
      const id =
        getText(entry, "guid") ||
        getText(entry, "id") ||
        link ||
        `${feedTitle}-${title}-${rawDate}`;

      return {
        id,
        title,
        link,
        date,
        summary,
        source: feedTitle,
      } as FeedItem;
    })
    .filter((item) => item.link);

  return { title: feedTitle, items };
};

const formatDate = (value: Date | null) => {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(value);
};

const formatUpdated = (value: Date | null) => {
  if (!value) return "Not synced yet";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(value);
};

const feedAccent = (value: string) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = (Math.abs(hash) % 210) + 10;
  return `hsl(${hue} 62% 45%)`;
};

const RSSReader: React.FC<{ feeds: readonly FeedSource[] }> = ({ feeds }) => {
  const normalizedFeeds = useMemo(
    () => feeds.filter((feed) => feed.url && feed.url.trim().length > 0),
    [feeds],
  );
  const [items, setItems] = useState<FeedItem[]>([]);
  const [feedStates, setFeedStates] = useState<FeedState[]>(() =>
    normalizedFeeds.map((feed) => ({
      name: feed.name,
      url: feed.url,
      status: "idle",
      itemCount: 0,
    })),
  );
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const refreshKeyRef = useRef(0);

  useEffect(() => {
    setFeedStates(
      normalizedFeeds.map((feed) => ({
        name: feed.name,
        url: feed.url,
        status: "idle",
        itemCount: 0,
      })),
    );
  }, [normalizedFeeds]);

  const refreshFeeds = useCallback(async () => {
    if (normalizedFeeds.length === 0) return;

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    const refreshKey = refreshKeyRef.current + 1;
    refreshKeyRef.current = refreshKey;

    setLoading(true);
    setFeedStates(
      normalizedFeeds.map((feed) => ({
        name: feed.name,
        url: feed.url,
        status: "loading",
        itemCount: 0,
      })),
    );

    const results = await Promise.allSettled(
      normalizedFeeds.map(async (feed) => {
        const xmlText = await fetchFeedXml(feed.url, controller.signal);
        const parsed = parseFeed(xmlText, feed.name);
        return { feed, parsed };
      }),
    );

    if (controller.signal.aborted || refreshKeyRef.current !== refreshKey) return;

    const nextItems: FeedItem[] = [];
    const nextStates: FeedState[] = [];

    results.forEach((result, index) => {
      const feed = normalizedFeeds[index];
      if (result.status === "fulfilled") {
        const { parsed } = result.value;
        parsed.items.forEach((item) => {
          nextItems.push({ ...item, source: parsed.title || feed.name });
        });
        nextStates.push({
          name: feed.name,
          url: feed.url,
          title: parsed.title || feed.name,
          status: "ok",
          itemCount: parsed.items.length,
        });
      } else {
        const message =
          result.reason instanceof Error
            ? result.reason.message
            : "Failed to load";
        nextStates.push({
          name: feed.name,
          url: feed.url,
          status: "error",
          itemCount: 0,
          error: message,
        });
      }
    });

    const deduped = new Map<string, FeedItem>();
    nextItems.forEach((item) => {
      const key = item.link || item.id;
      if (!deduped.has(key)) {
        deduped.set(key, item);
      }
    });

    const sorted = Array.from(deduped.values())
      .sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0))
      .slice(0, MAX_ITEMS);

    setItems(sorted);
    setFeedStates(nextStates);
    setLastUpdated(new Date());
    setLoading(false);
  }, [normalizedFeeds]);

  useEffect(() => {
    if (normalizedFeeds.length === 0) return () => {};

    refreshFeeds();
    const interval = window.setInterval(refreshFeeds, REFRESH_MS);

    return () => {
      window.clearInterval(interval);
      abortRef.current?.abort();
    };
  }, [normalizedFeeds, refreshFeeds]);

  const hasFeeds = normalizedFeeds.length > 0;

  return (
    <section className="rss-shell" aria-live="polite">
      <div className="rss-header">
        <div className="rss-title">
          <span className="rss-eyebrow">RSS Reading Room</span>
          <h2>Live from the blogs I follow</h2>
          <p>
            Auto refreshes every 15 minutes. Feeds are sourced from the blog
            links listed in your resume data.
          </p>
        </div>
        <div className="rss-actions">
          <button
            type="button"
            className="rss-refresh"
            onClick={refreshFeeds}
            disabled={loading || !hasFeeds}
          >
            {loading ? "Syncing..." : "Refresh"}
          </button>
          <div className="rss-updated">
            <span className="rss-updated-label">Last sync</span>
            <span>{formatUpdated(lastUpdated)}</span>
          </div>
        </div>
      </div>

      {!hasFeeds ? (
        <div className="rss-empty">
          Add RSS or Atom URLs in <span>src/data/resume.tsx</span> to start
          streaming updates here.
        </div>
      ) : (
        <>
          <div className="rss-feeds">
            {feedStates.map((feed) => (
              <div
                key={feed.url}
                className={`rss-feed-pill rss-${feed.status}`}
                style={{
                  "--rss-feed-accent": feedAccent(feed.title ?? feed.name),
                } as React.CSSProperties}
                title={feed.error ?? feed.url}
              >
                <span className="rss-feed-name">{feed.title ?? feed.name}</span>
                <span className="rss-feed-meta">
                  {feed.status === "loading"
                    ? "loading"
                    : `${feed.itemCount} items`}
                </span>
              </div>
            ))}
          </div>

          {items.length === 0 && !loading && (
            <div className="rss-empty">
              No entries yet. Double-check feed URLs or CORS rules.
            </div>
          )}

          <div className="rss-grid">
            {items.map((item, index) => (
              <article
                key={item.id}
                className="rss-card"
                style={{
                  animationDelay: `${index * 40}ms`,
                }}
              >
                <div className="rss-card-meta">
                  <span
                    className="rss-source"
                    style={{
                      "--rss-feed-accent": feedAccent(item.source),
                    } as React.CSSProperties}
                  >
                    {item.source}
                  </span>
                  {item.date && <span>{formatDate(item.date)}</span>}
                </div>
                <h3 className="rss-card-title">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                </h3>
                {item.summary && (
                  <p className="rss-card-summary">{item.summary}</p>
                )}
                <div className="rss-card-footer">
                  <span>Open article</span>
                  <span className="rss-arrow">-&gt;</span>
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default RSSReader;
