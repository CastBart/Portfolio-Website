import { NavBarItem } from "../../../lib/definitions";
import React, { useState } from "react";

const navItems: NavBarItem[] = [
  { id: "1", href: "#caloriecalculator", text: "About me" },
  { id: "2", href: "#exercises", text: "Projects" },
  { id: "3", href: "#singleworkouts", text: "Experiance" },
  { id: "4", href: "#workoutplans", text: "Contact me" },
];

export default function NavBar(): React.ReactNode {
  const [nav, setNav] = useState(true);
  function handleNav() {
    setNav(!nav);
  }
  return (
    <nav id="nav_bar" className="fixed w-full top-0 p-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="p-2 text-sm uppercase">Logo</div>
        {/* Desktop Navibation */}
        <ul className="hidden items-center space-x-10 text-sm uppercase lg:flex ">
          {navItems.map((item) => {
            return (
              <li
                key={item.id}
                className="cursor-pointer rounded-md p-2 transition-shadow duration-300 ease-in-out hover:shadow-sm hover:shadow-white"
              >
                <a className="" href={item.href}>
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:block p-2 text-sm uppercase">Mode</div>
        {/* Hamburger menu */}
        <div className="lg:hidden z-10" onClick={handleNav}>
          <div
            className={`flex flex-col h-8 w-8 ms-center justify-center space-y-1 transition-all duration-300 ease-in-out transform`}
          >
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-200 ease-in-out transform ${
                !nav ? "rotate-45 translate-y-1" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white transition-opacity duration-200 ease-in-out ${
                !nav ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-200 ease-in-out transform ${
                !nav ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      {/* Mobile NavBar */}
      <ul
        className={`lg:hidden flex z-0 flex-col fixed pt-9 bg-[#3a3838] w-[60%] h-full justify-start items-center space-y-10 text-sm rounded-l-3xl uppercase ease-in-out duration-500 top-0 ${
          nav ? "-right-[100%]" : "right-0"
        }`}
      >
        {navItems.map((item) => {
          return (
            <li
              key={item.id}
              className="card-wrapper cursor-pointer w-3/4 text-center rounded-md py-2 transition-shadow duration-300 ease-in-out hover:shadow-sm hover:shadow-white"
            >
              <a className="card-content" href={item.href} id={item.id}>
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
