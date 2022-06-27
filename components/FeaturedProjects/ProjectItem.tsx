import { Link } from "@nextui-org/react";
import React from "react";
import { StringValue } from "../../common/models/StringValue";
import Button from "../UI/Button/Button";
import ProjectImage from "./ProjectImage";
import styles from "./ProjectItem.module.css";

interface ProjectItemProps {
  title: string;
  description: string;
  technologies?: StringValue[];
  equipment?: StringValue[];
  infoLink?: string;
  liveLink?: string;
  sourceLink?: string;
  imageSrc: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  imageSrc,
  equipment,
  infoLink,
  liveLink,
  sourceLink,
  technologies,
}) => {
  return (
    <section className="project-item">
      <h3>
        {infoLink ? (
          <Link href={infoLink} target="_blank" rel="noopener noreferrer">
            {title}
          </Link>
        ) : (
          <Link href={liveLink} target="_blank" rel="noopener noreferrer">
            {title}
          </Link>
        )}
      </h3>
      <ProjectImage
        url={infoLink ? infoLink : liveLink}
        src={imageSrc}
        alt={title}
      />
      <div className="project-description">
        <p>{description}</p>
        <p>{technologies ? "Technologies used:" : "Equipment used:"}</p>
        <ul style={{ listStyleType: "disc" }}>
          {technologies &&
            technologies.map((item) => (
              <li key={item.stringValue}>{item.stringValue}</li>
            ))}
          {equipment &&
            equipment.map((item) => (
              <li key={item.stringValue}>{item.stringValue}</li>
            ))}
        </ul>
        <div className={styles["external-buttons"]}>
          {sourceLink && (
            <Button url={sourceLink} type="source">
              Source
            </Button>
          )}
          {liveLink && (
            <Button url={liveLink} type="live">
              Live
            </Button>
          )}
          {infoLink && (
            <Button url={infoLink} type="info">
              Info
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectItem;
