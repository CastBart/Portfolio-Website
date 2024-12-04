import React from "react";
import Navigation from "./Navigation";
import profileImage from "../../../assets/profileImagejpg-removebg.png";
import LinkedInIcon from "../../../ui/LinkedInIcon";
import GitHubIcon from "../../../ui/GitHubIcon";
import InstagramIcon from "../../../ui/InstagramIcon";
import GmailIcon from "../../../ui/GmailIcon";

export default function Header(): React.ReactNode {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="flex flex-col md:flex-row">
          {/* Title Section */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              <a href="/">Bartosz Zych</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-[#ccc] sm:text-xl">
              Low-Code Developer
            </h2>
            <p className="mt-4 max-w-xs text-[#ccc] leading-normal">
              I'm an aspiring Full Stack Developer
            </p>
          </div>
          {/* Profile Image */}
          <div className="flex justify-start mt-4 md:justify-center md:mt-0 grow">
            <img
              className="rounded-full shadow-sm shadow-[#ccc] h-[128px]"
              src={profileImage}
              alt="Image"
            />
          </div>
        </div>
        {/* Navigation */}
        <Navigation />
      </div>
      {/* Social Media */}
      <ul className="ml-1 mt-8 flex items-center">
        {/* LinkedIn */}
        <li className="mr-5 shrink-0 text-xs">
          <a
            href="https://www.linkedin.com/in/bartosz-zych-043156135/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit my LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedInIcon />
          </a>
        </li>
        {/* Github */}
        <li className="mr-5 shrink-0 text-xs">
          <a
            href="https://github.com/CastBart"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit my GitHub"
          >
            <span className="sr-only">GitHub</span>
            <GitHubIcon />
          </a>
        </li>
        {/* Instagram */}
        <li className="mr-5 shrink-0 text-xs">
          <a
            href="https://www.instagram.com/bartek.fitness/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit my Instagram"
          >
            <span className="sr-only">Instagram</span>
            <InstagramIcon />
          </a>
        </li>
        {/* Gamil */}
        <li className="mr-5 shrink-0 text-xs">
          <a
            href="mailto:bartosz.j.zych@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Contact me through email"
          >
            <span className="sr-only">Email Address</span>
            <GmailIcon />
          </a>
        </li>
      </ul>
    </header>
  );
}
