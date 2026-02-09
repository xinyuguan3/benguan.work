import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import { getAllViews } from "../lib/views";
import SiteNavbar from "./SiteNavbar";
import "./Blog.css";

const formatDate = (value: string) => {
  const date = new Date(value);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const BlogHome: React.FC = () => {
  const [views, setViews] = useState<Record<string, number>>({});
  const [activeTag, setActiveTag] = useState<string>("All");

  const sortedPosts = useMemo(
    () => [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [],
  );

  const latest = sortedPosts[0];
  const morePosts = sortedPosts.slice(1);
  const featured = sortedPosts.slice(0, 3);
  const tags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((post) => post.tags.forEach((tag) => set.add(tag)));
    return ["All", ...Array.from(set)];
  }, []);

  useEffect(() => {
    setViews(getAllViews());
  }, []);

  const filtered = activeTag === "All"
    ? morePosts
    : morePosts.filter((post) => post.tags.includes(activeTag));

  return (
    <div className="blog-shell">
      <SiteNavbar />

      <div className="blog-container">
        <section className="blog-hero">
          <h1>Ben Guan / Notes</h1>
          <p>
            An ongoing notebook for design, product craft, and the quiet rituals
            of building. New issues drop when the work demands a trace.
          </p>
        </section>

        <section className="blog-grid">
          <div className="blog-card">
            <div
              className="blog-card-cover"
              style={{ background: latest.cover }}
            />
            <div className="blog-card-meta">
              <span>Latest</span>
              <span>{formatDate(latest.date)}</span>
              <span>{latest.readingTime} min</span>
              <span>{views[latest.slug] ?? 0} views</span>
            </div>
            <h2 className="blog-card-title">
              <Link to={`/blog/${latest.slug}`}>{latest.title}</Link>
            </h2>
            <p className="blog-card-excerpt">{latest.excerpt}</p>
            <div className="blog-tag-list">
              {latest.tags.map((tag) => (
                <span className="blog-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <aside className="blog-sidebar">
            <div className="blog-panel" id="topics">
              <h3>Topics</h3>
              {tags.map((tag) => (
                <button
                  key={tag}
                  className={`blog-topic-button ${tag === activeTag ? "active" : ""}`}
                  onClick={() => setActiveTag(tag)}
                >
                  <span>{tag}</span>
                  <span>
                    {tag === "All"
                      ? morePosts.length
                      : morePosts.filter((post) => post.tags.includes(tag)).length}
                  </span>
                </button>
              ))}
            </div>
            <div className="blog-panel">
              <h3>About</h3>
              <p className="blog-muted">
                Notes on product design, narrative systems, and the small rituals of making.
              </p>
            </div>
            <div className="blog-panel">
              <h3>Featured</h3>
              {featured.map((post) => (
                <div className="blog-topic" key={post.slug}>
                  <Link className="blog-link-muted" to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </div>
              ))}
            </div>
            <div className="blog-panel">
              <h3>Subscribe</h3>
              <p className="blog-muted">
                A minimal subscription placeholder for static deployments.
              </p>
              <div className="blog-subscribe">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="blog-input"
                />
                <button
                  type="button"
                  className="blog-button"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </section>

        <section className="blog-list" id="issues">
          <h3 className="blog-section-title">More Issues</h3>
          {filtered.map((post) => (
            <article className="blog-list-item" key={post.slug}>
              <div className="blog-card-meta">
                <span>{formatDate(post.date)}</span>
                <span>{post.readingTime} min</span>
                <span>{views[post.slug] ?? 0} views</span>
              </div>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              <div className="blog-tag-list">
                {post.tags.map((tag) => (
                  <span className="blog-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <footer className="blog-footer">
          Designed as a notebook. Built on Vite + React.
        </footer>
      </div>
    </div>
  );
};

export default BlogHome;
