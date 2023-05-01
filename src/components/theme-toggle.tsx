"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
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
    <Switch.Group>
      <div className="flex justify-center items-center">
        <BsSunFill className="h-7 w-7 dark:text-orange-600 text-gray-800 mr-3 hover:animate-rotate-360 transition-colors duration-300" />
        <Switch
          checked={isDarkTheme}
          onChange={handleThemeSwitch}
          className="relative inline-flex h-7 w-12 items-center rounded-full dark:bg-orange-600 bg-gray-800"
        >
          <span className="dark:translate-x-6 translate-x-1 inline-block h-5 w-5 transform rounded-full transition dark:bg-gray-900 bg-white" />
        </Switch>
        <BsMoonFill className="h-7 w-7 dark:text-orange-600 text-gray-800 ml-3 hover:animate-rotate-360 transition-colors duration-300" />
      </div>
    </Switch.Group>
  );
};

export default ThemeToggle;
