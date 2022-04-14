import React from "react";
import Project from "../../models/project";
import ExternalLink from "../ExternalLink";
import Button from "../UI/Button/Button";
import UnorderedList from "../UI/Lists/UnorderedList";
import ProjectImage from "./ProjectImage";

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
      <h3>{urls.main && <ExternalLink url={urls.main} text={title} />}</h3>
      <ProjectImage url={urls.main} src={imageSrc} alt={title} />
      <div className="project-description">
        <p>{descriptionText}</p>
        <UnorderedList list={technologiesUsed} />
        {urls.source && <Button url={urls.source} variant="source" />}
        {urls.main && buttonVariants.live && (
          <Button url={urls.main} variant="live" />
        )}
        {urls.main && buttonVariants.info && (
          <Button url={urls.main} variant="info" />
        )}
      </div>
    </section>
  );
};

export default ProjectItem;
