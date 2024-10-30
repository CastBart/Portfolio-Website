import React from "react";
import AboutMe from "./sections/aboutme/AboutMeSection";
import NavBar from "./components/NavBar";
import Projects from "./sections/projects/Projects";
import Experiance from "./sections/experiance/Experiance";

export default function Home(): React.ReactNode {
  return (
    <main>
      <NavBar />
      <AboutMe />
      <Projects />
      <Experiance />
    </main>
  );
}
