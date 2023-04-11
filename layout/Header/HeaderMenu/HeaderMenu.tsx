import { Container } from "@nextui-org/react";
import LanguageDropdown from "./LanguageDropdown";
import ThemeSwitcher from "./ThemeSwitcher";

const HeaderMenu = () => {
  return (
    <Container
      style={{ height: "40px" }}
      css={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "$5" }}
    >
      <LanguageDropdown />
      <ThemeSwitcher />
    </Container>
  );
};

export default HeaderMenu;
