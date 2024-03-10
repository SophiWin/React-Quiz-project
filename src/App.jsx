import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  let { isDark } = useContext(ThemeContext);
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
}
