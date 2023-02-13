import { useTheme } from "@nextui-org/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Education from "../components/Education/Education";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Languages from "../components/Languages/Languages";
import WorkExperience from "../components/WorkExperience/WorkExperience";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}

const Home = () => {
  const { isDark } = useTheme();

  return (
    <div
      className="wrapper"
      style={
        isDark
          ? { backgroundColor: "hsla(210, 50%, 15%, 0.8)" }
          : { backgroundColor: "hsla(210, 5%, 100%, 0.82)" }
      }
    >
      <Header />
      <main>
        <FeaturedProjects />
        <WorkExperience />
        <Education />
        <Languages />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
