import { theme } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

interface IProjectImageProps {
  url?: string;
  src: string;
  alt: string;
}

export default function ProjectImage({ url, src, alt }: IProjectImageProps) {
  return (
    <Link href={url || "#"} target="_blank" rel="noopener noreferrer" style={{ maxWidth: "350px" }}>
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
}
