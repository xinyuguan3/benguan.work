import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './WorksShowcase.css';

interface Work {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  backgroundImage: string;
  cardMedia: {
    type: 'image' | 'video';
    src: string;
  }[];
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  readingTime: number;
  portfolio: {
    type: 'text' | 'image' | 'video' | 'mixed';
    content: string;
    caption?: string;
    media?: {
      type: 'image' | 'video';
      src: string;
      caption?: string;
    };
  }[];
}

interface WorksShowcaseProps {
  works: Work[];
}

const WorksShowcase: React.FC<WorksShowcaseProps> = ({ works }) => {
  const navigate = useNavigate();
  const [hoveredWork, setHoveredWork] = useState<string | null>(null);
  const [previousWork, setPreviousWork] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const imageCardRef = useRef<HTMLDivElement>(null);
  const infoCardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hoveredItemRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mediaIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // 处理作品悬停 - 优化版本，减少延迟
  const handleWorkHover = (workId: string) => {
    // 清除任何现有的超时
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // 清除媒体轮播定时器
    if (mediaIntervalRef.current) {
      clearInterval(mediaIntervalRef.current);
      mediaIntervalRef.current = null;
    }

    // 如果悬停的是不同的作品，立即更新状态
    if (hoveredWork !== workId) {
      // 如果已经有悬停的作品，先保存它
      if (hoveredWork) {
        setPreviousWork(hoveredWork);
      }
      
      // 重置媒体索引
      setCurrentMediaIndex(0);
      
      // 立即更新当前悬停的作品ID
      setHoveredWork(workId);
      setIsTransitioning(true);
      
      // 立即显示详情，不等待
      setShowDetails(true);
      setIsFadingOut(false);
      
      // 设置媒体轮播
      const work = works.find(w => w.id === workId);
      if (work && work.cardMedia.length > 1) {
        mediaIntervalRef.current = setInterval(() => {
          setCurrentMediaIndex(prevIndex => (prevIndex + 1) % work.cardMedia.length);
        }, 3000); // 每3秒切换一次媒体
      }
    }
  };

  // 处理鼠标离开 - 优化版本，减少延迟
  const handleWorkLeave = () => {
    // 清除任何现有的超时
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    // 清除媒体轮播定时器
    if (mediaIntervalRef.current) {
      clearInterval(mediaIntervalRef.current);
      mediaIntervalRef.current = null;
    }

    // 立即开始淡出
    setIsFadingOut(true);
    
    // 使用较短的延迟
    timeoutRef.current = setTimeout(() => {
      setPreviousWork(hoveredWork);
      setHoveredWork(null);
      setIsTransitioning(false);
      setShowDetails(false);
      setIsFadingOut(false);
      setCurrentMediaIndex(0);
    }, 150); // 减少延迟时间
  };

  // 手动切换媒体
  const handleMediaChange = (index: number) => {
    // 清除自动轮播
    if (mediaIntervalRef.current) {
      clearInterval(mediaIntervalRef.current);
      mediaIntervalRef.current = null;
    }
    
    // 设置新的索引
    setCurrentMediaIndex(index);
    
    // 重新启动自动轮播
    const work = works.find(w => w.id === hoveredWork);
    if (work && work.cardMedia.length > 1) {
      mediaIntervalRef.current = setInterval(() => {
        setCurrentMediaIndex(prevIndex => (prevIndex + 1) % work.cardMedia.length);
      }, 3000); // 每3秒切换一次媒体
    }
  };

  const handleWorkClick = (workId: string) => {
    console.log(`Work ${workId} clicked`);
    // 导航到作品详情页面
    navigate(`/work/${workId}`);
  };

  // 找到当前悬停的作品
  const hoveredWorkData = works.find(work => work.id === hoveredWork);
  const previousWorkData = works.find(work => work.id === previousWork);

  // 当组件卸载时清除所有定时器
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (mediaIntervalRef.current) {
        clearInterval(mediaIntervalRef.current);
      }
    };
  }, []);

  // 预加载所有图片以提高响应速度
  useEffect(() => {
    works.forEach(work => {
      work.cardMedia.forEach(media => {
        if (media.type === 'image') {
          const img = new Image();
          img.src = media.src;
        }
      });
      
      if (work.backgroundImage) {
        const bgImg = new Image();
        bgImg.src = work.backgroundImage;
      }
    });
  }, [works]);

  // 渲染媒体内容（图片或视频）
  const renderMedia = (work: Work) => {
    const media = work.cardMedia[currentMediaIndex];
    
    if (media.type === 'video') {
      return (
        <video 
          src={media.src} 
          autoPlay 
          loop 
          muted 
          playsInline
          key={`video-${work.id}-${currentMediaIndex}`}
        />
      );
    } else {
      return <img src={media.src} alt={work.title} key={`img-${work.id}-${currentMediaIndex}`} />;
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`works-showcase-container ${showDetails ? 'showing-details' : ''}`}
    >
      {/* 背景图层 */}
      <div className="background-container">
        {previousWorkData && (
          <div 
            className={`background-image ${!isTransitioning || !hoveredWork ? 'active' : 'fade-out'}`}
            style={{ backgroundImage: `url(${previousWorkData.backgroundImage})` }}
            key={`bg-prev-${previousWork}`}
          />
        )}
        {hoveredWorkData && (
          <div 
            className={`background-image ${isTransitioning ? 'active' : ''}`}
            style={{ backgroundImage: `url(${hoveredWorkData.backgroundImage})` }}
            key={`bg-current-${hoveredWork}`}
          />
        )}
        <div className="background-overlay" />
      </div>
      
      {/* 作品列表 */}
      <div className="works-showcase">
        {works.map((work) => (
          <div 
            key={work.id} 
            className={`work-item ${hoveredWork === work.id ? 'hovered' : ''}`}
            ref={hoveredWork === work.id ? hoveredItemRef : null}
            onMouseEnter={() => handleWorkHover(work.id)}
            onMouseLeave={handleWorkLeave}
            onClick={() => handleWorkClick(work.id)}
          >
            <div className="work-number">{work.id}</div>
            <div className="work-content">
              <h2 className="work-title">{work.title}</h2>
              <p className="work-subtitle">+ {work.subtitle} +</p>
            </div>
            <div className="work-date">{work.date}</div>
            <div className="work-reading-time">{work.readingTime} min read</div>
            <div className="work-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* 作品详情卡片 */}
      {hoveredWork && hoveredWorkData && showDetails && (
        <div 
          className="work-details-container"
          key={`details-${hoveredWork}`}
        >
          <div className="work-card-wrapper">
            <div 
              ref={imageCardRef}
              className={`work-image-card ${isFadingOut ? 'fade-out' : ''}`}
            >
              {renderMedia(hoveredWorkData)}
              
              {/* 媒体导航点 */}
              {hoveredWorkData.cardMedia.length > 1 && (
                <div className="media-nav">
                  {hoveredWorkData.cardMedia.map((_, index) => (
                    <button
                      key={`nav-${index}`}
                      className={`media-nav-dot ${currentMediaIndex === index ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMediaChange(index);
                      }}
                      aria-label={`View media ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
            <div 
              ref={infoCardRef}
              className={`work-info-card ${isFadingOut ? 'fade-out' : ''}`}
            >
              <h2>{hoveredWorkData.title}</h2>
              <p>{hoveredWorkData.subtitle}</p>
              {/* <span className="view-project">查看项目</span> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorksShowcase; 