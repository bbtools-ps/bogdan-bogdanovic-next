import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@nextui-org/react";
import { Trans, useTranslation } from "next-i18next";
import React from "react";
import ExternalLink from "../../UI/ExternalLink/ExternalLink";
import SocialLink from "../../UI/SocialLink/SocialLink";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="content-wrap">
        <h2>{t("common:FooterTitle_Label")}</h2>
        <Link href="mailto:bogdi.mail@gmail.com" target="_top" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
          bogdi.mail@gmail.com
        </Link>
        <ul>
          <li>
            <SocialLink type="github" href="https://github.com/bbtools-ps/">
              Github
            </SocialLink>
          </li>
          <li>
            <SocialLink type="behance" href="https://www.behance.net/bogdanbogdanovic">
              Behance
            </SocialLink>
          </li>
          <li>
            <SocialLink type="linkedin" href="https://www.linkedin.com/in/bogdanbogdanovic">
              Linkedin
            </SocialLink>
          </li>
          <li>
            <SocialLink type="youtube" href="https://www.youtube.com/user/bogdimail">
              Youtube
            </SocialLink>
          </li>
        </ul>
        <p style={{ textAlign: "center" }}>{t("common:FooterDescription1_Label")}</p>
        <p style={{ textAlign: "center" }}>
          <Trans
            i18nKey={t("common:FooterDescription2_Label")}
            components={{
              link1: <ExternalLink href="https://github.com/bbtools-ps/bogdan-bogdanovic-website" />
            }}
          />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
