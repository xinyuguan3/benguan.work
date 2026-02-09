import React from "react";
import SiteNavbar from "./SiteNavbar";
import RSSReader from "./RSSReader";
import { DATA } from "../data/resume";
import { BlurFade } from "./magicui/blur-fade";

const ReadingPage: React.FC = () => {
  return (
    <div className="w-full">
      <SiteNavbar />
      <section className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 pt-28 pb-16">
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Reading
              </div>
              <h2 className="text-3xl font-bold text-foreground tracking-tighter sm:text-5xl">
                RSS Reading Room
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Live updates from the blogs I follow.
              </p>
            </div>
          </div>
        </BlurFade>
        <RSSReader feeds={DATA.blogFeeds ?? []} />
      </section>
    </div>
  );
};

export default ReadingPage;
