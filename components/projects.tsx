import React from "react";
import Card from "./ui/projectCard";
import { projects } from "@/lib/data";
import { AnimatePage } from "./ui/animatePage";
export default function Projects() {
  return (
    <AnimatePage>
      <section>
        <h1 className="text-2xl md:text-4xl font-semibold  text-gray-800 dark:text-gray-200">
          What I&apos;ve been working on
        </h1>
        <p className="text-base md:text-xl py-5  text-gray-600 dark:text-gray-200">
          I like to stay busy and always have a project in the works.
          <br />
          Take a look at some of the applications I have worked on.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index}>
              <Card
                title={project.title}
                description={project.description}
                imgUrl={project.imgUrl}
                link={project.link}
                github={project.github}
                techStack={project.techStack.map((tech) => tech)}
              />
            </div>
          ))}
        </div>
      </section>
    </AnimatePage>
  );
}
