// import { cn } from "./lib/utils";
import React, { useState, useRef } from 'react';
import './ShowBook.css';
import { Book } from './types';
import booksData from './data/books.json';
import GitHubCard from './components/GitHubCard';
import SpotifyPlayer from './components/SpotifyPlayer';
import { IconCloud } from "./components/magicui/icon-cloud";
// import { AnimatePresence, motion } from "motion/react";
import { BlurFade } from "./components/magicui/blur-fade";
import { ProjectCard } from "./components/project-card";
import { DATA } from "./data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import {
  RulerSquareIcon,
  GitHubLogoIcon,
  BarChartIcon
} from "@radix-ui/react-icons";
 
import { BentoCard, BentoGrid } from "./components/magicui/bento-grid";
import ConnectionLines from './components/ConnectionLines';
import bookSideSvg from './assets/book-side.svg'
import profilePic from './assets/profilepic.jpg';
import SkillRadar from './components/SkillRadar';
import { ShowArt } from './components/ShowArt';
import ScrollCircle from './components/ScrollCircle';
import WorksShowcase from './components/WorksShowcase';
import { works } from './data/works';
import DotPattern from './components/DotPattern';
import { ThemeToggle } from './components/ThemeToggle';
import AIExperience from './components/AIExperience';

interface Point {
  x: number;
  y: number;
}
const BLUR_FADE_DELAY = 0.04;

const features = [
  {
    Icon: GitHubLogoIcon,
    name: "Code",
    description: "(Most of my uploads have to be private due to the company policy.) Love exploring and learn codes on github.",
    href: "/",
    cta: "Learn more",
    background: <GitHubCard />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: RulerSquareIcon,
    name: "Designs",
    description: "Love browsing on pinterest and dribbble, and find some sugar to steal.",
    href: "/",
    cta: "",
    background: <ShowArt/>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
  },
  { 
    Icon: BarChartIcon,
    name: "Skills",
    description: "Mainly develop frontend with react and vue",
    href: "/",
    cta: "Learn more",
    background: <div className="flex flex-col gap-4"><SkillRadar/><IconCloudDemo/></div>,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: () => <img src="https://cdn.simpleicons.org/spotify" alt="Spotify" className="w-12 h-12" />,
    name: "Music List",
    description: "Broad taste in music. Value the importance of sound in experience shaping.",
    href: "/",
    cta: "",
    background: <SpotifyPlayer />,
    className: "lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2",
  }
];

  export const Icon = ({ className, ...rest }: any) => {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
    className={className} {...rest}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
  );
  };

const slugs = [
  "typescript",
  "javascript",
  "react",
  "unity",
  "vue",
  "html5",
  "css3",
  "Neo4j",
  "vite",
  "fastapi",
  "amazonaws",
  "mysql",
  "nginx",
  "swift",
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "django",
  "redis",
  "visualstudiocode",
  "figma",
];

function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden h-[300px]">
      <IconCloud images={images} />
    </div>
  );
}

// 定义技术映射关系
const techMapping = {
  "Save your files": ["github", "git", "visualstudiocode"],
  "Full text search": ["mysql", "Neo4j"],
  "Multilingual": ["typescript", "javascript", "react"],
  "Calendar": ["react", "typescript"],
  "Notifications": ["fastapi", "nginx", "docker"]
};

