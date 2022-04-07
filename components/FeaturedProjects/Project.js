import Image from "next/image";
import ExternalLink from "../ExternalLink";
import Button from "../UI/Buttons/Button";

const FeaturedProjectItem = ({
  title,
  urls,
  imageSrc,
  descriptionText,
  technologiesUsed,
  buttonTypes,
}) => {
  return (
    <section className="project-item">
      <h3>
        <ExternalLink url={urls.main} text={title} />
      </h3>
      <Image
        src={imageSrc}
        alt={title}
        layout="responsive"
        width={700}
        height={548}
      />
      <div className="project-description">
        <p>{descriptionText}</p>
        {technologiesUsed.length && (
          <>
            <p>Technologies used:</p>
            <ul>
              {technologiesUsed.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}
        {urls.source && buttonTypes.source && (
          <Button url={urls.source} type="source" />
        )}
        {buttonTypes.live && !buttonTypes.info && (
          <Button url={urls.main} type="live" />
        )}
        {buttonTypes.info && !buttonTypes.live && (
          <Button url={urls.main} type="info" />
        )}
      </div>
    </section>
  );
};

export default FeaturedProjectItem;
