import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
}

interface ConnectionLinesProps {
  from: Point;
  to: Point[];
  visible: boolean;
}

const ConnectionLines: React.FC<ConnectionLinesProps> = ({ from, to, visible }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置画布大小为窗口大小
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!visible) return;

    // 设置线条样式
    ctx.strokeStyle = '#B4547C';
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';

    // 为每个目标点绘制一条线
    to.forEach((point) => {
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      
      // 使用二次贝塞尔曲线创建平滑的曲线
      const controlPoint = {
        x: (from.x + point.x) / 2,
        y: from.y - 50
      };
      
      ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, point.x, point.y);
      
      // 添加渐变效果
      const gradient = ctx.createLinearGradient(from.x, from.y, point.x, point.y);
      gradient.addColorStop(0, 'rgba(180, 84, 124, 0.8)');
      gradient.addColorStop(1, 'rgba(180, 84, 124, 0.2)');
      ctx.strokeStyle = gradient;
      
      ctx.stroke();
    });
  }, [from, to, visible]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 100,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
    />
  );
};

export default ConnectionLines; 