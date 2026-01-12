import { HomeIcon, NotebookIcon } from "lucide-react";
import { Icons } from "../components/icons";
import AgentSociety from "../assets/AgentSociety.mp4";
import RelatoDemo from "../assets/RelatoDemo.mp4";
import Oasis from "../assets/Oasis.png";
import RelatoNetwork from "../assets/RelatoNetwork.png";
import ArkalaVid from "../assets/Arkala.mp4";
export const DATA = {
  name: "GUAN Ben Xinyu(关新宇)",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I elevate interactive experience through human-centered design.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "./assets/profilepic.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Tencent Games",
      href: "https://tencent.com/en-us/games",
      badges: [],
      location: "Shenzhen, China",
      title: "Technical Game Designer",
      logoUrl: "/tencent.png",
      start: "June 2023",
      end: "Feb 2024",
      description:
        "Worked as a Technical Game Designer in a 3 million MAU UGC mobile game, focusing on integrating game making functions into game editor. Led the development of AI-driven NPC behavior systems using Unity and C#, enhancing player immersion and interaction. Collaborated with cross-functional teams to prototype and implement innovative gameplay mechanics.",
    },
    {
      company: "Camel AI",
      badges: [],
      href: "https://camel-ai.org",
      location: "Remote, Hong Kong",
      title: "AI Product Manager & Frontend Designer",
      logoUrl: "/camel-ai.svg",
      start: "July 2024",
      end: "July 2025",
      description:
        "Spearheaded the development of Oasis, a groundbreaking AI-driven social media simulation platform, leading a cross-functional team of 8 engineers and designers. Oversaw product strategy, roadmap, and execution, resulting in a successful launch that attracted over 5,000 active users within the first three months. Designed intuitive user interfaces and seamless user experiences using Next.js and TailwindCSS, significantly enhancing user engagement and retention.",
    },
    {
      company: "Parametrix.ai",
      href: "https://parametrix.ai/",
      badges: [],
      location: "Shenzhen, China",
      title: "Software Engineer",
      logoUrl: "/parametrix.ai.png",
      start: "Oct 2025",
      end: "Jan 2026",
      description:
        "Design and produce LLM-driven AI gameplay machanics, mainly through JSON outputs from LLM to interact with game systems. ",
    },
  ],
  education: [
    {
      school: "City University of Hong Kong",
      href: "https://cityu.edu.hk",
      degree: "Bachelor's Degree of Creative Media (BSC)",
      logoUrl: "/cityu.png",
      start: "2018",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Oasis",
      href: "https://oasis.camel-ai.org/",
      dates: "Nov 2024 - April 2025",
      active: true,
      description:
        "A Social Media simulation project made up of 1000+ AI users, during experiment, agents emerge wisdom in the advanced layer, we might discover scaling law of AI agents. Lead designing playable demo.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://oasis.camel-ai.org/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/camel-ai/oasis?tab=readme-ov-file",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: Oasis,
      video:
        "https://private-user-images.githubusercontent.com/115660088/428396993-3bd2553c-d25d-4d8c-a739-1af51354b15a.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDYzNzI4MDYsIm5iZiI6MTc0NjM3MjUwNiwicGF0aCI6Ii8xMTU2NjAwODgvNDI4Mzk2OTkzLTNiZDI1NTNjLWQyNWQtNGQ4Yy1hNzM5LTFhZjUxMzU0YjE1YS5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUwNFQxNTI4MjZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mNTdlMmFlMzZhNTkzNDRlZWRiM2JkMDM4NzM5MGRmODMwOGQzYjQ2OWQ3NDU5ZDQ2MzNmY2JkMzVkOTJhOTNlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.c65dm8JRrDYHOmuihGRiXPVE3HOSPpTeewdolj21j8U",
    },
    {
      title: "AI Society Simulator Game",
      href: "https://www.bilibili.com/video/BV1zh4y1V7Yj/?spm_id_from=888.80997.embed_other.whitelist&t=5.319657&bvid=BV1zh4y1V7Yj&vd_source=a9ee34e95c1a809cca36a776e387600c",
      dates: "April 2024 - May 2024",
      active: true,
      description:
        "AI Story Generator which simulates a small society and generates random events based on villagers automated interactions. Each villager is an AI NFT agent on SUI blockchain. Nobody can change the game stats once minted, the agent will be self-evolving through LLM reflections.",
      technologies: ["Unity", "C#", "OpenAI", "Python"],
      links: [
        {
          type: "Website",
          href: "https://youtu.be/fOpqMKhEAEk",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: RelatoNetwork,
      video: RelatoDemo,
    },
    {
      title: "Agent Society",
      href: "https://agentsociety.fiblab.net/exp/9feb9ea0-3dcd-4ed1-9348-0d26e43d0da6",
      dates: "Feb 2025 - Jun 2025",
      active: true,
      description:
        "AI Agent Society simulation tool, researchers can simulate in market behaviour, information exchange, pandemic transmission, etc. Led UI/UX design & frontend development.",
      technologies: ["Unity", "C#", "Deepseek", "Python"],
      links: [
        {
          type: "Website",
          href: "https://agentsociety.fiblab.net/exp/9feb9ea0-3dcd-4ed1-9348-0d26e43d0da6",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/tsinghua-fib-lab/agentsociety",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: AgentSociety,
    },
    {
      title: "Arkala",
      href: "",
      dates: "April 2023 - Dec 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: ["Unity", "C#", "OpenAI", "Python"],
      links: [
        {
          type: "Website",
          href: "https://www.bilibili.com/video/BV1zh4y1V7Yj/?share_source=copy_web&vd_source=80bd0ad5f79db9d0fd91ca8f1c639ef2",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: ArkalaVid,
    },
  ],
} as const;
