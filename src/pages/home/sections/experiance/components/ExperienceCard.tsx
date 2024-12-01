import React from "react";
import { ExperienceType } from "../../../../../lib/definitions";
import URLArrow from "../../../../../ui/URLArrow";

interface ExperienceCardProps {
  experience: ExperienceType;
}

export function ExperienceCard({
  experience,
}: ExperienceCardProps): React.ReactNode {
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
            <a
              href={experience.url}
              target="_blank"
              className="inline-flex items-baseline font-medium leading-tight hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <URLArrow text={experience.position}/>
            </a>
          </div>
        </h3>
        <p className="mt-2 text-base text-[#ccc]]">{experience.description}</p>
        <ul className="mt-2 flex flex-wrap">
          {experience.technologies.map((technology, index) => {
            return (
              <li className="mr-1.5 mt-2" key={index}>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  {technology}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
