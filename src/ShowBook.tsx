import React, { useState, useRef } from 'react';
import './ShowBook.css';
import { Book } from './types';
import booksData from './data/books.json';
import BookNotes from './components/BookNotes';
import GitHubCard from './components/GitHubCard';
import SpotifyPlayer from './components/SpotifyPlayer';
import { IconCloud } from "./components/magicui/icon-cloud";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
  GitHubLogoIcon
} from "@radix-ui/react-icons";
 
import { BentoCard, BentoGrid } from "./components/magicui/bento-grid";
import ConnectionLines from './components/ConnectionLines';
import bookSideSvg from './assets/book-side.svg'
import profilePic from './assets/profilepic.jpg';

interface Point {
  x: number;
  y: number;
}

const features = [
  {
    Icon: GitHubLogoIcon,
    name: "Code",
    description: "Love exploring and building on github.",
    href: "/",
    cta: "Learn more",
    background: <GitHubCard />,
    className: "lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: () => <img src="https://cdn.simpleicons.org/spotify" alt="Spotify" className="w-12 h-12" />,
    name: "Music List",
    description: "Great taste in music. Well trained since childhood",
    href: "/",
    cta: "",
    background: <SpotifyPlayer />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: GlobeIcon,
    name: "Ben GUAN",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img src={profilePic} className="absolute  opacity-100" alt="Profile" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: CalendarIcon,
    name: "Blogs",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: BellIcon,
    name: "Skillset",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <IconCloudDemo/>,
    className: "lg:col-start-1 lg:col-end-4 lg:row-start-4 lg:row-end-5",
  }
];

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
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "django",
  "postgresql",
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
  const [selectedCategory, setSelectedCategory] = useState<Book['category']>('Aethetics');
  const [hoveredBook, setHoveredBook] = useState<{ id: string; position: { x: number; y: number } } | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [connectionPoints, setConnectionPoints] = useState<{ from: Point; to: Point[] } | null>(null);
  const iconCloudRef = useRef<HTMLDivElement>(null);

  const books = booksData.books.map(book => ({
    ...book,
    coverImage: new URL(`./assets/${book.id}.jpg`, import.meta.url).href
  })) as Book[];

  const booksByCategory = {
    Aethetics: books.filter(book => book.category === 'Aethetics'),
    Tech: books.filter(book => book.category === 'Tech'),
    Finance: books.filter(book => book.category === 'Finance'),
    Sociology: books.filter(book => book.category === 'Sociology'),
    AI: books.filter(book => book.category === 'AI')
  };

  const handleBookHover = (bookId: string, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setHoveredBook({
      id: bookId,
      position: {
        x: rect.right + 20,
        y: rect.top
      }
    });
  };

  const handleBookLeave = () => {
    setHoveredBook(null);
  };

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

  return (
    <div className="container max-w-[1920px] mx-auto justify-center">
      <div className="w-full px-4 lg:px-16 xl:px-16 2xl:px-44 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">          
          {/* <div className="accentDarkBg rounded-3xl overflow-hidden" ref={iconCloudRef}>
            <IconCloudDemo />
          </div> */}
          <BentoGrid className="lg:grid-rows-4 lg:grid-cols-4">
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
      <section id="books" className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 py-4">
        <div className="w-full">
          <div className="m-auto">
            <div className="flex items-end gap-6 justify-between flex-wrap-reverse lg:flex-nowrap">
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
              <div className="w-full mt-2 lg:mt-[0px] max-w-md text-black-50 accentDarkBg rounded-3xl p-6">
                <div className="whitespace-nowrap text-orange-400 text-4xl mb-2 font-bold">Reading List</div>
                I have read {books.length}+ books over last five years. <br />
                Here are books I highly recommended!
              </div>
            </div>
            <div className="grid grid-cols-1 gap-18 mt-10 lg:grid-cols-2 lg:gap-16 xl:grid-cols-3 2xl:grid-cols-4">
              {booksByCategory[selectedCategory].map((book) => (
                <div 
                  key={book.id} 
                  className="mobile-layout"
                  onMouseEnter={(e) => handleBookHover(book.id, e)}
                  onMouseLeave={handleBookLeave}
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
      
      {hoveredBook && (
        <BookNotes
          bookId={hoveredBook.id}
          visible={true}
          position={hoveredBook.position}
        />
      )}
      {connectionPoints && (
        <ConnectionLines
          from={connectionPoints.from}
          to={connectionPoints.to}
          visible={!!hoveredFeature}
        />
      )}
    </div>
  );
};

export default ShowBook;