"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

export default function ThemeSwitchButton({style}: {
  style: {
    button:string,
    icon:string
  }
}) {
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
      className={style.button}
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <SunIcon className={style.icon} />
      ) : (
        <MoonIcon className={style.icon} />
      )}
    </button>
  );
}
