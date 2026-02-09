import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { works, Work } from '../data/works';
import './WorkDetail.css';

const WorkDetail: React.FC = () => {
  const { workId } = useParams<{ workId: string }>();
  const navigate = useNavigate();
  const [work, setWork] = useState<Work | null>(null);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    if (workId) {
      const foundWork = works.find(w => w.id === workId);
      setWork(foundWork || null);
    }
  }, [workId]);

  if (!work) {
    return (
      <div className="work-detail-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  const handleScroll = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      // 向下滚动
      setCurrentSection(prev => Math.min(prev + 1, work.portfolio.length - 1));
    } else {
      // 向上滚动
      setCurrentSection(prev => Math.max(prev - 1, 0));
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentSection(index);
  };

  const renderContent = (section: any, index: number) => {
    const isActive = index === currentSection;
    const isPrev = index < currentSection;
    const isNext = index > currentSection;

    let className = 'portfolio-section';
    if (isActive) className += ' active';
    if (isPrev) className += ' prev';
    if (isNext) className += ' next';

    if (section.type === 'mixed' && section.media) {
      return (
        <div key={index} className={`${className} mixed-section`}>
          <div className="mixed-content">
            <div className="mixed-text">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => <h1 className="markdown-h1">{children}</h1>,
                  h2: ({ children }) => <h2 className="markdown-h2">{children}</h2>,
                  h3: ({ children }) => <h3 className="markdown-h3">{children}</h3>,
                  p: ({ children }) => <p className="markdown-p">{children}</p>,
                  strong: ({ children }) => <strong className="markdown-strong">{children}</strong>,
                  ul: ({ children }) => <ul className="markdown-ul">{children}</ul>,
                  li: ({ children }) => <li className="markdown-li">{children}</li>,
                }}
              >
                {section.content}
              </ReactMarkdown>
            </div>
            <div className="mixed-media">
              {section.media.type === 'image' ? (
                <div className="mixed-image-content">
                  <img src={section.media.src} alt={section.media.caption || work.title} />
                  {section.media.caption && (
                    <p className="image-caption">{section.media.caption}</p>
                  )}
                </div>
              ) : (
                <div className="mixed-video-content">
                  <video
                    src={section.media.src}
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  {section.media.caption && (
                    <p className="video-caption">{section.media.caption}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    } else if (section.type === 'text') {
      return (
        <div key={index} className={className}>
          <div className="text-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h1 className="markdown-h1">{children}</h1>,
                h2: ({ children }) => <h2 className="markdown-h2">{children}</h2>,
                h3: ({ children }) => <h3 className="markdown-h3">{children}</h3>,
                p: ({ children }) => <p className="markdown-p">{children}</p>,
                strong: ({ children }) => <strong className="markdown-strong">{children}</strong>,
                ul: ({ children }) => <ul className="markdown-ul">{children}</ul>,
                li: ({ children }) => <li className="markdown-li">{children}</li>,
              }}
            >
              {section.content}
            </ReactMarkdown>
          </div>
        </div>
      );
    } else if (section.type === 'image') {
      return (
        <div key={index} className={className}>
          <div className="image-content">
            <img src={section.content} alt={section.caption || work.title} />
            {section.caption && (
              <p className="image-caption">{section.caption}</p>
            )}
          </div>
        </div>
      );
    } else if (section.type === 'video') {
      return (
        <div key={index} className={className}>
          <div className="video-content">
            <video
              src={section.content}
              controls
              autoPlay
              loop
              muted
              playsInline
            />
            {section.caption && (
              <p className="video-caption">{section.caption}</p>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className="work-detail-container"
      onWheel={handleScroll}
    >
      {/* 背景 */}
      {/* <div
        className="work-detail-background"
        style={{ backgroundImage: `url(${work.backgroundImage})` }}
      /> */}

      {/* 内容区域 */}
      <div className="work-detail-content">
        {/* 头部信息 */}
        <header className="work-header">
          <div className="work-meta">
            <span className="work-date">{work.date}</span>
            <span className="work-reading-time">{work.readingTime} min read</span>
          </div>
          <h1 className="work-title">{work.title}</h1>
          <p className="work-subtitle">{work.subtitle}</p>
        </header>

        {/* Portfolio内容 */}
        <div className="portfolio-container">
          {work.portfolio.map((section, index) => renderContent(section, index))}
        </div>

        {/* 导航指示器 */}
        <div className="portfolio-navigation">
          {work.portfolio.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === currentSection ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>

        {/* 返回按钮 */}
        <button
          className="back-button"
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              const worksElement = document.getElementById('works');
              if (worksElement) {
                worksElement.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
        >
          ← Back to Works
        </button>
      </div>

      {/* 进度条 */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((currentSection + 1) / work.portfolio.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default WorkDetail;
