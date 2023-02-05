import Image from "next/image";
import React from "react";
import { imageLoader } from "../../common/functions/imageLoader";

interface ProjectImageProps {
  url?: string;
  src: string;
  alt: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ url, src, alt }) => {
  return (
    <a href={url ? url : "#"} target="_blank" rel="noopener noreferrer">
      <Image
        loader={imageLoader}
        src={src}
        alt={alt}
        layout="responsive"
        objectFit="contain"
        width={700}
        height={548}
        priority={true}
      />
    </a>
  );
};

export default ProjectImage;
