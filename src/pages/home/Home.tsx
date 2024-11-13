import React from "react";
import AboutMe from "./sections/aboutme/AboutMeSection";
import NavBar from "./components/Navigation";
import Projects from "./sections/projects/Projects";
import Experience from "./sections/experiance/Experience";
import Contact from "./sections/contact/contact";
import Header from "./components/Header";

export default function Home(): React.ReactNode {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />
      </div>
    </div>
  );
}
