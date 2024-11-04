import React from "react";
import { ExperienceType } from "../../../../../lib/definitions";

interface ExperienceDialogProps {
  experience: ExperienceType;
  onClose: () => void;
}

export function ExperienceDialog({
  experience,
  onClose,
}: ExperienceDialogProps): React.ReactNode {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-[60]">
      <div className="bg-[#242424] p-8 rounded-lg w-4/5 sm:w-1/2 lg:w-1/3">
        <h3 className="font-bold text-xl">{experience.company}</h3>
        <p>{experience.position}</p>
        <p>
          {experience.from.toLocaleDateString()} -{" "}
          {experience.to instanceof Date
            ? experience.to.toLocaleDateString("en-GB") // Format to dd/mm/yyyy
            : experience.to}{" "}
        </p>
        <p>{experience.description}</p>
        <ul>
          {experience.skills.map((point, index) => (
            <li key={index}>- {point}</li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}
