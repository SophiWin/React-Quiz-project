import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import darkIcon from "../assets/dark.svg";
import lightIcon from "../assets/light.svg";
import "../index.css";

export default function Navbar() {
  let { changeTheme, isDark } = useContext(ThemeContext);
  return (
    <nav className=" bg-black border-sky-300 border-b-4 text-white  px-6 py-3 ">
      <div className="max-w-6xl mx-auto flex justify-between items-center ">
        <h1 className="text-yellow-400 font-serif font-extrabold text-3xl">
          Quizz!
        </h1>
        <ul className="flex gap-4 items-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <div className="cursor-pointer mx-4 my-6 md:my-0 ">
              {isDark && (
                <img
                  src={lightIcon}
                  className="bg-black"
                  onClick={() => changeTheme("light")}
                />
              )}
              {!isDark && (
                <img src={darkIcon} onClick={() => changeTheme("dark")} />
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
