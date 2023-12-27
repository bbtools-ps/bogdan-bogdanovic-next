import { Link, LinkProps } from "@nextui-org/react";

export interface IExternalLinkProps extends LinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
}

export default function ExternalLink({ href, children, className, ...rest }: IExternalLinkProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
      {children}
    </Link>
  );
}
