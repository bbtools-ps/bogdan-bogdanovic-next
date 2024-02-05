import { IStringValue } from "@/models";
import { useTranslation } from "next-i18next";
import ButtonLink from "../UI/ButtonLink/ButtonLink";
import ExternalLink from "../UI/ExternalLink/ExternalLink";
import ProjectImage from "./ProjectImage";
import styles from "./ProjectItem.module.css";

interface IProps {
  title: string;
  description: string;
  technologies?: IStringValue[];
  equipment?: IStringValue[];
  infoLink?: string;
  liveLink?: string;
  sourceLink?: string;
  imageSrc: string;
}

export default function ProjectItem({
  title,
  description,
  imageSrc,
  equipment,
  infoLink,
  liveLink,
  sourceLink,
  technologies
}: IProps) {
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
            <ButtonLink url={sourceLink} icon="source">
              SOURCE
            </ButtonLink>
          )}
          {liveLink && (
            <ButtonLink url={liveLink} icon="live">
              LIVE
            </ButtonLink>
          )}
          {infoLink && (
            <ButtonLink url={infoLink} icon="info">
              INFO
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  );
}
