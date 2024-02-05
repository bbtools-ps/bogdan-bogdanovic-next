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

const LINK_ICONS = {
  behance: faBehance,
  facebook: faFacebook,
  github: faGithub,
  linkedin: faLinkedin,
  youtube: faYoutube
};

interface IProps extends IExternalLinkProps {
  icon: keyof typeof LINK_ICONS;
}

export default function SocialLink({ children, href, icon }: IProps) {
  const linkIcon = LINK_ICONS[icon];

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
