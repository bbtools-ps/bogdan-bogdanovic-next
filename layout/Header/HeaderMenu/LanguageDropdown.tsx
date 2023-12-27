import { Languages } from "@/constants";
import { Dropdown, theme } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LanguageDropdown() {
  const { locale, pathname } = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState([locale]);

  return (
    <Dropdown>
      <Dropdown.Button color="default" id="lang" light>
        {selectedLanguage}
      </Dropdown.Button>
      <Dropdown.Menu
        color="default"
        variant="light"
        aria-label="Languages"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedLanguage}
        onSelectionChange={(selectedLanguage) =>
          // @ts-ignore
          setSelectedLanguage(Array.from(selectedLanguage))
        }
      >
        {Object.entries(Languages).map(([key, value]) => (
          <Dropdown.Item key={key} textValue={value}>
            <Link href={pathname} locale={key} style={{ color: theme.colors.accents9.value }}>
              {value}
            </Link>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
