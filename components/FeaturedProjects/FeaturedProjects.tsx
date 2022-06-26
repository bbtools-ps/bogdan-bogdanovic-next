import { Project } from "../../common/models/Project";
import ExternalLink from "../ExternalLink";
import ProjectItem from "./ProjectItem";

interface FeaturedProjectsProps {
  projects: Project[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  return (
    <section className="projects">
      <div className="content-wrap">
        <h2>Featured Projects</h2>
        <p>
          Check out my{" "}
          <ExternalLink url="https://github.com/bbtools-ps/" text="Github" />{" "}
          and{" "}
          <ExternalLink
            url="https://www.behance.net/bogdanbogdanovic"
            text="Behance"
          />{" "}
          for more projects.
        </p>
        {projects.length ? (
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
          ))
        ) : (
          <p>No projects to display.</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
