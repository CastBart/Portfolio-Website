import { NavBarItem } from "../../../lib/definitions";
import React, { useState, useEffect } from "react";

const navItems: NavBarItem[] = [
  { id: "1", href: "#about_me", text: "About me" },
  { id: "2", href: "#projects", text: "Projects" },
  { id: "3", href: "#experiance", text: "Experience" },
  { id: "4", href: "#contact_me", text: "Contact me" },
];

export default function NavBar(): React.ReactNode {
  const [nav, setNav] = useState(true);
  const [activeItem, setActiveItem] = useState<string>(navItems[0].href);
  const [scrollLock, setScrollLock] = useState(false); // New scroll lock state

  function handleNav() {
    setNav(!nav);
  }

  function handleSmoothScroll(href: string) {
    setActiveItem(href); // Set the clicked item as active immediately
    setScrollLock(true); // Lock scroll updates
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Unlock scroll updates after 500ms to avoid switching during scroll
    setTimeout(() => setScrollLock(false), 500);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (scrollLock) return; // Skip updating active item when scrollLock is true

      const offsets = navItems.map((item) => {
        const section = document.querySelector(item.href);
        return {
          id: item.href,
          offset: section
            ? section.getBoundingClientRect().top
            : Number.POSITIVE_INFINITY,
        };
      });
      const closestSection = offsets.reduce(
        (closest, current) =>
          current.offset < 100 && current.offset > -100 ? current : closest,
        { id: activeItem }
      );
      setActiveItem(closestSection.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeItem, scrollLock]);

  return (
    <nav id="nav_bar" className="fixed w-full top-0 p-2 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="p-2 text-sm uppercase">Logo</div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center space-x-10 text-sm uppercase lg:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer rounded-md p-2 transition-shadow duration-300 ease-in-out hover:shadow-sm hover:shadow-white ${
                activeItem === item.href ? "bg-blue-500 text-white" : ""
              }`}
            >
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default jump
                  handleSmoothScroll(item.href); // Smooth scroll to section
                }}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block p-2 text-sm uppercase">Mode</div>

        {/* Hamburger menu */}
        <div className="lg:hidden" onClick={handleNav}>
          <div className="flex flex-col h-8 w-8 ms-center justify-center space-y-1 transition-all duration-300 ease-in-out transform">
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
        className={`lg:hidden flex overflow-scroll z-50 flex-col fixed pt-12 bg-[#242424] bg-opacity-100 border-[#413f3f] border-l-2 border-y-2 w-[60%] h-full justify-start items-center space-y-6 text-sm rounded-l-3xl uppercase ease-in-out duration-500 ${
          nav ? "-right-[100%]" : "right-0"
        }`}
      >
        {navItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer w-3/4 h-10 flex justify-center items-center border-b border-[#413f3f]"
          >
            <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setNav(true); // Close mobile nav after selection
                handleSmoothScroll(item.href);
              }}
              className="font-bold"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
