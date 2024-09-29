import { NavBarItem } from "../../../lib/definitions";
import { useState } from "react";

const navItems: NavBarItem[] = [
  { id: "1", href: "#caloriecalculator", text: "About me" },
  { id: "2", href: "#exercises", text: "Projects" },
  { id: "3", href: "#singleworkouts", text: "Experiance" },
  { id: "4", href: "#workoutplans", text: "Contact me" },
];

export const NavBar = () => {
  const [mobileVisible, setMobileVisible] = useState(false);
  return (
    <nav id="nav_bar" className="flex items-center justify-between p-2">
      <div>Logo</div>
      <ul className="hidden lg:flex space-x-10 ">
        {navItems.map((item) => {
          return (
            <li className="hover:shadow-2xl shadow-white">
              <a
                className="p-2 no-underline hover:text-white text-white"
                href={item.href}
                id={item.id}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
      <div>Mode</div>
    </nav>
  );
};
