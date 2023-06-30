import { faCode, faEye, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button as NextUIButton } from "@nextui-org/react";
import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  url: string;
  icon?: "info" | "source" | "live";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ url, icon, children }) => {
  const buttonIcon = {
    source: faCode,
    live: faEye,
    info: faInfoCircle
  };

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <NextUIButton onPress={() => openInNewTab(url)} className={styles.button} ghost auto>
      {icon && buttonIcon[icon] && (
        <FontAwesomeIcon icon={buttonIcon[icon]} data-testid={`${icon}-icon`} />
      )}
      {children}
    </NextUIButton>
  );
};

export default Button;
