import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@nextui-org/react";
import classes from "./EmailLink.module.scss";

interface IEmailLinkProps {
  children?: React.ReactNode;
  email: string;
  withIcon?: boolean;
}

export default function EmailLink({ email, children, withIcon = false }: IEmailLinkProps) {
  return (
    <Link
      href={`mailto:${email}`}
      target="_top"
      rel="noopener noreferrer"
      className={withIcon ? classes["email-link"] : undefined}
    >
      {withIcon && <FontAwesomeIcon icon={faEnvelope} data-testid="email-icon" />}
      {children}
    </Link>
  );
}
