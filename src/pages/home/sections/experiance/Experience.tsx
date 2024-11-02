import React, { useState } from "react";
import { ExperienceCard } from "./components/ExperienceCard";
import { ExperienceDialog } from "./components/ExperienceDialog";
import { experienceList } from "../../../../lib/experiencelist";
import { ExperienceType } from "../../../../lib/definitions";

export default function Experience(): React.ReactNode {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [visibleCards, setVisibleCards] = useState(1);

  const maxIndex = experienceList.length - 1;

  const handlePrev = () => {
    if (currentIndex > 0 && !animating) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        setAnimating(false);
      }, 500); // Match duration with CSS transition
    }
  };

  const handleNext = () => {
    if (currentIndex < experienceList.length - 1 && !animating) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setAnimating(false);
      }, 500); // Match duration with CSS transition
    }
  };

  const handleOpenDialog = (experience: ExperienceType) => {
    setSelectedExperience(experience);
    setIsDialogOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedExperience(null);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center"
    >
      <h1 className="text-4xl font-bold pb-10">Experience</h1>

      <div className="flex items-center space-x-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0 || animating}
          className="p-2 bg-[#3b82f6] rounded disabled:opacity-50"
        >
          {"<"}
        </button>

        {/* Experience Cards Container with Animation */}
        <div className="w-[600px] lg:w-[900px] flex justify-center">
          <div className="relative w-[600px] overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {experienceList.map((experience, index) => (
                <div
                  key={experience.company}
                  className="flex-shrink-0 w-full flex justify-center transition-opacity duration-500 ease-in-out"
                  style={{
                    opacity: index === currentIndex ? 1 : 0,
                    zIndex: index === currentIndex ? 10 : 0,
                  }}
                >
                  <ExperienceCard
                    experience={experience}
                    onMoreClick={() => handleOpenDialog(experience)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex || animating}
          className="p-2 bg-[#3b82f6] rounded disabled:opacity-50"
        >
          {">"}
        </button>
      </div>

      {isDialogOpen && selectedExperience && (
        <ExperienceDialog
          experience={selectedExperience}
          onClose={handleCloseDialog}
        />
      )}
    </section>
  );
}
