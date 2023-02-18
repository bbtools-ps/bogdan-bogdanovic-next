import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Languages } from "../../../common/constants/constants";
import { updateSelectedLanguage } from "../../../redux/reducers/settingsSlice";
import { RootState } from "../../../redux/store";
import styles from "./HeaderMenu.module.css";

const HeaderMenu = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  const dispatch = useDispatch();
  const selectedLanguage = useSelector<RootState, string[]>(
    (state) => state.settings.selectedLanguage
  );
  const router = useRouter();

  // Change the language on the dropdown if the user entered the page from url
  useEffect(() => {
    if (router.locale) {
      dispatch(updateSelectedLanguage([router.locale]));
    }
  }, [dispatch, router.locale]);

  return (
    <div className={styles["header-menu"]}>
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
              <Link href={router.pathname} locale={item.id}>
                {item.name}
              </Link>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        iconOn={<FontAwesomeIcon icon={faMoon} />}
        iconOff={<FontAwesomeIcon icon={faSun} />}
        aria-label="switch"
      />
    </div>
  );
};

export default HeaderMenu;
