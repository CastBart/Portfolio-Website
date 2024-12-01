import React from "react";
import { ExperienceCard } from "./components/ExperienceCard";
import { experienceList } from "../../../../lib/experiencelist";
import URLArrow from "../../../../ui/URLArrow";

export default function Experience(): React.ReactNode {
  return (
    <section
      id="experience"
      className="text-[#ccc] mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen  bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experienceList.map((experience, index) => {
            return (
              <li className="mb-12" key={index}>
                <ExperienceCard experience={experience} />
              </li>
            );
          })}
        </ol>
      </div>
      <div className="mt-14">
        <a
          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
          href="/resume.pdf"
          target="_blank"
        >
          <URLArrow text="View Full Resume"/>
        </a>
      </div>
    </section>
  );
}
