import { faCode, faEye, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@nextui-org/react";
import React from "react";
import styles from "./ButtonLink.module.scss";

interface IButtonLinkProps {
  url: string;
  icon?: "info" | "source" | "live";
  children: React.ReactNode;
}

const ButtonLink: React.FC<IButtonLinkProps> = ({ url, icon, children }) => {
  const buttonIcon = {
    source: faCode,
    live: faEye,
    info: faInfoCircle
  };

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" className={styles.button}>
      {icon && buttonIcon[icon] && (
        <FontAwesomeIcon icon={buttonIcon[icon]} data-testid={`${icon}-icon`} />
      )}
      {children}
    </Link>
  );
};

export default ButtonLink;
