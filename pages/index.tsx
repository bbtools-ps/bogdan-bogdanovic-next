import { useTheme } from "@nextui-org/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { lazy, Suspense } from "react";
const Education = lazy(() => import("../components/Education/Education"));
const FeaturedProjects = lazy(
  () => import("../components/FeaturedProjects/FeaturedProjects")
);
const Footer = lazy(() => import("../components/Footer/Footer"));
const Header = lazy(() => import("../components/Header/Header"));
const Languages = lazy(() => import("../components/Languages/Languages"));
const WorkExperience = lazy(
  () => import("../components/WorkExperience/WorkExperience")
);

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
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <main>
          <FeaturedProjects />
          <WorkExperience />
          <Education />
          <Languages />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
