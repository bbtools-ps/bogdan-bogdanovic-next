import { Link } from "@nextui-org/react";
import React from "react";

interface ExternalLinkProps {
  url: string;
  text: string;
  children?: React.ReactChild;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ url, text, children }) => {
  return (
    <Link href={url} target="_blank" rel="noreferrer">
      {text ? text : children}
    </Link>
  );
};

export default ExternalLink;
