import { Trans, useTranslation } from "next-i18next";
import { ProjectData } from "../../common/models/Data";
import SectionContent from "../Layout/Section/SectionContent";
import LinkText from "../UI/LinkText";
import Projects from "./Projects";

interface FeaturedProjectsProps {
  data: ProjectData["documents"];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ data: projects }) => {
  const { t } = useTranslation();

  return (
    <section className="projects">
      <div className="content-wrap">
        <h2>{t("home:FeaturedProjectsTitle_Label")}</h2>
        <p>
          <Trans
            i18nKey={t("home:FeaturedProjectsDescription_Label")}
            components={{
              link1: <LinkText href="https://github.com/bbtools-ps/">Github</LinkText>,
              link2: <LinkText href={"https://www.behance.net/bogdanbogdanovic"}>Behance</LinkText>
            }}
          />
        </p>
        <SectionContent data={projects} noResultsMessage={t("home:FeaturedProjectsNone_Label")}>
          <Projects projects={projects} />
        </SectionContent>
      </div>
    </section>
  );
};

export default FeaturedProjects;
