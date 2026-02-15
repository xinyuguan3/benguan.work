export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readingTime: number;
  tags: string[];
  cover: string;
  excerpt: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "systems-for-quiet-craft",
    title: "阅读体验",
    subtitle: "构建消失于工作中的工具的笔记。",
    date: "2025-11-12",
    readingTime: 12,
    tags: ["Design Systems", "Process"],
    cover: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 55%, #2a2a2a 100%)",
    excerpt:
      "当一个工具消失时，工艺变得可见。这里是一个构建界面的框架，它们保持低调，同时仍然精确且富有表现力。",
    content: `
## 安静的基线

优秀的工具有一个悖论：它越先进，就越不应该被注意到。一个好的基线不是极简主义，而是*一致性*。一旦你的界面以一种声音表达，其他部分可以保持微妙。

### 优化目标
- 意图与行动之间的延迟
- 转换过程中的认知摩擦
- 反馈的质感，而不仅仅是速度

## 实用启发式方法
1. 在第一秒内让主要操作可见。
2. 使用渐进显示来揭示更深层的控制。
3. 将空状态视为提示，而不是占位符。

## 一个小练习
选择一个你每天使用的工具。移除一个标签，用手势替代。工具是否仍然清晰可读？这种张力告诉你界面实际传达的内容。
`,
  },
  {
    slug: "essence-of-language",
    title: "语言的精华",
    subtitle: "",
    date: "2025-11-12",
    readingTime: 12,
    tags: ["Design Systems", "Process"],
    cover: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 55%, #2a2a2a 100%)",
    excerpt:
      "当一个工具消失时，工艺变得可见。这里是一个构建界面的框架，它们保持低调，同时仍然精确且富有表现力。",
    content: `
## 语言的壁障

最近有很多关于阅读这件事的想法，人类世界的大量交互都建立在文字的基础上，纵然它有很多限制，但它是目前最可靠的沟通方式，所以我们都要多写多说，练习和别人的沟通技巧。
很多时候我感觉自己像是和其他人是两个世界的一样，无法同频交流，我的语言系统过于直觉与粗野，写出来的东西缺少逻辑性与结构，更偏向散文，多数时候我会为此感到焦虑。

## 读书

纵使阅读书籍对我来说较为困难，但我仍然喜欢看各种书，享受知识流淌过大脑的感觉，享受对世界多了解一些的愉悦。
而且书籍中大量的非虚构类书籍，都是在写一件事：关于创业，关于如何为其他人类带来价值。比如《从零到一》、《精益创业》这类书，往往带有很多真实的创业案例。
阅读这些书总是有趣的，因为承载了大量关于过去几十年中，由信息时代中采集到的大量真实用户需求。如果说在商业世界，需求就像金子，那么用户就像金矿。
尤其是案例中提到的那些用户抱怨和市场反馈，就是价值千金的宝石。产品圈子里流传着一句话：哪里有抱怨，哪里就有生意。
我自己平时很喜欢就产品体验去逛reddit，读书之前我先看豆瓣和微信读书上的书评，选购商品要上b站小红书仔细筛选用户反馈（需要剥离广告）。
我的本能就是洞察人，我喜欢研究人，喜欢研究这个复杂系统。
我尤其喜欢人类的“社会网络”这个概念，每当我在生活中感到人类连接在一起时，心底都会涌现出感动的情绪。
然而，有时作者会希望借由复杂市场系统中的一次次案例，总结出人类这个复杂系统的共性。从而让读者能对其中获得洞察。
但是说实话，文字总是充满了视角与滤镜，案例与实验为了服务于作者观点而被写下时，有时难免会把复杂案例中的其他噪音剥离，因此你很难在短短几本书之中获得一些洞察

## 真正的洞察应该来源于你获得了许多世界的sub-context信息，也即潜信息：

1. 那些无法言说的社会运行规则和人情事故
2. 人类的本质：如虚荣与讲故事的能力

建立在潜信息的理解之上，就可以有效地在这些来源于真实世界的案例中，辨识出金子
我也在这些非虚构类的书籍阅读之下，自然而然地生出希望创业赚大钱，为其他人带来价值渴望。成功地加入了欲望他人欲望的正向经济循环中

## 目标

所以我现在就在做一款通过游戏化赋能阅读体验的平台，目标是参考duolingo的游戏化教育形式，把传统的阅读体验做成一个个强代入感的游戏demo。
以前这个产品无法成型，因为每本书都对应了高昂的开发成本。但是现在由于AI的技术提升，量产互动化的体验变成了可能，知识可以以一种从未有过的形式向着人们走来。
每个人都有机会通过更易于接受的方式去获取知识，找到自己热爱的领域


假设用户体验的价值公式是value=effort-cost,那么

- 降低阅读门槛（cost）
- 提升阅读正反馈（effort）

我目前总结出来有两个产品主要价值点：
- 解决了人的知识焦虑，将知识更高效地分发到人们手中
- 剥离开传统教育体制的筛选属性，帮人们发现自己的兴趣点，防止他们迷茫而根本不知道将来应该做什么而被埋没

`,
  },
  {
    slug: "notes-on-readable-motion",
    title: "Notes On Readable Motion",
    subtitle: "Why the best animation feels like typography.",
    date: "2025-09-30",
    readingTime: 9,
    tags: ["Motion", "UI"],
    cover: "linear-gradient(135deg, #101010 0%, #1f1f1f 55%, #2f2f2f 100%)",
    excerpt:
      "Motion is not decoration. It is punctuation. This piece outlines a small grammar for timing, easing, and sequence that keeps motion legible.",
    content: `
## Motion as punctuation

Think of motion as the comma and period of your interface. It doesn't dominate the sentence; it shapes the cadence.

### Timing rules

- 120-180ms for micro transitions
- 280-420ms for layout shifts
- Never stack unrelated animations

## Sequence, not spectacle

When elements enter, make them *agree* on direction and timing. That agreement is what the eye reads as order.
`,
  },
  {
    slug: "reading-the-edges",
    title: "Reading The Edges",
    subtitle: "Collecting insights from projects that almost failed.",
    date: "2025-07-18",
    readingTime: 14,
    tags: ["Lessons", "Product"],
    cover: "linear-gradient(135deg, #0c0c0c 0%, #1b1b1b 55%, #2b2b2b 100%)",
    excerpt:
      "Failure leaves sharp data. This field note looks at near misses and the patterns that emerge when delivery is tight and attention is scarce.",
    content: `
## What failure teaches

Projects rarely fail because of a single decision. They fail from *small compounding mismatches* between expectations, resources, and timelines.

### A quick checklist

- Was the scope negotiated with the same people who do the work?
- Are you measuring one signal or three?
- Did you schedule the first demo before the second week?
`,
  },
  {
    slug: "the-power-of-constraints",
    title: "The Power Of Constraints",
    subtitle: "Why boundaries unlock better ideas.",
    date: "2025-05-06",
    readingTime: 7,
    tags: ["Creativity", "Practice"],
    cover: "linear-gradient(135deg, #0b0b0b 0%, #1c1c1c 55%, #2c2c2c 100%)",
    excerpt:
      "Constraints are not a lack of freedom; they are a design surface. Here is a lightweight way to define them without boxing in your work.",
    content: `
## The constraint canvas

Define three boundaries:

1. Time
2. Materials
3. Audience

Only after those are clear should you open the idea space.

## Why it works

Constraints make comparisons possible. Without them, every idea feels equally right because nothing is testable.
`,
  },
];
