import React from "react";
import AboutMe from "./components/AboutMeSection";
import { NavBar } from "./components/NavBar";

export default function Home(): React.ReactNode {
  return (
    <main className="w-full container mx-auto">
      <NavBar />
      <AboutMe />
    </main>
  );
}
