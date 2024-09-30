import { NavBarItem } from "../../../lib/definitions";
import { useState } from "react";

const navItems: NavBarItem[] = [
  { id: "1", href: "#about_me", text: "About me" },
  { id: "2", href: "#projects", text: "Projects" },
  { id: "3", href: "#experiance", text: "Experiance" },
  { id: "4", href: "#contact_me", text: "Contact me" },
];

export const NavBar = () => {
  const [nav, setNav] = useState(true);
  function handleNav() {
    setNav(!nav);
  }
  return (
    <nav id="nav_bar" className="fixed top-0 w-full p-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>Logo</div>
        {/* Desktop Navibation */}
        <ul className="hidden items-center space-x-10 text-sm uppercase lg:flex ">
          {navItems.map((item) => {
            return (
              <li className="cursor-pointer rounded-md p-2 transition-shadow duration-300 ease-in-out hover:shadow-sm hover:shadow-white">
                <a className="" href={item.href} id={item.id}>
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
        {/* Mobile  */}
        <div className="hidden lg:block">Mode</div>
        {/* Hamburger menu */}
        <div className="lg:hidden" onClick={handleNav}>
          <div
            className={`flex flex-col items-center justify-center space-y-1 transition-all duration-300 ease-in-out transform ${
              !nav ? "" : ""
            }`}
          >
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out transform ${
                !nav ? "rotate-45 translate-y-1" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white transition-opacity duration-300 ease-in-out ${
                !nav ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out transform ${
                !nav ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    </nav>
  );
};
