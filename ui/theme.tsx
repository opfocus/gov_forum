"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

export default function Theme() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const currentTheme =
      localStorage.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
    localStorage.theme = newTheme;
  };

  return (
    <button
      className="p-1 text-gray-400 hover:scale-125 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <SunIcon className="w-8" />
      ) : (
        <MoonIcon className="w-8" />
      )}
    </button>
  );
}
