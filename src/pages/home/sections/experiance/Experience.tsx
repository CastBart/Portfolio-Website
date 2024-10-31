import React, { useState } from "react";
import { ExperienceCard } from "./components/ExperienceCard";
import { ExperienceDialog } from "./components/ExperienceDialog";
import { experienceList } from "../../../../lib/experiencelist";
import { ExperienceType } from "../../../../lib/definitions";

export default function Experience(): React.ReactNode {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < experienceList.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handleOpenDialog = (experience: ExperienceType) => {
    setSelectedExperience(experience);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => setIsDialogOpen(false);

  return (
    <section id="experience" className="min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold pb-10">Experience</h1>
      
      <div className="flex items-center space-x-4">
        <button onClick={handlePrev} disabled={currentIndex === 0}>&lt;</button>

        <ExperienceCard experience={experienceList[currentIndex]} onMoreClick={handleOpenDialog} />

        <button onClick={handleNext} disabled={currentIndex === experienceList.length - 1}>&gt;</button>
      </div>

      {isDialogOpen && selectedExperience && (
        <ExperienceDialog experience={selectedExperience} onClose={handleCloseDialog} />
      )}
    </section>
  );
}
