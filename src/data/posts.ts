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
    title: "重拾自媒体",
    subtitle: "认真经营的开始，不要停",
    date: "2025-09-30",
    readingTime: 9,
    tags: ["Motion", "UI"],
    cover: "linear-gradient(135deg, #101010 0%, #1f1f1f 55%, #2f2f2f 100%)",
    excerpt:
      "Motion is not decoration. It is punctuation. This piece outlines a small grammar for timing, easing, and sequence that keeps motion legible.",
    content: `
## 开始发自媒体

今天又开始重拾小红书，开始发自己的笔记，但是感到自己明显端着，还需要靠gemini生成第一篇的文案内容，因为太担心自己无法和其他人同频。
这种恐惧感让我不知道文字上该做自己还是迎合别人。所以我只能回到自己的博客中，开始不要停止的写作，重新锻炼自己对于文字的掌控力。

## 文字组织力

对于文字的掌控力是一种上层架构，它建立在人类这几百亿参数的神经网络之上，需要反复锻炼。这个星球上最具影响力的一些人类：政客、作家、企业、哲学家。
他们总是能说会道，对于文字的长期组织使得结构与逻辑思维能时常保持清晰紧密，这就是长期组织语言能给大脑底层能力带来的提升。

## 博客

最近爱看很多外网RSS订阅的博客，我尤其喜欢看互联网产品类的博客。科技媒体总是为了整个资本趋势而为了互联网科技各种吹捧，但它往往遮蔽掉了一些真相。
科技媒体习惯了通过组织语言来为全球的科技人员洗脑，让更多人、钱加入到这个趋势中。而很多右派精英对于这些现象的批评也精确到位：人类的科技已经停滞，
我们不再像上世纪一样每天热切地讨论着殖民火星、汽车飞行、太空电梯，各种科幻幻想逐渐被手机与互联网应用取代，我们落回了小部落状态，不再仰望星空。
这也是为什么我喜欢看互联网产品类博客：我从未生在那个向往太空和一切宏伟目标的时代，我只能看到的是，天道的规律和涨幅仍然发生在世界上涨落往返，但是互联网app的某几个设计细节，像带着某种赛博神性一样，在资本和贪婪的潮汐之中螺旋上升了一点点。
tinder的划动是的，spotify的流媒体加载是的，tiktok的流量池分发更是的。
这些互联网产品，带来一个又一个生活中细致可感的一点点提升。通过网络与金融，消解了时间和空间，通过简单直给的app设计，把价值更确切地交付到普通人手中。
每当我阅读这些博客，我就感到自己又前进了一点，世界在我面前又清晰了一点

## 产品

归结到我要做的产品，某种程度上我也更加清楚自己需要做的是什么：大部分人并不喜欢摆弄东西（they are not tinkerers），我洞察到他们不喜欢。
他们需要的是一个不需要他们在这上面花那么多意志力、注意力就能获得价值的事情。这也是整个互联网经济存在的意义，不断地为人们带来傻瓜式服务，带来稳定的体验，而他们什么都不用做，甚至不知道他们本应做这些。
建造东西，在认知上是昂贵的，不论在经济上是否可行。
所以我非常愿意给他们做一个，能降低门槛、带来高体验的游戏化阅读产品。
我现在唯一要做的就是验证这是个需求，然后决定我该用广告还是订阅。。
选广告，体验下降
选订阅，基本会丢掉大部分中国用户
但我希望能为中国用户带来更多价值，所以广告应该是主要的商业模式，订阅会像duolingo一样提供无广告体验
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
