import { StringValue } from "@/common/models/FirebaseValues";
import { useTranslation } from "next-i18next";
import React from "react";
import Button from "../Button/Button";
import ExternalLink from "../ExternalLink/ExternalLink";
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
  technologies
}) => {
  const { t } = useTranslation();
  return (
    <section className="project-item" data-testid="project">
      <h3>
        <ExternalLink href={infoLink || liveLink}>{title}</ExternalLink>
      </h3>
      <ProjectImage url={infoLink || liveLink} src={imageSrc} alt={title} />
      <div className="project-description">
        <p>{description}</p>
        <p>
          {technologies
            ? t("home:ProjectTechnologiesUsed_Label")
            : t("home:ProjectEquipmentUsed_Label")}
        </p>
        <ul>
          {technologies &&
            technologies.map((item) => <li key={item.stringValue}>{item.stringValue}</li>)}
          {equipment && equipment.map((item) => <li key={item.stringValue}>{item.stringValue}</li>)}
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
