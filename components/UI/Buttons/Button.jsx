import { faCode, faEye, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Button.module.css";

const Button = ({ url, type }) => {
  const handleBtnIcon = (icon) => {
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
      {handleBtnIcon(type)}
    </a>
  );
};

export default Button;
