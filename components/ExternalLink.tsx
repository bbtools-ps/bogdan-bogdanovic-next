import React from "react";

interface ExternalLinkProps {
  url: string;
  text: string;
  children?: React.ReactChild;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ url, text, children }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {text ? text : children}
    </a>
  );
};

export default ExternalLink;
