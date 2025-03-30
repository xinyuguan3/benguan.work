import React, { useState, useEffect } from 'react';
import './LatestNews.css';

interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

const LatestNews = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(`/api/ainvest/news`);
      if (!response.ok) throw new Error('Failed to fetch news');
      const data = await response.json();
      setArticles(data.items?.slice(0, 5) || []); // 只显示前5条新闻
    } catch (err) {
      setError('无法加载新闻');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="news-loading">加载中...</div>;
  if (error) return <div className="news-error">{error}</div>;

  return (
    <div className="news-container">
      <div className="news-header">
        <h2>Latest Investment News</h2>
        <div className="news-source">AI News</div>
      </div>
      <div className="news-list">
        {articles.map((article, index) => (
          <a 
            key={index} 
            href={article.link}
            target="_blank"
            rel="noopener noreferrer" 
            className="news-item"
          >
            <div className="news-title">{article.title}</div>
            <div className="news-content">{article.description}</div>
            <div className="news-meta">
              <span className="news-date">
                {new Date(article.pubDate).toLocaleDateString('zh-CN', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LatestNews; 