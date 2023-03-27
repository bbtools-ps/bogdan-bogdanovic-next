import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@nextui-org/react";
import classes from "./EmailLink.module.scss";

interface EmailLinkProps {
  children?: React.ReactNode;
  email: string;
  withIcon?: boolean;
}

const EmailLink: React.FC<EmailLinkProps> = ({ email, children, withIcon = false }) => {
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
};

export default EmailLink;
