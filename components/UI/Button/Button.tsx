import { faCode, faEye, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  url: string;
  variant: "info" | "source" | "live";
}

const Button: React.FC<ButtonProps> = ({ url, variant = "info" }) => {
  const handleBtnIcon = (icon: string) => {
    switch (icon) {
      case "source":
        return (
          <>
            <FontAwesomeIcon icon={faCode} /> Source
          </>
        );
      case "live":
        return (
          <>
            <FontAwesomeIcon icon={faEye} /> Live
          </>
        );
      default:
        return (
          <>
            <FontAwesomeIcon icon={faInfoCircle} /> Info
          </>
        );
    }
  };

  return (
    <a href={url} target="_blank" className={styles.btn} rel="noreferrer">
      {handleBtnIcon(variant)}
    </a>
  );
};

export default Button;
