import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { works } from "../data/works";

const firstWorkId = works[0]?.id;
const worksPath = firstWorkId ? `/works/${firstWorkId}` : "/works";

const sections = [
  { label: "Projects", hash: "projects" },
  { label: "Skills", hash: "skills" },
  { label: "Works", path: worksPath },
  { label: "Blog", path: "/blog" },
  { label: "Agent", hash: "ai-experience" },
  { label: "Books", hash: "books" },
  { label: "Reading", path: "/reading" },
];

const SiteNavbar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" to="/">
            <span className="font-bold">Ben GUAN</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 gap-10">
            {sections.map((item) => {
              if (item.path) {
                return (
                  <Link key={item.label} to={item.path}>
                    {item.label}
                  </Link>
                );
              }

              if (item.hash && isHome) {
                return (
                  <a
                    key={item.label}
                    href={`#${item.hash}`}
                    onClick={(e) => handleNavClick(e, item.hash!)}
                  >
                    {item.label}
                  </a>
                );
              }

              if (item.hash) {
                return (
                  <Link key={item.label} to={{ pathname: "/", hash: `#${item.hash}` }}>
                    {item.label}
                  </Link>
                );
              }

              return null;
            })}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteNavbar;
