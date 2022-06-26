import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Data } from "../common/models/data";
// import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainContent from "../components/MainContent/MainContent";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="wrapper">
      <Header
        title={t("home:AuthorName_Label")}
        subtitle={t("home:AuthorHeadline_Label")}
        description={t("home:AuthorAbout_Label")}
      />
      <MainContent featuredProjects={Data.Projects} />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
