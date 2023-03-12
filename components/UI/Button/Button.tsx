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
  let btnIcon = null;

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  switch (type) {
    case "source":
      btnIcon = <FontAwesomeIcon icon={faCode} />;
      break;
    case "live":
      btnIcon = <FontAwesomeIcon icon={faEye} />;
      break;
    case "info":
      btnIcon = <FontAwesomeIcon icon={faInfoCircle} />;
      break;
    default:
      break;
  }

  return (
    <NextUIButton onPress={() => openInNewTab(url)} className={styles.button} ghost auto>
      {btnIcon}
      {children}
    </NextUIButton>
  );
};

export default Button;
