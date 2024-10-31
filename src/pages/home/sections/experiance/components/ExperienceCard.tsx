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
    <div className="w-[300px] p-4 border border-gray-300 rounded-lg">
      <h3 className="font-bold">{experience.company}</h3>
      <p>{experience.position}</p>
      <p>
        {experience.from.toLocaleDateString()} -{" "}
        {experience.to instanceof Date
          ? experience.to.toLocaleDateString("en-GB") // Format to dd/mm/yyyy
          : experience.to}{" "}
      </p>
      <ul>
        {experience.technicalSkills.map((point, index) => (
          <li key={index}>- {point}</li>
        ))}
      </ul>
      <button
        onClick={() => onMoreClick(experience)}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
      >
        More
      </button>
    </div>
  );
}
