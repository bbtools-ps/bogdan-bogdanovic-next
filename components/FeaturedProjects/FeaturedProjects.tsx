import { Link, Loading } from "@nextui-org/react";
import { Trans, useTranslation } from "next-i18next";
import { DATABASE_PATH } from "../../common/constants/constants";
import useFetch from "../../common/hooks/use-fetch";
import { ProjectData } from "../../common/models/Data";
import ProjectItem from "./ProjectItem";

const FeaturedProjects = () => {
  const { t } = useTranslation();
  const {
    data: projects,
    loading,
    error,
  } = useFetch<ProjectData | null>(`${DATABASE_PATH}/projects`, null);
  return (
    <section className="projects">
      <div className="content-wrap">
        <h2>{t("home:FeaturedProjectsTitle_Label")}</h2>
        <p>
          <Trans
            i18nKey={t("home:FeaturedProjectsDescription_Label")}
            components={{
              link1: (
                <Link
                  href={"https://github.com/bbtools-ps/"}
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                  block
                />
              ),
              link2: (
                <Link
                  href={"https://www.behance.net/bogdanbogdanovic"}
                  title="Behance"
                  target="_blank"
                  rel="noopener noreferrer"
                  block
                />
              ),
            }}
          />
        </p>
        {/* State: pending */}
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loading />
          </div>
        )}
        {/* State: succeeded */}
        {!loading &&
          projects?.documents?.length &&
          projects.documents
            .sort(
              (a, b) =>
                new Date(b.createTime).getTime() -
                new Date(a.createTime).getTime()
            )
            .map((item) => (
              <ProjectItem
                key={item.name}
                title={item.fields.title.stringValue}
                imageSrc={item.fields.imageName.stringValue}
                description={item.fields.description.stringValue}
                technologies={item.fields.technologies?.arrayValue.values}
                equipment={item.fields.equipment?.arrayValue.values}
                infoLink={item.fields.infoLink?.stringValue}
                sourceLink={item.fields.sourceLink?.stringValue}
                liveLink={item.fields.liveLink?.stringValue}
              />
            ))}
        {/* State: none */}
        {!loading && !projects?.documents?.length && (
          <p>{t("home:FeaturedProjectsNone_Label")}</p>
        )}
        {/* State: failed */}
        {error && <p>{t("home:FeaturedProjectsError_Label")}</p>}
      </div>
    </section>
  );
};

export default FeaturedProjects;
