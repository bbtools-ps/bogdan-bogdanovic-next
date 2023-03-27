import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCode, faEye, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button as NextUIButton } from "@nextui-org/react";
import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  url: string;
  type?: "info" | "source" | "live";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ url, type, children }) => {
  let icon: IconProp;

  switch (type) {
    case "source":
      icon = faCode;
      break;
    case "live":
      icon = faEye;
      break;
    case "info":
      icon = faInfoCircle;
      break;
    default:
      break;
  }

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <NextUIButton onPress={() => openInNewTab(url)} className={styles.button} ghost auto>
      {type && <FontAwesomeIcon icon={icon} data-testid={`${type}-icon`} />}
      {children}
    </NextUIButton>
  );
};

export default Button;
