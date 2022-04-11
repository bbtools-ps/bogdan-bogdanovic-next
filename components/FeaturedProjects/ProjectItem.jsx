import ExternalLink from "../ExternalLink";
import Button from "../UI/Buttons/Button";
import UnorderedList from "../UI/Lists/UnorderedList";
import ProjectImage from "./ProjectImage";

const ProjectItem = ({
  title,
  urls,
  imageSrc,
  descriptionText,
  technologiesUsed,
  buttonTypes,
}) => {
  return (
    <section className="project-item">
      <h3>{urls.main && <ExternalLink url={urls.main} text={title} />}</h3>
      <ProjectImage url={urls.main} src={imageSrc} alt={title} />
      <div className="project-description">
        <p>{descriptionText}</p>
        <UnorderedList list={technologiesUsed} />
        {urls.source && buttonTypes.source && (
          <Button url={urls.source} type="source" />
        )}
        {urls.main && buttonTypes.live && (
          <Button url={urls.main} type="live" />
        )}
        {urls.main && buttonTypes.info && (
          <Button url={urls.main} type="info" />
        )}
      </div>
    </section>
  );
};

export default ProjectItem;
