import { NavBarItem } from "../../../lib/definitions";
import React, { useState, useEffect } from "react";

const navItems: NavBarItem[] = [
  { id: "1", href: "#about_me", text: "About me" },
  { id: "3", href: "#experience", text: "Experience" },
  { id: "2", href: "#projects", text: "Projects" },
  { id: "4", href: "#contact_me", text: "Contact me" },
];

export default function Navigation(): React.ReactNode {
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
    <nav id="nav_bar" className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        {navItems.map((item, index) => {
          const isActive = activeItem === item.href;
          
          return (
            <li key={index}>
              <a
                href={item.href}
                className={`group flex items-center py-3 ${
                  isActive ? "text-[#ccc]" : "text-[#5c4444]"
                } hover:text-[#ccc]`}
                onClick={() => handleSmoothScroll(item.href)}
              >
                <span
                  className={`mr-4 h-px transition-all duration-300 ${
                    isActive
                      ? "w-16 bg-[#ccc]"
                      : "w-8 bg-[#5c4444] group-hover:w-16 group-hover:bg-[#ccc]"
                  }`}
                ></span>
                <span className="font-[700] uppercase">{item.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
