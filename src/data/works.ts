export interface Work {
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
  readingTime: number; // 阅读时间（分钟）
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

import AgentSociety from "../assets/AgentSociety.mp4"
import RelatoDemo from "../assets/RelatoDemo.mp4"
import Oasis from "../assets/Oasis.png"
import CommunityData from "../assets/CommunityData.gif"
import CommunityCompare from "../assets/CommunityCompare.png"
import RelatoNetwork from "../assets/RelatoNetwork.png"
import HouseHoldModal from "../assets/householdModel.gif"
import SocietyNFT from "../assets/SocietyNFT.mp4"
import SocietyNFT2 from "../assets/SocietyNFT2.mp4"
import Arkala from "../assets/Arkala.mp4"

export const works: Work[] = [
  {
    id: "01",
    title: "Smart City",
    subtitle: "Media Lab Toronto's research on collect information from the city",
    date: "2023.10",
    backgroundImage: HouseHoldModal,
    cardMedia: [
      {
        type: 'image',
        src: CommunityData
      },
      {
        type: 'image',
        src: CommunityCompare
      }
    ],
    position: {
      top: '20%',
      right: '10%'
    },
    readingTime: 8,
    portfolio: [
      {
        type: 'text',
        content: "This case study shares my six-month contract as the sole UX designer at a commercial property analytics startup. It details how I juggled multiple projects in a new industry, developed tools and processes, and applied technical UI skills to tackle real-world challenges."
      },
      {
        type: 'mixed',
        content: "## Uncharted Territory\n\nduring my time in Hong Kong, I joined a research project at Media Lab Toronto.\n\nThis role wasn't just about bringing my existing skills to the table; it was about diving headfirst into a domain which I was always interested in and making a meaningful impact in a short period.",
        media: {
          type: 'image',
          src: CommunityData,
          caption: "Smart City project showcasing data visualisation"
        }
      },
      {
        type: 'text',
        content: "## Outcomes\n\n**Leasing Data Project:** Developed a business case that laid the groundwork for a potentially game-changing feature in commercial real estate management.\n\n**Charts and Tables Enhancement:** Designed improvements to data visualisation, making complex property data more accessible with added capabilities customers were asking for.\n\n**Retail Experience:** Proposed strategies to maintain momentum and ensure our retail experience remained a core offering.\n\n**Process and Ways of Working:** Delivered recommendations aimed at streamlining the design process, setting the stage for scalable growth."
      },
      {
        type: 'mixed',
        content: "## The Challenge\n\nAs the only UX designer for the entire project, I found myself simultaneously working on four projects:\n\n• Leasing Data Project\n• Charts and Table Enhancement\n• Retail Experience Enhancements\n• Process and Ways of Working Recommendation\n\nEach project had its own challenges, stakeholders, and tight deadlines. The pressure was on to deliver top-notch work across the board while getting up to speed with the ins and outs of the academic research industry.",
        media: {
          type: 'image',
          src: CommunityCompare,
          caption: "Comparative analysis showing academic research insights"
        }
      },
      {
        type: 'text',
        content: "## Strategic Solution\n\nRealising I needed a game plan to stay sane and productive, I turned to the 70-20-10 Rule to prioritise my efforts:\n\n**70%** on the highest priority (Leasing Data Project)\n\n**20%** on the second priority (Charts and Table Enhancement)\n\n**10%** split between the remaining two (Retail Experience and Process Improvement)\n\nThis wasn't a rigid rule but gave me a solid framework to manage my time and energy effectively."
      },
      {
        type: 'text',
        content: "## Weekly Breakdown\n\nI organised my days around 90- to 120-minute 'deep work' sessions. While surprises did pop up, I made sure to reserve at least two blocks for high-priority tasks.\n\n**Monday-Thursday**\n\n• 4-6 hours: Deep work on high-priority tasks\n• 2 hours: Work on second priority\n• 1 hour: Tertiary tasks\n\n**Friday**\n\n• Morning: Retail Experience and Process Improvement\n• Afternoon: Plan for the next week and tie up loose ends"
      },
      {
        type: 'text',
        content: "## Real-World Adaptability\n\nNo week ever went exactly as planned. Here's how I handled the curveballs:\n\n**Urgent Requests:** Built in buffers during afternoon sessions for unexpected issues.\n\n**Shifting Priorities:** Adjusted the 70-20-10 split when projects needed more attention.\n\n**Energy Management:** Tackled creative work during peak energy times, saved documentation for lower-energy periods."
      },
      {
        type: 'text',
        content: "## Overcoming Constraints\n\n**Resource Crunch:** As the lone designer, workload was heavy. Designs often lacked detail before development.\n\n**Design-Development Disconnect:** Poor collaboration led to QA issues and overlooked gaps.\n\n**Lack of User Testing:** Without formal research, we risked building unwanted features."
      },
      {
        type: 'text',
        content: "## Innovative Solutions\n\n**Efficiency First:** Recommended off-the-shelf solutions for 70% of needs.\n\n**Design System:** Proposed design tokens for consistency and faster development.\n\n**Rapid Prototyping:** Enabled quick customer testing and feature refinement.\n\n**Measurable Results:** Jumpstarted efficiency, focused on critical 30%, and accelerated discovery through early feedback loops."
      }
    ]
  },
  {
    id: "02",
    title: "Agent Society",
    subtitle: "Society Simulator for Related research",
    date: "2024.12",
    backgroundImage: "https://source.unsplash.com/random/1920x1080?cinema&sig=2",
    cardMedia: [
      {
        type: 'video',
        src: AgentSociety
      },
    ],
    position: {
      bottom: '15%',
      right: '5%'
    },
    readingTime: 7,
    portfolio: [
      {
        type: 'mixed',
        content: "## 70% Boring\n\nOur UX strategy centres on Jakob's Law, which states: \"Users spend most of their time on other websites, so they expect your site to work like all the others they already know.\"\n\nBy mirroring design elements from popular websites and apps, we're aiming to make our users feel right at home. This approach taps into their existing mental models and learned behaviours, reducing cognitive load, smoothing out the learning curve, and boosting overall user satisfaction and efficiency.",
        media: {
          type: 'video',
          src: AgentSociety,
          caption: "Agent Society simulator demonstrating familiar UI patterns"
        }
      },
      {
        type: 'text',
        content: "## 30% Magic\n\nIn data visualisation, it's often the small UI decisions that make all the difference. Elements like typography, spacing, and content play crucial roles in how users perceive and interpret data. By honing in on these nuances, we can enhance the user experience and convey information more effectively."
      },
      {
        type: 'text',
        content: "## Design Foundation\n\n**The Power of Boring**\n\nWith no design resources and no room for deep-dive user research, we anchored our UX strategy in Jakob's Law: users spend most of their time on other sites, so they expect ours to feel familiar.\n\nInspired by YouTube, the second most visited site in the world, I designed an experience with zero learning curve. This approach aims to minimise onboarding time and streamline future development by leveraging patterns users already know by heart."
      },
      {
        type: 'text',
        content: "## Tiny Details. Big Impact.\n\nI zeroed in on the small yet impactful aspects of the UI to ensure effective data visualisation. These tweaks might seem minor, but they significantly enhance the user experience by making data clearer and easier to interpret."
      }
    ]
  },
  {
    id: "03",
    title: "NFT Marketplace",
    subtitle: "A NFT Marketplace for Society Simulation",
    date: "2024.12",
    backgroundImage: "https://source.unsplash.com/random/1920x1080?garden,digital&sig=3",
    cardMedia: [
      {
        type: 'video',
        src: SocietyNFT
      },
      {
        type: 'video',
        src: SocietyNFT2
      }
    ],
    position: {
      top: '30%',
      left: '15%'
    },
    readingTime: 10,
    portfolio: [
      {
        type: 'text',
        content: "This case study showcases how I balanced innovation with practicality within the emerging NFT ecosystem during the peak of the blockchain revolution. Discover the tools and processes that made this possible through the NFT Marketplace platform for social simulation data."
      },
      {
        type: 'mixed',
        content: "## Beyond Design Limits\n\nAt our blockchain startup—a pioneer in the NFT space—we operate with a lean development team. Just eight engineers handle both frontend and smart contract development, and my role often overlapped with product managers and blockchain architects.",
        media: {
          type: 'video',
          src: SocietyNFT,
          caption: "NFT Marketplace main interface demonstration"
        }
      },
      {
        type: 'text',
        content: "## Breaking Legacy Barriers\n\n**Challenge**\n\nNFT platforms often rely on complex blockchain infrastructure, which can limit our ability to roll out innovative features. My challenge was to drive Web3 innovation while navigating these technical constraints.\n\n**Solution**\n\nTo strike the right balance between constraints and creativity, I developed a Feature Prioritisation Model. We start with baseline requirements to ensure core blockchain functionality is met. Then, a small team explores innovative NFT features without limitations. The game-changing concepts are shared with the wider group for consideration."
      },
      {
        type: 'text',
        content: "## A thousand minds, one heartbeat\n\n**Challenge**\n\nGetting NFT feature approval was a complex process involving design leads, product managers, legal, smart contract auditors, security experts, and community representatives. It was time-consuming, and the diverse feedback often added layers of complication.\n\n**Solution**\n\nI developed a set of principles to improve approval efficiency, enabling better time management and ensuring stakeholders receive maximum value with minimal time investment."
      },
      {
        type: 'mixed',
        content: "## Challenges Spark Innovation\n\n**Challenges**\n\n**Inheriting Legacy Smart Contracts**\n\nWe were handed smart contracts developed by another team. This was both a hurdle and an opportunity. With fresh eyes, we could optimise the contracts and spot areas ripe for improvement.\n\n**Navigating Remote Work in a Global Team**\n\nOur distributed team across different time zones required us to adapt our workflow to asynchronous collaboration.\n\n**Solution**\n\n**The Innovation Sprint Process**\n\nTo tackle these challenges head-on, I developed the Innovation Sprint process—a blockchain-native twist on the Google Design Sprint. This approach leverages asynchronous activities and digital collaboration tools to avoid the need for synchronous meetings. It ensures seamless collaboration across global teams while fitting neatly into everyone's schedules.",
        media: {
          type: 'video',
          src: SocietyNFT2,
          caption: "NFT creation and trading flow demonstration"
        }
      },
      {
        type: 'text',
        content: "## Key Features\n\n**Fully Distributed:** Every aspect is handled asynchronously—no time zone restrictions.\n\n**Efficient Reviews:** We keep technical discussions under an hour to respect everyone's time.\n\n**Documentation First:** Technical specs are shared beforehand so the team hits the ground running.\n\n**Structured Presentations:** Team members present their findings and recommendations in allocated slots, keeping things organised.\n\n**Task Assignments:** We assign development tasks to individuals or small groups, promoting ownership and efficiency."
      },
      {
        type: 'text',
        content: "## The Art of Reduction\n\n**Innovation Sprint 1**\n\nIn this sprint, we honed in on the essentials. By focusing on the MVP NFT functionality, we ensured core needs were met and brought all stakeholders into alignment.\n\n**UX Outcomes**\n\n• Business Case: Covering viability, desirability, and technical feasibility\n• Key Insights, Hypotheses, and NFT Strategy\n• Three Lo-Fi NFT Design Concepts\n• Smart Contract Optimisations"
      },
      {
        type: 'text',
        content: "## Key Insights\n\n**NFT Adoption Challenges**\n\n• 45% of potential users are confused by gas fees\n• 60% struggle with wallet connections\n• 30% find NFT minting processes intimidating\n\n**Community Engagement Barriers**\n\n• 40% don't understand rarity systems\n• 25% struggle with metadata interpretation\n• 35% feel overwhelmed by market volatility\n\n**Technical Friction Points**\n\n• 50% experience failed transactions\n• 30% face wallet compatibility issues\n• 20% struggle with cross-chain transfers\n\n**NFT Value Perception**\n\n• Early adopters often overpay for unproven projects\n• Social media amplifies FOMO, leading to impulsive purchases\n• Lack of clear utility drives speculative behavior"
      }
    ]
  },
  {
    id: "04",
    title: "Oasis",
    subtitle: "AI-powered social simulation platform by camel-AI",
    date: "2024.8",
    backgroundImage: "https://source.unsplash.com/random/1920x1080?network,tech&sig=4",
    cardMedia: [
      {
        type: 'image',
        src: Oasis
      },
      {
        type: 'image',
        src: "https://source.unsplash.com/random/600x400?network,visualization&sig=42"
      }
    ],
    position: {
      top: '10%',
      right: '20%'
    },
    readingTime: 6,
    portfolio: [
      {
        type: 'text',
        content: "Oasis is an advanced AI-powered social simulation platform developed by camel-AI. Through extensive research and observation of real social behaviors, Oasis creates authentic digital representations of social dynamics, helping researchers and developers understand complex human interactions."
      },
      {
        type: 'mixed',
        content: "## The Challenge\n\nUnderstanding social dynamics is crucial yet complex. Despite its importance, the intricacies of social interactions are often oversimplified or overlooked, leading to incomplete models of human behavior.\n\nThis challenge was inspired by observing real social networks where every day for months, I studied unique interaction patterns and social challenges ranging from information spread dynamics to community formation, group polarization, or the emergence of social norms.\n\n**Research led to the following attributes being possible causes of complex social phenomena:**\n\n• Information cascade and echo chambers\n• Social influence and conformity\n• Network effects and virality\n• Community evolution and polarization\n\n*How might we create more accurate models of social behavior to better understand and predict real-world social dynamics?*",
        media: {
          type: 'image',
          src: Oasis,
          caption: "Observing real social network patterns and interaction dynamics"
        }
      },
      {
        type: 'text',
        content: "## The Solution\n\nOasis is an AI-driven social simulation platform that models complex social behaviors, detects emerging patterns, provides insights through its analytical dashboard, and generates predictive scenarios for social phenomena.\n\nIt learns from real social data via machine learning over time to create increasingly accurate representations of social dynamics from the moment users begin feeding it real-world data."
      },
      {
        type: 'mixed',
        content: "## Key Features\n\n### Comprehensive Data Integration\n\nThe platform seamlessly integrates multiple data sources including social media feeds, survey responses, and behavioral analytics to create holistic social models.\n\n### Advanced Simulation Engine\n\nThe core AI engine runs complex simulations with thousands of virtual agents, each with unique behavioral patterns and social connections.\n\n### Real-time Analytics Dashboard\n\nUsers can monitor simulation results in real-time with interactive visualizations, predictive analytics, and scenario planning tools.\n\n### Predictive Scenario Generation\n\nOnce trained on real data, the system generates predictive scenarios for social phenomena like viral spread, opinion formation, or community conflicts.",
        media: {
          type: 'image',
          src: "https://source.unsplash.com/random/600x400?network,visualization&sig=42",
          caption: "Oasis simulation dashboard showing social network dynamics"
        }
      },
      {
        type: 'text',
        content: "## Research Applications\n\n**Social Science Research:** Study complex social phenomena in controlled environments\n\n**Policy Development:** Test social policies before real-world implementation\n\n**Product Design:** Understand user behavior patterns for better UX design\n\n**Crisis Management:** Model social responses to emergencies and disasters\n\n**Community Building:** Optimize strategies for online community engagement"
      }
    ]
  },
  {
    id: "05",
    title: "Relato",
    subtitle: "AI-powered communication intelligence for professional messaging",
    date: "2025.5",
    backgroundImage: "https://source.unsplash.com/random/1920x1080?communication,tech&sig=5",
    cardMedia: [
      {
        type: 'image',
        src: RelatoDemo
      },
      {
        type: 'image',
        src: RelatoNetwork
      }
    ],
    position: {
      bottom: '20%',
      left: '10%'
    },
    readingTime: 8,
    portfolio: [
      {
        type: 'text',
        content: "Relato is a desktop plugin and mobile keyboard that enables working professionals to become more emotionally intelligent communicators on digital messaging platforms, by offering them alternative suggestions and feedback to reduce the ambiguity of intent and tone in messages."
      },
      {
        type: 'mixed',
        content: "## The Challenge\n\nDigital written communication at work often suffers from several critical limitations:\n\n• **Rushed communication** - Messages sent hastily without proper consideration\n• **Lack of emotional accountability** - Difficulty conveying genuine empathy and understanding\n• **Missing live feedback** - No immediate response to gauge message impact\n• **Absence of personal context** - Limited ability to read between the lines\n\nThe lack of emotional intelligence—the capacity to be aware of, control, and express one's emotions, and to handle interpersonal relationships judiciously and empathetically—over digital written communication platforms at work can lead to increased instances of miscommunication and misinterpretation of one's message.\n\n*How might we help professionals communicate more effectively and empathetically in digital environments?*",
        media: {
          type: 'image',
          src: RelatoDemo,
          caption: "Analysis of communication challenges in digital workplaces"
        }
      },
      {
        type: 'text',
        content: "## The Solution\n\nRelato is a comprehensive communication intelligence gaming platform that analyzes message personality, provides writing suggestions, and tracks communication improvement over time. By understanding both the sender's intent and the recipient's context, Relato helps bridge the emotional gap in digital communication."
      },
      {
        type: 'mixed',
        content: "## Key Features\n\n### Analysis Interface\n\nThis feature assesses both the personality of received messages and the one being written. It provides users with insights into the overall tone and emotional context of emails, helping them understand how to approach professional communication more effectively.\n\n### Writing Suggestions\n\nWhen responding to messages, this intelligent feature considers the content and context of the received communication to provide personalized response suggestions and templates that maintain appropriate emotional tone and professional standards.\n\n### Progress Tracking\n\nThe platform gamifies communication improvement by tracking user progress over time. It provides achievements, performance breakdowns, and personalized tips to help overcome recurring communication challenges.",
        media: {
          type: 'image',
          src: RelatoNetwork,
          caption: "Relato communication analysis and suggestion interface"
        }
      },
      {
        type: 'text',
        content: "## Impact & Benefits\n\n**Enhanced Professional Communication:** More empathetic and effective workplace messaging\n\n**Reduced Miscommunication:** Clearer intent and tone in digital conversations\n\n**Emotional Intelligence Development:** Structured improvement in communication skills\n\n**Performance Analytics:** Data-driven insights into communication patterns\n\n**Cross-Platform Compatibility:** Seamless integration with email, messaging apps, and collaboration tools"
      }
    ]
  },
  {
    id: "06",
    title: "Arkala",
    subtitle: "Interactive educational tools for children that encourage socializing, learning and bonding",
    date: "2023.6",
    backgroundImage: "https://source.unsplash.com/random/1920x1080?children,education&sig=6",
    cardMedia: [
      {
        type: 'image',
        src: Arkala
      },
      {
        type: 'image',
        src: "https://source.unsplash.com/random/600x400?children,learning&sig=62"
      }
    ],
    position: {
      top: '10%',
      right: '20%'
    },
    readingTime: 7,
    portfolio: [
      {
        type: 'text',
        content: "Arkala is a series of interactive educational tools for children that encourage socializing, learning and bonding in children by interacting with physical interactive objects at home, school and third spaces such as libraries and makerspaces."
      },
      {
        type: 'mixed',
        content: "## The Challenge\n\nWhile digital media consumption may increase intellectual development in young children, it also leads to a significant decrease in their social and emotional development.\n\nThese findings really concerned us as interaction designers and creators of screen-based media, about where our future generation is heading. This was the common thread that got us all together to reimagine the future of socializing, bonding and learning through technology.\n\n*How might we create technology that enhances rather than diminishes children's social and emotional development?*",
        media: {
          type: 'image',
          src: Arkala,
          caption: "Children engaging with traditional vs digital learning experiences"
        }
      },
      {
        type: 'text',
        content: "## The Solution\n\nArkala bridges the gap between digital and physical learning by creating interactive tools that encourage children to engage with physical objects while leveraging digital technology. Our approach focuses on collaborative learning experiences that build social skills alongside intellectual development."
      },
      {
        type: 'mixed',
        content: "## Key Features\n\n### Learning in Groups\n\nThe dynamic interactive mapping tool allows children to explore geometric shapes through physical dot placement. This collaborative tool can be used individually, in pairs, or in groups, encouraging learning through play and social interaction. Children work together to map shapes and understand spatial relationships.\n\n### Encouraging Curiosity\n\nThe interactive poster series redefines how children interact with educational visuals. By placing physical trigger cards under different elements, images transition to reveal detailed information and engaging videos. The poster content can be updated by downloading new educational code sheets available online.\n\n### Social Learning Spaces\n\nArkala tools are designed for multiple learning environments—homes, schools, libraries, and makerspaces. Each space can be configured differently to support various group sizes and learning objectives, fostering community-based educational experiences.",
        media: {
          type: 'image',
          src: "https://source.unsplash.com/random/600x400?children,learning&sig=62",
          caption: "Arkala interactive learning tools in various educational settings"
        }
      },
      {
        type: 'text',
        content: "## Educational Impact\n\n**Enhanced Social Skills:** Collaborative activities build communication and teamwork abilities\n\n**Emotional Development:** Physical interaction fosters emotional intelligence and empathy\n\n**Cognitive Growth:** Hands-on learning combined with digital feedback supports comprehensive development\n\n**Inclusive Learning:** Adaptable tools support children with different learning styles and abilities\n\n**Community Building:** Creates shared learning experiences that strengthen school and community bonds"
      }
    ]
  }


]; 