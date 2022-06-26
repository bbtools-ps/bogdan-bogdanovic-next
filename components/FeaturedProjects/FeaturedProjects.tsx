import { Link, Loading } from "@nextui-org/react";
import { Trans } from "next-i18next";
import useFetch from "../../common/hooks/use-fetch";
import ProjectItem from "./ProjectItem";

interface FeaturedProjectsProps {
  title: string;
  description: string;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  title,
  description,
}) => {
  const {
    data: projects,
    loading,
    error,
  } = useFetch(
    "https://firestore.googleapis.com/v1/projects/bogdan-bogdanovic/databases/(default)/documents/projects"
  );
  if (projects) console.log(projects.documents);
  return (
    <section className="projects">
      <div className="content-wrap">
        <h2>{title}</h2>
        <p>
          <Trans
            i18nKey={description}
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
          projects &&
          projects.documents.map((project) => (
            <ProjectItem
              key={project.name}
              title={project.fields.title.stringValue}
              imageSrc={project.fields.imageName.stringValue}
              description={project.fields.description.stringValue}
              technologies={project.fields.technologies?.arrayValue.values}
              equipment={project.fields.equipment?.arrayValue.values}
              infoLink={project.fields.infoLink?.stringValue}
              sourceLink={project.fields.sourceLink?.stringValue}
              liveLink={project.fields.liveLink?.stringValue}
            />
          ))}
        {!loading && projects && !projects.documents.length && (
          <p>No projects.</p>
        )}
        {/* State: failed */}
        {error && <p>Error loading projects.</p>}
      </div>
    </section>
  );
};

export default FeaturedProjects;
