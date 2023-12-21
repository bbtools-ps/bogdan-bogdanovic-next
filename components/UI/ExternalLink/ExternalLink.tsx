import { Link, LinkProps } from "@nextui-org/react";

export interface IExternalLinkProps extends LinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
}

const ExternalLink: React.FC<IExternalLinkProps> = ({ href, children, className, ...rest }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
      {children}
    </Link>
  );
};

export default ExternalLink;
