import { useTheme } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";

import { Data } from "../common/models/data";
// import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

const Home = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  return (
    <div
      className="wrapper"
      style={
        isDark
          ? { backgroundColor: "rgba(9, 64, 116, 0.8)" }
          : { backgroundColor: "rgba(255, 255, 255, 0.87)" }
      }
    >
      <Header
        title={t("home:AuthorName_Label")}
        subtitle={t("home:AuthorHeadline_Label")}
        description={t("home:AuthorAbout_Label")}
      />
      <main>
        <FeaturedProjects
          projects={Data.Projects}
          title={t("home:FeaturedProjectsTitle_Label")}
          description={t("home:FeaturedProjectsDescription_Label")}
        />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
