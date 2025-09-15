"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function applyDocumentTheme(theme) {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.classList.toggle("dark", theme === "dark");
}

function getStoredTheme() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    return null;
  }
}

function storeTheme(theme) {
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch (error) {
    // Ignore write errors (e.g. private browsing)
  }
}

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const storedTheme = getStoredTheme();
    const prefersDark = window.matchMedia
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false;

    const initialTheme = storedTheme === "dark" || (!storedTheme && prefersDark)
      ? "dark"
      : "light";

    setTheme(initialTheme);
    applyDocumentTheme(initialTheme);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    applyDocumentTheme(theme);
  }, [theme, isMounted]);

  const toggleTheme = () => {
    if (!isMounted) {
      return;
    }

    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    storeTheme(nextTheme);
  };

  const buttonLabel = theme === "dark" ? "Activate light mode" : "Activate dark mode";
  const icon = theme === "dark" ? "\u2600\uFE0F" : "\uD83C\uDF19"; // sun / moon icons
  const text = theme === "dark" ? "Light mode" : "Dark mode";

  const baseClasses = "inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:focus-visible:ring-gray-500";
  const buttonClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={buttonClasses}
      aria-label={buttonLabel}
      aria-pressed={theme === "dark"}
    >
      <span aria-hidden="true" className="text-lg">
        {icon}
      </span>
      <span className="hidden md:inline">{text}</span>
      <span className="md:hidden" aria-hidden="true">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
