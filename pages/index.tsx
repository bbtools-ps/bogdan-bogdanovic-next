import { DATABASE_PATH } from "@/common/constants/constants";
import { sortDataCreateTime } from "@/common/functions/utils";
import { EducationData, LanguageData, ProjectData, WorkExperienceData } from "@/common/models/Data";
import Education from "@/components/Education/Education";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Introduction from "@/components/Introduction/Introduction";
import Languages from "@/components/Languages/Languages";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import axios from "axios";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
      projects: sortDataCreateTime(projectsData.data.documents),
      workExperience: sortDataCreateTime(workExperienceData.data.documents),
      education: sortDataCreateTime(educationData.data.documents),
      languages: sortDataCreateTime(languagesData.data.documents, "ASC"),
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
  return (
    <>
      <Introduction />
      <FeaturedProjects data={projects} />
      <WorkExperience data={workExperience} />
      <Education data={education} />
      <Languages data={languages} />
    </>
  );
};

export default Home;
