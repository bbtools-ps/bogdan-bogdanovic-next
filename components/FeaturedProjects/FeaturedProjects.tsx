import { Link } from "@nextui-org/react";
import { Project } from "../../common/models/Project";
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
          <Link
            href="https://github.com/bbtools-ps/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>{" "}
          and
          <Link
            href="https://www.behance.net/bogdanbogdanovic"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </Link>
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
