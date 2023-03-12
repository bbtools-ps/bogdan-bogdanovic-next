import Image from "next/image";
import React from "react";

interface ProjectImageProps {
  url?: string;
  src: string;
  alt: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ url, src, alt }) => {
  return (
    <a href={url ? url : "#"} target="_blank" rel="noopener noreferrer">
      <Image
        src={`https://firebasestorage.googleapis.com/v0/b/bogdan-bogdanovic.appspot.com/o/${src}`}
        alt={alt}
        width={350}
        height={274}
      />
    </a>
  );
};

export default ProjectImage;
