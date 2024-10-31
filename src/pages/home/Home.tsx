import React from "react";
import AboutMe from "./sections/aboutme/AboutMeSection";
import NavBar from "./components/NavBar";
import Projects from "./sections/projects/Projects";
import Experience from "./sections/experiance/Experience";

export default function Home(): React.ReactNode {
  return (
    <main>
      <NavBar />
      <AboutMe />
      <Projects />
      <Experience />
    </main>
  );
}
