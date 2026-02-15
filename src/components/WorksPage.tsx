import React from "react";
import SiteNavbar from "./SiteNavbar";
import WorksShowcase from "./WorksShowcase";
import { works } from "../data/works";
import { BlurFade } from "./magicui/blur-fade";

const WorksPage: React.FC = () => {
  return (
    <div className="w-full">
      <SiteNavbar />
      <section className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 pt-28 pb-16">
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Works
              </div>
              <h2 className="text-3xl font-bold text-foreground tracking-tighter sm:text-5xl">
                Deep Dives & Case Studies
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Click any project to open the full case study.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="w-full">
          <WorksShowcase works={works} />
        </div>
      </section>
    </div>
  );
};

export default WorksPage;
