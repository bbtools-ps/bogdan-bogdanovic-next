import { Link, Loading } from "@nextui-org/react";
import { Trans } from "next-i18next";
import useFetch from "../../common/hooks/use-fetch";
import { Project } from "../../common/models/Project";
import ProjectItem from "./ProjectItem";

interface FeaturedProjectsProps {
  projects: Project[];
  title: string;
  description: string;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  title,
  description,
  projects,
}) => {
  const { data, loading, error } = useFetch("https://localhost:4000");
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
          projects.length &&
          projects.map((project: Project, projectIndex: number) => (
            <ProjectItem
              key={projectIndex}
              title={project.title}
              urls={project.urls}
              imageSrc={project.imageSrc}
              descriptionText={project.descriptionText}
              technologiesUsed={project.technologiesUsed}
              buttonVariants={project.buttonVariants}
            />
          ))}
        {!loading && !projects.length && <p>No projects.</p>}
        {/* State: failed */}
        {error && <p>Error loading projects.</p>}
      </div>
    </section>
  );
};

export default FeaturedProjects;
