import { Languages } from "@/common/constants/constants";
import { updateSelectedLanguage } from "@/redux/reducers/settingsSlice";
import { RootState } from "@/redux/store";
import { Dropdown, theme } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const LanguageDropdown = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector<RootState, string[]>(
    (state) => state.settings.selectedLanguage
  );
  const { locale, pathname } = useRouter();

  // Change the language on the dropdown if the user entered the page directly from url
  useEffect(() => {
    dispatch(updateSelectedLanguage([locale]));
  }, [dispatch, locale]);

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
          dispatch(updateSelectedLanguage(Array.from(selectedLanguage)))
        }
      >
        {Languages.map((item) => (
          <Dropdown.Item key={item.id} textValue={item.name}>
            <Link href={pathname} locale={item.id} style={{ color: theme.colors.accents9.value }}>
              {item.name}
            </Link>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageDropdown;
