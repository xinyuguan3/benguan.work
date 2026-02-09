
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Icons } from "../components/icons";
import AgentSociety from "../assets/AgentSociety.mp4"
import RelatoDemo from "../assets/RelatoDemo.mp4"
import Oasis from "../assets/Oasis.png"
import RelatoNetwork from "../assets/RelatoNetwork.png"
import ArkalaVid from "../assets/Arkala.mp4"
import OasisVideo from "../assets/OasisVideo.mp4"
export const DATA = {
  name: "GUAN Ben Xinyu(关新宇)",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I elevate products through human-centered design.",
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
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Oasis",
      href: "https://oasis.camel-ai.org/",
      dates: "Nov 2024 - April 2025",
      active: true,
      description:
        "A Social Media simulation made up of 1000+ AI Agents, during simulation, agents emerge trends in the macro scale. Mainly help marketing team test their promotion effects. As the product designer, I led the engineer team settle this solution for Camel AI.",
      technologies: [
        "Typescript",
        "PostgreSQL",
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
      video: OasisVideo,
    },
    {
      title: "AI Society Simulator Game",
      href: "https://www.bilibili.com/video/BV1zh4y1V7Yj/?spm_id_from=888.80997.embed_other.whitelist&t=5.319657&bvid=BV1zh4y1V7Yj&vd_source=a9ee34e95c1a809cca36a776e387600c",
      dates: "April 2024 - May 2024",
      active: true,
      description:
        "AI Story Generator which simulates a small society and generates random events based on villagers automated interactions. Each villager is an AI NFT agent on SUI blockchain. Nobody can change the game stats once minted, the agent will be self-evolving through LLM reflections.",
      technologies: [
        "Unity",
        "C#",
        "DeepSeek",
        "Python",
        "SQLite",
        "Semantic Kernel"
      ],
      links: [
        {
          type: "Website",
          href: "https://youtu.be/fOpqMKhEAEk",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: RelatoNetwork,
      video:
        RelatoDemo,
    },
    {
      title: "Agent Society",
      href: "https://agentsociety.fiblab.net/exp/9feb9ea0-3dcd-4ed1-9348-0d26e43d0da6",
      dates: "Feb 2025 - Jun 2025",
      active: true,
      description:
        "AI Agent Society simulation tool, researchers can simulate in market behaviour, information exchange, pandemic transmission, etc. Led UI/UX design & frontend development.",
      technologies: [
        "Unity",
        "C#",
        "Deepseek",
        "Python",
        "FastAPI"
      ],
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
      video:
        AgentSociety,
    },
    {
      title: "Arkala",
      href: "",
      dates: "April 2023 - Dec 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Unity",
        "C#",
        "OpenAI",
        "Python"
      ],
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
