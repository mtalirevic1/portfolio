"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [isDarkTheme, setIsDarkTheme] = useState(() => currentTheme === "dark");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeSwitch = useCallback(() => {
    setIsDarkTheme((prev) => {
      setTheme(!prev ? "dark" : "light");
      return !prev;
    });
  }, [setTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex justify-center items-center">
      <button onClick={handleThemeSwitch}>
        {isDarkTheme ? (
          <BsSunFill className="h-7 w-7 dark:text-orange-600 text-gray-800 hover:animate-spin transition-colors duration-300" />
        ) : (
          <BsMoonFill className="h-7 w-7 dark:text-orange-600 text-gray-800 hover:animate-spin transition-colors duration-300" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
