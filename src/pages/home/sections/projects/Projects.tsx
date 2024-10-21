import React from "react";
import { projects } from "../../../../lib/projectlist";
import { ProjectCard } from "./components/ProjectCard";

export default function Projects(): React.ReactNode {
  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center items-center"
    >
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold p-4">Projects</h1>
        <div className="flex space-x-4">
          {projects.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </div>
      </div>
    </section>
  );
}
