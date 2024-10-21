import React from "react";
import AboutMe from "./sections/aboutme/AboutMeSection";
import NavBar from "./components/NavBar";
import Projects from "./sections/projects/Projects";

export default function Home(): React.ReactNode {
  return (
    <main className="">
      <NavBar />
      <AboutMe />
      <Projects />
    </main>
  );
}
