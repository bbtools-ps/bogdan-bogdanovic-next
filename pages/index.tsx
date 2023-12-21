import Education from "@/components/Education/Education";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Introduction from "@/components/Introduction/Introduction";
import Languages from "@/components/Languages/Languages";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import { DATABASE_PATH } from "@/constants";
import { IEducationData, ILanguageData, IProjectData, IWorkExperienceData } from "@/models";
import { sortDataCreateTime } from "@/utils";
import axios from "axios";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  const projectsData = await axios.get<IProjectData>(
    `${DATABASE_PATH}/projects${locale === "en" ? "" : "-" + locale}`
  );
  const workExperienceData = await axios.get<IWorkExperienceData>(
    `${DATABASE_PATH}/work-experience${locale === "en" ? "" : "-" + locale}`
  );
  const educationData = await axios.get<IEducationData>(
    `${DATABASE_PATH}/education${locale === "en" ? "" : "-" + locale}`
  );
  const languagesData = await axios.get<ILanguageData>(
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

interface IHomeProps {
  projects: IProjectData["documents"];
  workExperience: IWorkExperienceData["documents"];
  education: IEducationData["documents"];
  languages: ILanguageData["documents"];
}

const Home: React.FC<IHomeProps> = ({ projects, workExperience, education, languages }) => {
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
