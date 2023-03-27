import Link from "next/link";

export interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children?: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, ...rest }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </Link>
  );
};

export default ExternalLink;
