import { Link } from "@nextui-org/react";
import React from "react";
import { Project } from "../../common/models/Project";
import Button from "../UI/Button/Button";
import UnorderedList from "../UI/Lists/UnorderedList";
import ProjectImage from "./ProjectImage";
import styles from "./ProjectItem.module.css";

const ProjectItem: React.FC<Project> = ({
  title,
  urls,
  imageSrc,
  descriptionText,
  technologiesUsed,
  buttonVariants,
}) => {
  return (
    <section className="project-item">
      <h3>
        {urls.main && (
          <Link href={urls.main} target="_blank" rel="noopener noreferrer">
            {title}
          </Link>
        )}
      </h3>
      <ProjectImage url={urls.main} src={imageSrc} alt={title} />
      <div className="project-description">
        <p>{descriptionText}</p>
        <UnorderedList list={technologiesUsed} />
        <div className={styles["external-buttons"]}>
          {urls.source && (
            <Button url={urls.source} type="source">
              Source
            </Button>
          )}
          {urls.main && buttonVariants.live && (
            <Button url={urls.main} type="live">
              Live
            </Button>
          )}
          {urls.main && buttonVariants.info && (
            <Button url={urls.main} type="info">
              Info
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectItem;
