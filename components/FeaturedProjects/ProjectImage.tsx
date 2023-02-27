import Image from "next/image";
import React, { useState } from "react";
import { imageLoader } from "../../common/functions/imageLoader";

interface ProjectImageProps {
  url?: string;
  src: string;
  fallbackSrc: string;
  alt: string;
  index: number;
}

const ProjectImage: React.FC<ProjectImageProps> = ({
  url,
  src,
  fallbackSrc,
  alt,
  index
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <a href={url ? url : "#"} target="_blank" rel="noopener noreferrer">
      <Image
        loader={imageLoader}
        src={imgSrc}
        alt={alt}
        width={700}
        height={548}
        priority={index === 0 ? true : false}
        onError={() => setImgSrc(fallbackSrc)}
      />
    </a>
  );
};

export default ProjectImage;
