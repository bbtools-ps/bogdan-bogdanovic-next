import { ProjectData } from "@/common/models/Data";
import SectionContent from "@/layout/Section/SectionContent";
import { Trans, useTranslation } from "next-i18next";
import ExternalLink from "../UI/ExternalLink/ExternalLink";
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
              link1: <ExternalLink href="https://github.com/bbtools-ps/">Github</ExternalLink>,
              link2: (
                <ExternalLink href={"https://www.behance.net/bogdanbogdanovic"}>
                  Behance
                </ExternalLink>
              )
            }}
          />
        </p>
        <SectionContent data={projects} noResultsMessage={t("home:FeaturedProjectsNone_Label")}>
          <Projects data={projects} />
        </SectionContent>
      </div>
    </section>
  );
};

export default FeaturedProjects;
