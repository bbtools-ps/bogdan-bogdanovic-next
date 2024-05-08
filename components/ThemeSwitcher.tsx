"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Icons from "./UI/Icons";

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const icon = resolvedTheme === "light" ? "moon" : "sun";

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleToggleTheme = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  if (!mounted) {
    return (
      <button
        className="flex hover:opacity-75 bg-white dark:bg-black rounded-full full p-2 duration-100"
        aria-label="Switch theme"
      >
        <Icons icon="sun" />
      </button>
    );
  }

  return (
    <button
      className="flex hover:opacity-75 bg-white dark:bg-black rounded-full full p-2 duration-100"
      aria-label="Switch theme"
      onClick={handleToggleTheme}
    >
      <Icons icon={icon} />
    </button>
  );
}
