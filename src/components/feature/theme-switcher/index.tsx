"use client";

import { Button } from "@/components/ui/button/button.component";
import { Loader, MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [isClient, setIsClient] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof localStorage === "undefined") return "light";
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.theme = "dark";

      return "dark";
    } else {
      localStorage.theme = "light";

      return "light";
    }
  });

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function toggleTheme() {
    if (localStorage.theme === "dark") {
      // Whenever the user explicitly chooses light mode
      localStorage.theme = "light";
      setTheme("light");
      return;
    }

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";
    setTheme("dark");
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Button variant="ghost" onClick={toggleTheme}>
      {isClient ? (
        <>
          {theme === "light" ? (
            <MoonStar className="w-5 h-5" suppressHydrationWarning />
          ) : (
            <Sun className="w-5 h-5" suppressHydrationWarning />
          )}
        </>
      ) : (
        <Loader className="animate-spin duration-150 w-5 h-5" />
      )}
    </Button>
  );
}
