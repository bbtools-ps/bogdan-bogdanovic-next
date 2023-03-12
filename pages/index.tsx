import { useTheme } from "@nextui-org/react";
import axios from "axios";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DATABASE_PATH } from "../common/constants/constants";
import { sortData } from "../common/functions/utils";
import {
  EducationData,
  LanguageData,
  ProjectData,
  WorkExperienceData
} from "../common/models/Data";
import Education from "../components/Education/Education";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import Languages from "../components/Languages/Languages";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import WorkExperience from "../components/WorkExperience/WorkExperience";

export async function getStaticProps({ locale }: { locale: string }) {
  const projectsData = await axios.get<ProjectData>(
    `${DATABASE_PATH}/projects${locale === "en" ? "" : "-" + locale}`
  );
  const workExperienceData = await axios.get<WorkExperienceData>(
    `${DATABASE_PATH}/work-experience${locale === "en" ? "" : "-" + locale}`
  );
  const educationData = await axios.get<EducationData>(
    `${DATABASE_PATH}/education${locale === "en" ? "" : "-" + locale}`
  );
  const languagesData = await axios.get<LanguageData>(
    `${DATABASE_PATH}/languages${locale === "en" ? "" : "-" + locale}`
  );

  return {
    props: {
      projects: sortData(projectsData.data.documents),
      workExperience: sortData(workExperienceData.data.documents),
      education: sortData(educationData.data.documents),
      languages: sortData(languagesData.data.documents, "ASC"),
      ...(await serverSideTranslations(locale, ["home", "common"]))
    }
  };
}

interface HomeProps {
  projects: ProjectData["documents"];
  workExperience: WorkExperienceData["documents"];
  education: EducationData["documents"];
  languages: LanguageData["documents"];
}

const Home: React.FC<HomeProps> = ({ projects, workExperience, education, languages }) => {
  const { isDark } = useTheme();

  return (
    <div
      className="wrapper"
      style={{
        backgroundColor: isDark ? "hsla(210, 50%, 15%, 0.8)" : "hsla(210, 5%, 100%, 0.82)"
      }}
    >
      <Header />
      <main>
        <FeaturedProjects data={projects} />
        <WorkExperience data={workExperience} />
        <Education data={education} />
        <Languages data={languages} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
