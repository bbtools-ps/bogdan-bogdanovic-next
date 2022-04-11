import Image from "next/image";

const ProjectImage = ({ url, src, alt }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        objectFit="contain"
        width={700}
        height={548}
      />
    </a>
  );
};

export default ProjectImage;
