import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { posts } from "../data/posts";
import { getViews, incrementViews } from "../lib/views";
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

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = useMemo(() => posts.find((entry) => entry.slug === slug), [slug]);
  const [views, setViews] = useState(0);

  useEffect(() => {
    if (!post) return;
    const initial = getViews(post.slug);
    setViews(initial);
    const updated = incrementViews(post.slug);
    setViews(updated);
  }, [post]);

  if (!post) {
    return (
      <div className="post-shell">
        <SiteNavbar />
        <div className="blog-container">
          <section className="post-hero">
            <h1>Post not found</h1>
            <p>Try another issue from the blog archive.</p>
            <Link className="post-back" to="/blog">Back to blog</Link>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="post-shell">
      <SiteNavbar />

      <div className="blog-container">
        <section className="post-hero">
          <div className="post-meta-row">
            <span>{formatDate(post.date)}</span>
            <span>{post.readingTime} min</span>
            <span>{views} views</span>
          </div>
          <h1>{post.title}</h1>
          <p>{post.subtitle}</p>
          <div className="blog-tag-list">
            {post.tags.map((tag) => (
              <span className="blog-tag" key={tag}>{tag}</span>
            ))}
          </div>
          <div className="post-cover" style={{ background: post.cover }} />
        </section>

        <section className="post-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </section>

        <Link className="post-back" to="/blog">← Back to blog</Link>
      </div>
    </div>
  );
};

export default BlogPost;
