import React, { useState } from "react";
import { ExperienceCard } from "./components/ExperienceCard";
import { ExperienceDialog } from "./components/ExperienceDialog";
import { experienceList } from "../../../../lib/experiencelist";
import { ExperienceType } from "../../../../lib/definitions";

export default function Experience(): React.ReactNode {
  return (
    <section id="experience" className="text-[#ccc]">
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
    </section>
  );
}

// const [currentIndex, setCurrentIndex] = useState(0);
// const [selectedExperience, setSelectedExperience] =
//   useState<ExperienceType | null>(null);
// const [isDialogOpen, setIsDialogOpen] = useState(false);
// const [animating, setAnimating] = useState(false);

// const maxIndex = experienceList.length - 1;

// const handlePrev = () => {
//   if (currentIndex > 0 && !animating) {
//     setAnimating(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) => prevIndex - 1);
//       setAnimating(false);
//     }, 500); // Match duration with CSS transition
//   }
// };

// const handleNext = () => {
//   if (currentIndex < experienceList.length - 1 && !animating) {
//     setAnimating(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) => prevIndex + 1);
//       setAnimating(false);
//     }, 500); // Match duration with CSS transition
//   }
// };

// const handleOpenDialog = (experience: ExperienceType) => {
//   setSelectedExperience(experience);
//   setIsDialogOpen(true);
//   document.body.classList.add("overflow-hidden");
// };

// const handleCloseDialog = () => {
//   setIsDialogOpen(false);
//   setSelectedExperience(null);
//   document.body.classList.remove("overflow-hidden");
// };

// return (
//   <section
//     id="experience"
//     className="min-h-screen flex flex-col items-center justify-center"
//   >
//     <h1 className="text-4xl font-bold pb-10">Experience</h1>

//     <div className="flex items-center space-x-4">
//       <button
//         onClick={handlePrev}
//         disabled={currentIndex === 0 || animating}
//         className="p-2 bg-[#3b82f6] rounded disabled:opacity-50"
//       >
//         {"<"}
//       </button>

//       {/* Experience Cards Container with Animation */}
//       <div className="w-[300px] sm:w-[600px] lg:w-[900px] flex justify-center">
//         <div className="relative w-[600px] overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentIndex * 100}%)`,
//             }}
//           >
//             {experienceList.map((experience, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-full flex justify-center transition-opacity duration-500 ease-in-out"
//                 style={{
//                   opacity: index === currentIndex ? 1 : 0,
//                   zIndex: index === currentIndex ? 10 : 0,
//                 }}
//               >
//                 <ExperienceCard
//                   experience={experience}
//                   onMoreClick={() => handleOpenDialog(experience)}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <button
//         onClick={handleNext}
//         disabled={currentIndex >= maxIndex || animating}
//         className="p-2 bg-[#3b82f6] rounded disabled:opacity-50"
//       >
//         {">"}
//       </button>
//     </div>

//     {isDialogOpen && selectedExperience && (
//       <ExperienceDialog
//         experience={selectedExperience}
//         onClose={handleCloseDialog}
//       />
//     )}
//   </section>
// );
