import React from "react";
import { FaMoon } from "react-icons/fa";

import { FaRegMoon } from "react-icons/fa";

interface NavComponentProps {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
}

export const NavComponent: React.FC<NavComponentProps> = ({
  setDarkMode,
  darkMode,
}) => {
  return (
    <nav className={`${darkMode && "bg-elementDark text-white"} flex justify-between items-center p-5 shadow-lg`}>
      <h1 className={`text-base md:text-2xl font-black`}>Where in the world?</h1>

      {/* dark mode */}
      <div className="flex items-center hover:cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaMoon /> : <FaRegMoon />}
        <h1 className={`font-bold ml-2`} ml-2>Dark mode</h1>
      </div>
    </nav>
  );
};
