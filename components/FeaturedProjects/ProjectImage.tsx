import { theme } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectImageProps {
  url?: string;
  src: string;
  alt: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ url, src, alt }) => {
  return (
    <Link href={url || "#"} target="_blank" rel="noopener noreferrer" style={{ width: "350px" }}>
      <Image
        src={`https://firebasestorage.googleapis.com/v0/b/bogdan-bogdanovic.appspot.com/o/${src}`}
        alt={alt}
        width={350}
        height={274}
        style={{
          border: `2px solid ${theme.colors.neutral}`,
          borderRadius: "0.5rem"
        }}
      />
    </Link>
  );
};

export default ProjectImage;