const ShowBook = () => {
  const [selectedCategory, setSelectedCategory] = useState<Book['category']>('Finance');
  // const [hoveredBook, setHoveredBook] = useState<{ id: string; position: { x: number; y: number } } | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [connectionPoints, setConnectionPoints] = useState<{ from: Point; to: Point[] } | null>(null);
  const iconCloudRef = useRef<HTMLDivElement>(null);

  const books = booksData.books.map(book => ({
    ...book,
    coverImage: new URL(`./assets/${book.id}.jpg`, import.meta.url).href
  })) as Book[];

  const booksByCategory = {
    Experience: books.filter(book => book.category === 'Experience'),
    Tech: books.filter(book => book.category === 'Tech'),
    Finance: books.filter(book => book.category === 'Finance'),
    Sociology: books.filter(book => book.category === 'Sociology'),
    AI: books.filter(book => book.category === 'AI')
  };

  // const handleBookHover = (bookId: string, event: React.MouseEvent) => {
  //   const rect = event.currentTarget.getBoundingClientRect();
  //   setHoveredBook({
  //     id: bookId,
  //     position: {
  //       x: rect.right + 20,
  //       y: rect.top
  //     }
  //   });
  // };


  // const handleBookLeave = () => {
  //   setHoveredBook(null);
  // };

  const handleFeatureHover = (feature: string, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const iconCloud = iconCloudRef.current;
    
    if (iconCloud) {
      const icons = iconCloud.getElementsByTagName('img');
      const matchingTechs = techMapping[feature as keyof typeof techMapping] || [];
      const points: Point[] = [];
      
      Array.from(icons).forEach((icon) => {
        const src = icon.src;
        const tech = matchingTechs.find(t => src.includes(t));
        if (tech) {
          const iconRect = icon.getBoundingClientRect();
          points.push({
            x: iconRect.left + iconRect.width / 2,
            y: iconRect.top + iconRect.height / 2
          });
        }
      });

      setConnectionPoints({
        from: {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        },
        to: points
      });
    }
    
    setHoveredFeature(feature);
  };

  const handleFeatureLeave = () => {
    setHoveredFeature(null);
    setConnectionPoints(null);
  };

  // 添加平滑滚动功能
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* <ScrollCircle 
        color="#FFD955" 
        endColor="#FFD955"
        initialSize={3000} 
        maxSize={1500} 
        position="top-right" 
      />
      <ScrollCircle 
        color="#55B1FF" 
        endColor="#55B1FF"
        initialSize={200} 
        maxSize={2000} 
        position="bottom-left" 
      /> */}
      
      {/* 添加呼吸效果的点状纹理背景 */}
      <DotPattern 
        color="rgba(240, 242, 245, 0.5)" 
        dotSize={2.5} 
        spacing={15} 
        opacity={0.5} 
        breathingSpeed={15}
        breathingIntensity={0.5}
      />
      
      {/* <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
    <InteractiveGridPattern
      width={40}
      height={40}
      squares={[32, 18]} // 你可以根据屏幕比例调整
    />
  </div> */}

      {/* <FlickeringGrid /> */}

      <header className="sticky top-0 z-40 w-full">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold">Ben GUAN</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 gap-10">
              {/* <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a> */}
              <a href="#works" onClick={(e) => handleNavClick(e, 'works')}>Works</a>
              <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
              <a href="#ai-experience" onClick={(e) => handleNavClick(e, 'ai-experience')}>Agent</a>
              <a href="#books" onClick={(e) => handleNavClick(e, 'books')}>Books</a>
              <ThemeToggle />
              {/* <a href="#about">About</a> */}
            </nav>
            
          </div>
        </div>
      </header>

    
      <section id="hero">
      <div className="w-full flex justify-center pt-16">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFade
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                offset={8} inView>
                <h2>Hi, I'm {DATA.name.split(" ")[0]} 👋</h2>
              </BlurFade>
              
              <BlurFade
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                offset={8} inView>
                <p>{DATA.description}</p>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={profilePic} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </div>
      </section>
      
      <section id="works" className="w-full min-h-screen">
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 pt-16 px-4 lg:px-16 xl:px-32 2xl:px-44">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Works
              </div>
              <h2 className="text-3xl font-bold text-foreground tracking-tighter sm:text-5xl">
                My Works
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here are some of my recent works.
              </p>
            </div>
          </div>
        </BlurFade>
        <WorksShowcase works={works} />
      </section>
      
      {/* <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold text-foreground tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex games. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[600px] min-h-[800px]">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <div className="container max-w-[1920px] mx-auto justify-center">
        <section id="skills" className="pt-16">
        <BlurFade delay={0.1}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
             Skills
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tighter sm:text-5xl">
              Skillset
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Taste and skills as a craftsman
            </p>
          </div>
        </div>
      </BlurFade>
          <div className="w-full px-4 lg:px-16 xl:px-16 2xl:px-44 mb-8 pt-16">
            
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">          

              <BentoGrid className="lg:grid-rows-1 lg:grid-cols-4">
                {features.map((feature) => (
                  <BentoCard 
                    key={feature.name} 
                    {...feature}
                    onMouseEnter={(e) => handleFeatureHover(feature.name, e)}
                    onMouseLeave={handleFeatureLeave}
                  />
                ))}
              </BentoGrid>
            </div>
          </div>
        </section>

        <section id="ai-experience" className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 py-4">
          <AIExperience />
        </section>
        
        <section id="books" className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 py-4">
          <div className="w-full">
            <div className="m-auto">
              
            <BlurFade delay={0.1}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Books
                  </div>
                  <h2 className="text-3xl font-bold text-foreground tracking-tighter sm:text-5xl">
                    Booklist
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I have read {books.length}+ books over last five years. <br />
                  Here are books I feel highly valuable!
                  </p>
                </div>
              </div>
            </BlurFade>

              <div className="flex items-end gap-6 justify-between flex-wrap-reverse lg:flex-nowrap pt-20">
                
                <ul className="mt-5 gap-x-6 gap-y-3 flex cursor-pointer flex-wrap">
                  {Object.entries(booksByCategory).map(([category, books]) => (
                    <li key={category}>
                      <h3 
                        className={`text-base my-4 ${
                          selectedCategory === category 
                            ? 'text-grey-900 dark:text-grey-100' 
                            : 'text-grey-400 dark:text-grey-600 hover:text-grey-800 dark:hover:text-grey-300'
                        }`}
                        onClick={() => setSelectedCategory(category as Book['category'])}
                      >
                        <span className={selectedCategory === category ? "underline-offset-8 underline decoration-blue decoration-2" : ""}>
                          {category}
                        </span>
                        <sup className="pl-[2px] text-[10px]">{books.length}</sup>
                      </h3>
                    </li>
                  ))}
                </ul>
                
              </div>
              <div className="grid grid-cols-1 gap-18 mt-10 lg:grid-cols-2 lg:gap-16 xl:grid-cols-3 2xl:grid-cols-4">
                {booksByCategory[selectedCategory].map((book) => (
                  <div 
                    key={book.id} 
                    className="mobile-layout"
                    // onMouseEnter={(e) => handleBookHover(book.id, e)}
                    // onMouseLeave={handleBookLeave}
                  >
                    <div className="book-cover">
                      <img className="book-top" src={book.coverImage} alt={book.title} />
                      <img className="book-side" src={bookSideSvg} alt={`${book.title} side`} />
                    </div>
                    <div className="preface">
                      <div className="content">
                        <div className="header">
                          <div className="title">{book.title}</div>
                          <div className="icon">
                            <i className="fas fa-chevron-down"></i>
                          </div>
                        </div>
                        <div className="author">by {book.author}</div>
                        <div className="body">
                          <p>{book.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      
      {/* <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="Camel-Webapp" icon={<AceternityIcon />}>
        
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
          
        </Card>
        <Card title="Nisha is Munni" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Munni is Aditi" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div> */}
          
      
        
        {/* {hoveredBook && (
          <BookNotes
            bookId={hoveredBook.id}
            visible={true}
            position={hoveredBook.position}
          />
        )} */}
        {connectionPoints && (
          <ConnectionLines
            from={connectionPoints.from}
            to={connectionPoints.to}
            visible={!!hoveredFeature}
          />
        )}
      </div>

    </>
  );
};

export default ShowBook;