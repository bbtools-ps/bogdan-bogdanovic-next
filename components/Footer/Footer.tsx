import {
  faBehance,
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import React from "react";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="content-wrap">
        <h2>{t("common:FooterTitle_Label")}</h2>
        <Link
          href="mailto:bogdi.mail@gmail.com"
          target="_top"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          bogdi.mail@gmail.com
        </Link>
        <ul>
          <li>
            <Link
              href="https://github.com/bbtools-ps/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              Github
            </Link>
          </li>
          <li>
            <Link
              href="https://www.behance.net/bogdanbogdanovic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faBehance} />
              Behance
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/bogdanbogdanovic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              Linkedin
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/user/bogdimail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
              Youtube
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
