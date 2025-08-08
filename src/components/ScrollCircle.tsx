import React, { useEffect, useState } from 'react';
import './ScrollCircle.css';

interface ScrollCircleProps {
  color?: string;
  endColor?: string; // 滚动结束时的颜色
  initialSize?: number;
  maxSize?: number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
}

// 辅助函数：在两个颜色之间插值
const interpolateColor = (color1: string, color2: string, factor: number) => {
  // 将十六进制颜色转换为RGB
  const parseColor = (hexColor: string) => {
    const hex = hexColor.replace('#', '');
    return {
      r: parseInt(hex.substring(0, 2), 16),
      g: parseInt(hex.substring(2, 4), 16),
      b: parseInt(hex.substring(4, 6), 16)
    };
  };

  // 确保颜色是有效的十六进制颜色
  if (!color1.startsWith('#') || !color2.startsWith('#')) {
    return color1; // 返回默认颜色
  }

  const c1 = parseColor(color1);
  const c2 = parseColor(color2);

  // 在两个颜色之间插值
  const r = Math.round(c1.r + factor * (c2.r - c1.r));
  const g = Math.round(c1.g + factor * (c2.g - c1.g));
  const b = Math.round(c1.b + factor * (c2.b - c1.b));

  // 将RGB转换回十六进制
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

const ScrollCircle: React.FC<ScrollCircleProps> = ({
  color = '#3B82F6', // 默认蓝色
  endColor,
  initialSize = 300,
  maxSize = 1200,
  position = 'top-right'
}) => {
  const [size, setSize] = useState(initialSize);
  const [currentColor, setCurrentColor] = useState(color);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollRatio = Math.min(scrollY / (maxScroll * 0.5), 1); // 使用一半的滚动高度达到最大值
      
      const newSize = initialSize + (maxSize - initialSize) * scrollRatio;
      setSize(newSize);
      
      // 如果提供了结束颜色，则在滚动时改变颜色
      if (endColor) {
        setCurrentColor(interpolateColor(color, endColor, scrollRatio));
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化时调用一次
    return () => window.removeEventListener('scroll', handleScroll);
  }, [initialSize, maxSize, color, endColor]);
  
  // 根据位置设置样式
  const getPositionStyle = () => {
    switch(position) {
      case 'top-left':
        return { top: '-50%', left: '-50%' };
      case 'top-right':
        return { top: '-50%', right: '-50%' };
      case 'bottom-left':
        return { bottom: '-50%', left: '-50%' };
      case 'bottom-right':
        return { bottom: '-50%', right: '-50%' };
      case 'center':
        return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
      default:
        return { top: '-50%', right: '-50%' };
    }
  };
  
  return (
    <div 
      className="scroll-circle"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: currentColor,
        opacity: 0.7,
        ...getPositionStyle()
      }}
    />
  );
};

export default ScrollCircle; 