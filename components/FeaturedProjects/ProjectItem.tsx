import { Link } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import React from "react";
import { StringValue } from "../../common/models/FirebaseValues";
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
  index: number;
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
  index
}) => {
  const { t } = useTranslation();
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
        <p>
          {technologies
            ? t("home:ProjectTechnologiesUsed_Label")
            : t("home:ProjectEquipmentUsed_Label")}
        </p>
        <ul>
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
