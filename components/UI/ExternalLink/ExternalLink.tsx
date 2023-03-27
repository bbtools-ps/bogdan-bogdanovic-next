import Link from "next/link";

export interface ExternalLinkProps {
  href: string;
  children?: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
};

export default ExternalLink;
