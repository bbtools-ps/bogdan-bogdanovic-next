import Image from "next/image";
import React from "react";
import { imageLoader } from "../../common/functions/imageLoader";

interface ProjectImageProps {
  url?: string;
  src: string;
  alt: string;
  index: number;
}

const ProjectImage: React.FC<ProjectImageProps> = ({
  url,
  src,
  alt,
  index,
}) => {
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
        priority={index === 0 ? true : false}
      />
    </a>
  );
};

export default ProjectImage;
