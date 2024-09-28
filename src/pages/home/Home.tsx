import React from "react";
import AboutMe from "./components/AboutMeSection";

export default function Home(): React.ReactNode {
  return (
    <main className="w-full container mx-auto">
      <AboutMe />
    </main>
  );
}
