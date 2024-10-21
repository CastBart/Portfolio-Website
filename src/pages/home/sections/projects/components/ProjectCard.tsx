import { Project } from "../../../../../lib/definitions";

export function ProjectCard({
  project,
}: {
  project: Project;
}): React.ReactNode {
  return (
    <div className="w-56 h-56 flex flex-col justify-start items-center">
      <h3 className="font-bold pb-2">{project.title}</h3>
      <div className="w-36 h-36 border rounded-full border-[#413f3f] shrink-0">

      </div>
      <div className="text-center overflow-hidden text-ellipsis line-clamp-2">
        {project.shotDesc}
      </div>
    </div>
  );
}
