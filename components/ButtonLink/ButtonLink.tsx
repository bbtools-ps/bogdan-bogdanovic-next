import { faCode, faEye, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import Link from "next/link";
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
    <Button
      className={styles.button}
      ghost
      auto
      as={Link}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon && buttonIcon[icon] && (
        <FontAwesomeIcon icon={buttonIcon[icon]} data-testid={`${icon}-icon`} />
      )}
      {children}
    </Button>
  );
};

export default ButtonLink;
