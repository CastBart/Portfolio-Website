import React from "react";
import { Project } from "../../../../../lib/definitions"; // Import your Project type

interface ProjectCardProps {
  project: Project;
  // onMoreClick: (project: Project) => void; // Callback for the "More" button
}

export function ProjectCard({
  project,
}: // onMoreClick,
ProjectCardProps): React.ReactNode {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <header></header>
    </div>
  );
}

// return (
//   <div className="w-56 min-h-[350px] flex flex-col items-center p-4 border border-[#413f3f] rounded-lg z-20">
//     <h3 className="font-bold pb-6">{project.title}</h3>

//     {/* Placeholder for project image or icon */}
//     <div className="w-36 h-36 border rounded-full border-[#413f3f] shrink-0 mb-4">
//       {/* Image can be placed here */}
//     </div>

//     {/* Short description with overflow handling */}
//     <div className="text-center overflow-hidden text-ellipsis line-clamp-3 mb-4">
//       {project.shotDesc}
//     </div>

//     {/* "More" button to open the dialog */}
//     <button
//       className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//       onClick={() => onMoreClick(project)} // Trigger the dialog from the parent component
//     >
//       More
//     </button>
//   </div>
// );
