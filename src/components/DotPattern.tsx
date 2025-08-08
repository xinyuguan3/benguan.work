import React, { useEffect, useRef } from 'react';
import './DotPattern.css';

interface DotPatternProps {
  color?: string;
  dotSize?: number;
  spacing?: number;
  opacity?: number;
  breathingSpeed?: number;
  breathingIntensity?: number;
}

const DotPattern: React.FC<DotPatternProps> = ({
  color = '#ffffff',
  dotSize = 2,  // 增大默认点的大小
  spacing = 15, // 减小默认间距，使点更密集
  opacity = 0.3,
  breathingSpeed = 2,
  breathingIntensity = 0.2
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<{x: number; y: number; baseSize: number}[][]>([]);
  const timeRef = useRef(0);
  const scrollYRef = useRef(0);
  const animationFrameIdRef = useRef<number | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // 监听滚动事件
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      
      // 获取文档的总高度
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      
      // 设置画布宽度为视口宽度，高度为文档总高度
      canvas.width = window.innerWidth * dpr;
      canvas.height = docHeight * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${docHeight}px`;
      
      // 重新初始化点的位置
      initDots(window.innerWidth, docHeight);
    };
    
    // 初始化点的固定位置，只在尺寸变化时重新计算
    const initDots = (width: number, height: number) => {
      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;
      
      const dots: {x: number; y: number; baseSize: number}[][] = [];
      
      for (let i = 0; i < cols; i++) {
        dots[i] = [];
        for (let j = 0; j < rows; j++) {
          // 添加轻微的随机偏移，但只计算一次，不会随时间变化
          const offsetX = (Math.random() - 0.5) * spacing * 0.2;
          const offsetY = (Math.random() - 0.5) * spacing * 0.2;
          
          const x = i * spacing + offsetX;
          const y = j * spacing + offsetY;
          
          // 为每个点预计算一个基础大小因子，增加一些变化但不会随时间抖动
          const baseSize = 0.3 + Math.random() * 0.4;
          
          dots[i][j] = { x, y, baseSize };
        }
      }
      
      dotsRef.current = dots;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const drawDots = () => {
      // 增加时间，控制呼吸效果
      timeRef.current += 0.001;
      const time = timeRef.current;
      
      // 清除画布
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 计算呼吸因子 - 使用余弦函数使变化更平滑
      const breathFactor = Math.cos(time / breathingSpeed) * breathingIntensity + (1 - breathingIntensity / 2);
      
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const scrollY = scrollYRef.current;
      
      const dots = dotsRef.current;
      
      ctx.fillStyle = color;
      
      // 只绘制当前视口可见区域的点，加上一些额外的边距
      const startCol = 0;
      const endCol = dots.length;
      const startRow = Math.max(0, Math.floor(scrollY / spacing) - 5);
      const endRow = Math.min(
        dots[0]?.length || 0,
        Math.ceil((scrollY + viewportHeight) / spacing) + 5
      );
      
      for (let i = startCol; i < endCol; i++) {
        if (!dots[i]) continue;
        
        for (let j = startRow; j < endRow; j++) {
          if (!dots[i][j]) continue;
          
          const dot = dots[i][j];
          
          // 检查点是否在当前视口附近
          if (dot.y < scrollY - spacing * 5 || dot.y > scrollY + viewportHeight + spacing * 5) {
            continue;
          }
          
          // 添加更平滑的变化，基于固定的位置
          const distanceFromCenter = Math.sqrt(
            Math.pow((dot.x - viewportWidth / 2) / viewportWidth, 2) + 
            Math.pow(((dot.y - scrollY) - viewportHeight / 2) / viewportHeight, 2)
          );
          
          // 使用预计算的基础大小和固定的位置计算，减少随机性
          const sizeFactor = (1 - distanceFromCenter * 0.3) * dot.baseSize;
          
          // 增加呼吸效果对点大小的影响，但保持不透明度相对稳定
          const currentOpacity = opacity * sizeFactor * (breathFactor * 0.1 + 0.9);
          // 增加呼吸对点大小的影响 - 使变化更明显
          const currentSize = dotSize * sizeFactor * (breathFactor * 0.5 + 0.5);
          
          ctx.globalAlpha = currentOpacity;
          
          // 绘制小方块而不是圆形
          ctx.fillRect(
            dot.x - currentSize, 
            dot.y - currentSize, 
            currentSize * 2, 
            currentSize * 2
          );
        }
      }
      
      // 保存动画帧ID以便清理
      animationFrameIdRef.current = requestAnimationFrame(drawDots);
    };
    
    // 开始动画循环
    drawDots();
    
    // 清理函数
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [color, dotSize, spacing, opacity, breathingSpeed, breathingIntensity]);
  
  return <canvas ref={canvasRef} className="dot-pattern" />;
};

export default DotPattern; 