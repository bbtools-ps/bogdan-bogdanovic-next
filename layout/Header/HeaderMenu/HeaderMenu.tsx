import { Container } from "@nextui-org/react";
import LanguageDropdown from "./LanguageDropdown";
import ThemeSwitcher from "./ThemeSwitcher";

export default function HeaderMenu() {
  return (
    <Container
      css={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "$5" }}
    >
      <LanguageDropdown />
      <ThemeSwitcher />
    </Container>
  );
}
