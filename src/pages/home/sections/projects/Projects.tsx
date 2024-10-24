import React, { useState, useEffect } from "react";
import { projects } from "../../../../lib/projectlist";
import { ProjectCard } from "./components/ProjectCard";

export default function Projects(): React.ReactNode {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3); // Default to 3 for desktop

  // Calculate max index dynamically
  const maxIndex = projects.length - visibleCards;

  // Handle screen resize to adjust visible cards
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // 1 item visible on mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // 2 items visible on tablet
      } else {
        setVisibleCards(3); // 3 items visible on desktop
      }
    };

    updateVisibleCards(); // Set initial value
    window.addEventListener("resize", updateVisibleCards); // Listen for window resize

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0 && !animating) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        setAnimating(false);
      }, 500);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex && !animating) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setAnimating(false);
      }, 500);
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center items-center"
    >
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold p-2 pb-10">Projects</h1>
        <div className="flex items-center space-x-4">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0 || animating}
            className="p-2 bg-gray-300 rounded disabled:opacity-50"
          >
            {"<"}
          </button>

          {/* Project Cards Container */}
          <div className=" w-[300px] sm:w-[600px] lg:w-[900px] overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (currentIndex * 100) / visibleCards
                }%)`,
                // width: `${projects.length * (100 / visibleCards)}%`, // Corrected width
              }}
            >
              {projects.map((project, index) => {
                // Determine if the project is visible
                const isVisible =
                  index >= currentIndex && index < currentIndex + visibleCards;

                return (
                  <div
                    key={project.id}
                    className={`w-[100%] sm:w-[50%] lg:w-[33.33%] flex justify-center flex-shrink-0 transition-opacity duration-500 ease-in-out ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transitionProperty: "opacity, transform",
                    }}
                  >
                    <ProjectCard project={project} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex || animating}
            className="p-2 bg-gray-300 rounded disabled:opacity-50"
          >
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
}
