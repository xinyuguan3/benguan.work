import React, { useEffect, useRef } from 'react';
import obelisk from 'obelisk.js';
import './IsometricContributions.css';

interface IsometricContributionsProps {
  contributions: Array<{
    date: string;
    count: number;
  }>;
}

const IsometricContributions: React.FC<IsometricContributionsProps> = ({ contributions }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log('IsometricContributions useEffect triggered');
    console.log('Contributions data:', contributions);
    
    if (!canvasRef.current || !contributions.length) {
      console.log('Early return conditions:', {
        hasCanvas: !!canvasRef.current,
        contributionsLength: contributions.length
      });
      return;
    }

    try {
      const canvas = canvasRef.current;
      // 增加画布宽度以容纳所有方块
      const CANVAS_WIDTH = 300;
      const CANVAS_HEIGHT = 200;
      canvas.width = CANVAS_WIDTH;
      canvas.height = CANVAS_HEIGHT;

      console.log('Canvas dimensions:', {
        width: canvas.width,
        height: canvas.height,
        clientWidth: canvas.clientWidth,
        clientHeight: canvas.clientHeight
      });

      // 计算最大贡献数，用于高度缩放
      const maxCount = Math.max(...contributions.map(day => day.count));
      
      // 保持方块大小，调整其他参数
      const SIZE = 20;  // 方块基础大小
      const MAX_HEIGHT = 80;  // 最大高度
      const OFFSET = 10;  // 稍微增加间距
      
      // 将视图原点移到更左侧的位置
      const point = new obelisk.Point(120, 80);
      const pixelView = new obelisk.PixelView(canvas, point);

      // 清除画布
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      // 按周分组
      const weeks: Array<Array<{date: string; count: number}>> = [];
      for (let i = 0; i < contributions.length; i += 7) {
        weeks.push(contributions.slice(i, i + 7));
      }

      // 绘制贡献块
      let transformX = 0;
      weeks.forEach((week, weekIndex) => {
        const x = transformX / (OFFSET + 1);
        transformX += OFFSET + SIZE/2;  // 调整间距

        week.forEach((day, dayIndex) => {
          const y = dayIndex;
          
          // 计算方块高度
          let cubeHeight = 4;  // 最小高度
          if (maxCount > 0) {
            cubeHeight += Math.floor((MAX_HEIGHT / maxCount) * day.count);
          }

          // 创建方块
          const dimension = new obelisk.CubeDimension(SIZE, SIZE, cubeHeight);
          
          // 设置颜色
          let color;
          if (day.count === 0) {
            color = new obelisk.CubeColor().getByHorizontalColor(0xebedf0);
          } else if (day.count <= 1) {
            color = new obelisk.CubeColor().getByHorizontalColor(0x9be9a8);
          } else if (day.count <= 2) {
            color = new obelisk.CubeColor().getByHorizontalColor(0x40c463);
          } else if (day.count <= 4) {
            color = new obelisk.CubeColor().getByHorizontalColor(0x30a14e);
          } else {
            color = new obelisk.CubeColor().getByHorizontalColor(0x216e39);
          }

          // 创建方块并设置位置
          const cube = new obelisk.Cube(dimension, color, false);
          const p3d = new obelisk.Point3D(SIZE * x, SIZE * y, 0);
          
          // 渲染方块
          pixelView.renderObject(cube, p3d);
        });
      });

    } catch (error) {
      console.error('Error rendering isometric view:', error);
    }
  }, [contributions]);

  return (
    <div className="isometric-contributions">
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          maxWidth: '720px',
          height: '92px',  // 稍微增加高度
          margin: '0 auto',
          backgroundColor: 'var(--contribution-bg, #ffffff)',
          imageRendering: 'pixelated',
          objectFit: 'contain'
        }}
      />
    </div>
  );
};

export default IsometricContributions; 