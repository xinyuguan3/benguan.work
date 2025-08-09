import React from 'react';
import { BlurFade } from './magicui/blur-fade';

export interface IdeaCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
  gradientFrom?: string;
  gradientTo?: string;
  bgColor?: string;
  textColor?: string;
  onClick?: () => void;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ 
  // id, 
  title, 
  description, 
  icon,
  color = 'text-white',
  // gradientFrom = 'from-primary',
  // gradientTo = 'to-primary/50',
  bgColor = 'bg-primary',
  textColor = 'text-white',
  onClick
}) => {
  // 判断是否为浅色背景
  const isLightBackground = bgColor.includes('bg-white');
  const borderStyle = isLightBackground ? 'border-2 border-red-500' : '';

  return (
    <BlurFade delay={0.1}>
      <div
        onClick={onClick}
        className={`
          cursor-pointer
          ${bgColor} ${borderStyle} rounded-2xl overflow-hidden
          transition-all duration-300 transform hover:scale-105
          hover:shadow-2xl active:scale-95
          group relative
        `}
        style={{ maxWidth: '280px' }}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="mb-2">
            <div className={`text-xs font-medium uppercase tracking-wider ${textColor} opacity-80`}>
              {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </div>
            <h3 className={`font-bold text-xl ${textColor} mt-1`}>{title}</h3>
          </div>
          
          <p className={`text-sm ${textColor} opacity-85 mb-8`}>{description}</p>
          
          <div className="mt-auto">
            <div className={`text-4xl font-bold uppercase tracking-tighter ${textColor} opacity-70`}>
              {title.split(' ')[0].substring(0, 4)}
            </div>
          </div>
        </div>
        
        <div className="absolute top-4 right-4">
          <div className={`p-2 rounded-full ${isLightBackground ? 'bg-red-100' : 'bg-white/20'} ${color}`}>
            {icon}
          </div>
        </div>
      </div>
    </BlurFade>
  );
};

export default IdeaCard; 