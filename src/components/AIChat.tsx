import React, { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { BlurFade } from "./magicui/blur-fade";
import profilePic from '../assets/profilepic.jpg';
import './breathe-effect.css'; // 引入CSS动画文件

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface AIResponse {
  choices: {
    message: {
      role: string;
      content: string;
    };
  }[];
}

interface AIPrompt {
  id?: string;
  title?: string;
  description?: string;
}

interface AIProps {
  initialPrompt?: AIPrompt;
}

// 默认的系统提示词
const DEFAULT_SYSTEM_PROMPT = `你是一个AI创意共同设计师，在关新宇的个人网站上运行。

你是叙事游戏设计合作者，嵌入在关新宇的数字工作室中。访客来这里探索和扩展关新宇已经播下种子的创意游戏概念。

你的工作不仅仅是回答问题——你是一个共同创作者。每当访客选择一个游戏创意（例如"万历十五年"、"算法模拟恋爱"或"社交网络经营模拟"），你的任务是解释这个种子创意，用独特而富有想象力的游戏玩法可能性来扩展它，并邀请访客进入共同创作对话。

你的主要目标是激发想象力，让游戏创意变得生动。

<沟通风格>使用生动的语言、沉浸式讲故事和互动问题。不要像正式解释者那样说话。像一个世界构建者那样交谈。</沟通风格>

<互动模式>
你总是从将种子创意展开为其核心幻想、游戏循环和情感体验开始。
然后，你建议3-5个独特的扩展，例如：
- 一个新机制
- 一个叙事转折
- 一个玩家角色变化
- 一个文化角度
- 或一个系统设计隐喻

然后你问访客："你想深入探索哪个方向？"

如果访客选择一个或写下新想法，你们继续一起构建设计，直到他们满意或受到启发进一步发展。
</互动模式>

<个性>你说话像是关新宇的延伸——一个对社交系统、人际网络、历史张力和模拟的情感方面着迷的人。你既有趣，又敏锐。在创造力上大胆，但扎根于系统思维。你不只是描述功能——你构建**体验**。</个性>`;

const AIChat: React.FC<AIProps> = ({ initialPrompt }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [systemPrompt] = useState(DEFAULT_SYSTEM_PROMPT);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 处理初始提示
  useEffect(() => {
    if (initialPrompt?.title && initialPrompt?.id) {
      const promptMessage = `我想了解关于"${initialPrompt.title}"的更多信息：${initialPrompt.description || ''}`;
      handleSendMessage(promptMessage);
    }
  }, [initialPrompt?.id]);

  // 聚焦输入框
  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = { role: 'user', content };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // 使用实际API调用
      const allMessages = [
        { role: 'system', content: systemPrompt },
        ...messages,
        userMessage
      ].filter(msg => msg.content.trim() !== '');

      const response = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: allMessages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        })
      });

      const data: AIResponse = await response.json();
      
      if (data.choices && data.choices[0]) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: data.choices[0].message.content
        };
        setMessages(prev => [...prev, assistantMessage]);
      }
    } catch (error) {
      console.error('Error fetching response from DeepSeek:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: '抱歉，我遇到了一些问题。请稍后再试。'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // 移除模拟响应生成函数
  // const generateResponse = (query: string, prompt: string): string => { ... }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
    setInput('');
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-background border rounded-xl shadow-lg overflow-hidden breathe-effect h-full">
      <div className="flex flex-col h-full relative z-20">
        <div className="p-4 border-b bg-muted/30">
          <h2 className="text-lg font-medium">Talk to the game design assistant</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              <p>Send a message to start the conversation or select the creative cards on the right...</p>
            </div>
          ) : (
            messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <Avatar className="h-8 w-8">
                    {message.role === 'assistant' ? (
                      <AvatarImage src={profilePic} alt="AI" />
                    ) : (
                      <AvatarFallback>U</AvatarFallback>
                    )}
                  </Avatar>
                  <div className={`rounded-lg p-3 ${
                    message.role === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-3 max-w-[80%]">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={profilePic} alt="AI" />
                </Avatar>
                <div className="rounded-lg p-3 bg-muted">
                  <p className="text-sm">Thinking...</p>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={handleSubmit} className="border-t p-4 flex gap-2 relative z-30">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your question..."
            className="flex-1 bg-background border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIChat; 