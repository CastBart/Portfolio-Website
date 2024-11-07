import React from "react";
import { ExperienceType } from "../../../../../lib/definitions";

interface ExperienceCardProps {
  experience: ExperienceType;
  onMoreClick: (experience: ExperienceType) => void;
}

export function ExperienceCard({
  experience,
  onMoreClick,
}: ExperienceCardProps): React.ReactNode {
  return (
    <div className="w-[300px] sm:w-[500px] h-[400px]  flex flex-col items-center p-2 border border-[#413f3f] rounded-lg">
      <h2 className="font-bold pb-2">{experience.company}</h2>
      <p className="italic">{experience.position}</p>
      <p>
        {experience.from.toLocaleDateString("en-GB", {
          month: "short",
          year: "numeric",
        })}{" "}
        -{" "}
        {experience.to instanceof Date
          ? experience.to.toLocaleDateString("en-GB", {
              month: "short",
              year: "numeric",
            })
          : experience.to}{" "}
      </p>
      
      <div className="w-full flex flex-grow p-2 overflow-hidden">
        <div className="w-1/2 p-2 overflow-hidden  text-ellipsis">
          <h3 className="font-bold text-center">Skills</h3>
          <ul className="list-outside list-disc pl-4">
            {experience.skills.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        
        <div className="w-1/2 p-2 overflow-y-auto">
          <h3 className="font-bold text-center">Technologies</h3>
          <ul className=" list-outside list-disc pl-4">
            {experience.technologies.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <button
        onClick={() => onMoreClick(experience)}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
      >
        More
      </button>
    </div>
  );
}
