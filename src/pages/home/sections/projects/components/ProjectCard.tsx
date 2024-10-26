import React from "react";
import { Project } from "../../../../../lib/definitions"; // Import your Project type

interface ProjectCardProps {
  project: Project;
  onMoreClick: (project: Project) => void; // Callback for the "More" button
}

export function ProjectCard({ project, onMoreClick }: ProjectCardProps): React.ReactNode {
  return (
    <div className="w-56 min-h-[350px] flex flex-col items-center p-4 border border-[#413f3f] rounded-lg z-20">
      <h3 className="font-bold pb-6">{project.title}</h3>

      {/* Placeholder for project image or icon */}
      <div className="w-36 h-36 border rounded-full border-[#413f3f] shrink-0 mb-4">
        {/* Image can be placed here */}
      </div>

      {/* Short description with overflow handling */}
      <div className="text-center overflow-hidden text-ellipsis line-clamp-3 mb-4">
        {project.shotDesc}
      </div>

      {/* "More" button to open the dialog */}
      <button
        className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={() => onMoreClick(project)} // Trigger the dialog from the parent component
      >
        More
      </button>
    </div>
  );
}
