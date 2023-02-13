import { Loading, useTheme } from "@nextui-org/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
const Education = dynamic(() => import("../components/Education/Education"), {
  loading: () => <Loading />
});
const FeaturedProjects = dynamic(
  () => import("../components/FeaturedProjects/FeaturedProjects"),
  {
    loading: () => <Loading />
  }
);
const Footer = dynamic(() => import("../components/Footer/Footer"), {
  loading: () => <Loading />
});
const Header = dynamic(() => import("../components/Header/Header"), {
  loading: () => <Loading />
});
const Languages = dynamic(() => import("../components/Languages/Languages"), {
  loading: () => <Loading />
});
const WorkExperience = dynamic(
  () => import("../components/WorkExperience/WorkExperience"),
  {
    loading: () => <Loading />
  }
);

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"]))
    }
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
