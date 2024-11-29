import React from "react";
import { ExperienceType } from "../../../../../lib/definitions";

interface ExperienceCardProps {
  experience: ExperienceType;
  // onMoreClick: (experience: ExperienceType) => void;
}

export function ExperienceCard({
  experience,
}: //onMoreClick,
ExperienceCardProps): React.ReactNode {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
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
      </header>
      <div className="z-10 sm:col-span-6">
        <h3>
          <div>
            <a href="https://google.com" target="_blank" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            </a>
          </div>
        </h3>

      </div>
    </div>
  );
}

// return (
//   <div className="w-[300px] sm:w-[500px] h-[400px]  flex flex-col items-center p-2 border border-[#413f3f] rounded-lg">
//     <h2 className="font-bold pb-2">{experience.company}</h2>
//     <p className="italic">{experience.position}</p>
//     <p>
//       {experience.from.toLocaleDateString("en-GB", {
//         month: "short",
//         year: "numeric",
//       })}{" "}
//       -{" "}
//       {experience.to instanceof Date
//         ? experience.to.toLocaleDateString("en-GB", {
//             month: "short",
//             year: "numeric",
//           })
//         : experience.to}{" "}
//     </p>

//     <div className="w-full flex flex-grow p-2 overflow-hidden">
//       <div className="w-1/2 p-2 overflow-hidden  text-ellipsis">
//         <h3 className="font-bold text-center">Skills</h3>
//         <ul className="list-outside list-disc pl-4">
//           {experience.skills.map((point, index) => (
//             <li key={index}>{point}</li>
//           ))}
//         </ul>
//       </div>

//       <div className="w-1/2 p-2 overflow-y-auto">
//         <h3 className="font-bold text-center">Technologies</h3>
//         <ul className=" list-outside list-disc pl-4">
//           {experience.technologies.map((point, index) => (
//             <li key={index}>{point}</li>
//           ))}
//         </ul>
//       </div>
//     </div>

//     <button
//       onClick={() => onMoreClick(experience)}
//       className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
//     >
//       More
//     </button>
//   </div>
// );
