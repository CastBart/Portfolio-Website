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
    <div className="w-[400px] h-[400px] flex flex-col items-center p-2 border border-[#413f3f] rounded-lg">
      <h2 className="font-bold pb-2">{experience.company}</h2>
      <p>{experience.position}</p>
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
      <div className="w-full flex flex-grow p-2">
        <div className="w-1/2 p-2">
          <h3 className="font-bold">Skills</h3>
          <ul>
            {experience.skills.map((point, index) => (
              <li key={index}>- {point}</li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 p-2">
          <h3 className="font-bold">Technologies</h3>
          <ul>
            {experience.technologies.map((point, index) => (
              <li key={index}>- {point}</li>
            ))}
          </ul>
        </div>
      </div>
      <button
        onClick={() => onMoreClick(experience)}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-auto"
      >
        More
      </button>
    </div>
  );
}
