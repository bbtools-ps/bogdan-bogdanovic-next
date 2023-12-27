import {
  faBehance,
  faFacebook,
  faGithub,
  faLinkedin,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExternalLink, { IExternalLinkProps } from "../ExternalLink/ExternalLink";
import classes from "./SociallLink.module.scss";

const linkIcons = {
  behance: faBehance,
  facebook: faFacebook,
  github: faGithub,
  linkedin: faLinkedin,
  youtube: faYoutube
};

interface ISocialLinkProps extends IExternalLinkProps {
  icon: keyof typeof linkIcons;
}

export default function SocialLink({ children, href, icon }: ISocialLinkProps) {
  const linkIcon = linkIcons[icon];

  return (
    <ExternalLink
      href={href}
      aria-label={!children ? icon : undefined}
      className={classes["social-link"]}
    >
      {<FontAwesomeIcon icon={linkIcon} data-testid={`${icon}-icon`} />}
      {children}
    </ExternalLink>
  );
}
