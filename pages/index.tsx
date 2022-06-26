import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, Switch, useTheme } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTheme as useNextTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Data } from "../common/models/data";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import { updateSelectedLanguage } from "../redux/reducers/settingsSlice";
import { RootState } from "../redux/store";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

const languages = [
  { id: "en", name: "English" },
  { id: "sr", name: "Srpski" },
];

const Home = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const selectedLanguage = useSelector<RootState, Iterable<string> | undefined>(
    (state) => state.settings.selectedLanguage
  );
  const router = useRouter();

  return (
    <div className="wrapper">
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "2rem",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <Dropdown>
          <Dropdown.Button color="default" light>
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
            {languages.map((item) => (
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
        />
      </div>
      <Header
        title={Data.Author.name}
        subtitle={Data.Author.title}
        description={t("home:AboutMe_Label")}
      />
      <MainContent featuredProjects={Data.Projects} />
      <Footer />
    </div>
  );
};

export default Home;
