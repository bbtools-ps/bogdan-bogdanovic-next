"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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

  const { t } = useTranslation("common");

  if (!mounted) {
    return (
      <button
        className="full flex rounded-full bg-white p-2 duration-100 hover:opacity-75 dark:bg-black"
        aria-label={t("SwitchTheme_Label")}
      >
        <Icons icon="sun" />
      </button>
    );
  }

  return (
    <button
      className="full flex rounded-full bg-white p-2 duration-100 hover:opacity-75 dark:bg-black"
      aria-label={t("SwitchTheme_Label")}
      onClick={handleToggleTheme}
    >
      <Icons icon={icon} />
    </button>
  );
}
