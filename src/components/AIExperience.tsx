import React, { useState, useRef } from 'react';
import AIChat from './AIChat';
import IdeaCard, { IdeaCardProps } from './DraggableCard';
import { BlurFade } from './magicui/blur-fade';
import { 
  RocketIcon, 
  MagicWandIcon, 
  LightningBoltIcon, 
  MixIcon 
} from '@radix-ui/react-icons';

interface IdeaCardData extends Omit<IdeaCardProps, 'icon'> {
  iconName: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  bgColor: string;
  textColor: string;
}

const ideaCards: IdeaCardData[] = [
  {
    id: 'idea-1',
    title: '《万历十五年》',
    description: '权力与惰政之间的孤独博弈。扮演皇帝，面对腐败官场、民间灾情、边疆动乱和历史的沉默。以"决策-后果-沉默-修正"为循环，探索权力边界下的无力与挣扎。',
    iconName: 'rocket',
    color: 'text-white',
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-amber-400',
    bgColor: 'bg-amber-500',
    textColor: 'text-white',
  },
  {
    id: 'idea-2',
    title: '成为社交网络算法',
    description: '你不是用户，你是推送系统。你影响亿万用户的思想、情绪与关系。你是系统，你必须在"用户参与度"与"社会稳定"之间取舍。每次推送都会制造蝴蝶效应。',
    iconName: 'magic',
    color: 'text-white',
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-blue-400',
    bgColor: 'bg-blue-500',
    textColor: 'text-white',
  },
  {
    id: 'idea-3',
    title: '海边小教堂重建计划',
    description: '复仇少女与信仰重建的慢节奏叙事游戏。年轻的"修女"隐藏着过去的仇恨，在重建废墟中与岛上居民产生羁绊。她能否在复仇与和解之间做出抉择？',
    iconName: 'lightning',
    color: 'text-red-500',
    gradientFrom: 'from-red-500',
    gradientTo: 'to-red-400',
    bgColor: 'bg-white',
    textColor: 'text-red-500',
  }
];

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'rocket':
      return <RocketIcon className="w-5 h-5" />;
    case 'magic':
      return <MagicWandIcon className="w-5 h-5" />;
    case 'lightning':
      return <LightningBoltIcon className="w-5 h-5" />;
    case 'mix':
      return <MixIcon className="w-5 h-5" />;
    default:
      return <RocketIcon className="w-5 h-5" />;
  }
};

const AIExperience: React.FC = () => {
  const [selectedIdea, setSelectedIdea] = useState<IdeaCardData | null>(null);
  const [showSelectionAnimation, setShowSelectionAnimation] = useState(false);
  const animationRef = useRef<HTMLDivElement>(null);

  const handleSelectIdea = (idea: IdeaCardData) => {
    setSelectedIdea(idea);
    
    // 显示选择动画
    setShowSelectionAnimation(true);
    setTimeout(() => {
      setShowSelectionAnimation(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-16">
      <BlurFade delay={0.1}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              AI Agent
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tighter sm:text-5xl">
              Interactive Experience Generator
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Select a creative card, and generate a special experience
            </p>
          </div>
        </div>
      </BlurFade>

      <div className="flex flex-col lg:flex-row gap-8 h-[850px] pt-16">
        <div className="lg:w-2/3 relative h-full">
          <AIChat initialPrompt={selectedIdea || undefined} />
          
          {showSelectionAnimation && (
            <div 
              ref={animationRef}
              className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
            >
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md animate-bounce">
                Selected card, start conversation!
              </div>
            </div>
          )}
        </div>
        
        <div className="lg:w-1/3 h-full">
          <BlurFade delay={0.2}>
            <div className="bg-muted/30 p-6 rounded-xl border h-full overflow-y-auto">
              <h3 className="text-xl font-medium mb-4">Creative Cards</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Click these cards, explore different creative and functions
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                {ideaCards.map((card) => (
                  <IdeaCard
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    description={card.description}
                    icon={getIconComponent(card.iconName)}
                    color={card.color}
                    gradientFrom={card.gradientFrom}
                    gradientTo={card.gradientTo}
                    bgColor={card.bgColor}
                    textColor={card.textColor}
                    onClick={() => handleSelectIdea(card)}
                  />
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
};

export default AIExperience; 