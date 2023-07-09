import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBehance,
  faFacebook,
  faGithub,
  faLinkedin,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExternalLink, { IExternalLinkProps } from "../ExternalLink/ExternalLink";
import classes from "./SocailLink.module.scss";

interface ISocialLinkProps extends IExternalLinkProps {
  icon: "behance" | "facebook" | "github" | "linkedin" | "youtube";
}

const SocialLink: React.FC<ISocialLinkProps> = ({ children, href, icon }) => {
  const linkIcon: { [key in typeof icon]: IconDefinition } = {
    behance: faBehance,
    facebook: faFacebook,
    github: faGithub,
    linkedin: faLinkedin,
    youtube: faYoutube
  };

  return (
    <ExternalLink
      href={href}
      aria-label={!children ? icon : undefined}
      className={classes["social-link"]}
    >
      {<FontAwesomeIcon icon={linkIcon[icon]} data-testid={`${icon}-icon`} />}
      {children}
    </ExternalLink>
  );
};

export default SocialLink;
