import Image from "next/image";
import React from "react";

interface ProjectImageProps {
  url: string;
  src: string;
  alt: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ url, src, alt }) => {
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
