import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Switch
      checked={isDark}
      onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      iconOn={<FontAwesomeIcon icon={faMoon} />}
      iconOff={<FontAwesomeIcon icon={faSun} />}
      aria-label="Theme switch"
      name="Theme switch"
    />
  );
};

export default ThemeSwitcher;
