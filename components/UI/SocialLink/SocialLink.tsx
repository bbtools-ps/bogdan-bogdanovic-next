import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBehance,
  faFacebook,
  faGithub,
  faLinkedin,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExternalLink, { ExternalLinkProps } from "../ExternalLink/ExternalLink";

interface SocialLinkProps extends ExternalLinkProps {
  type: "behance" | "facebook" | "github" | "linkedin" | "youtube";
}

const SocialLink: React.FC<SocialLinkProps> = ({ children, href, type }) => {
  let icon: IconProp;

  switch (type) {
    case "behance":
      icon = faBehance;
      break;
    case "facebook":
      icon = faFacebook;
      break;
    case "github":
      icon = faGithub;
      break;
    case "linkedin":
      icon = faLinkedin;
      break;
    case "youtube":
      icon = faYoutube;
      break;

    default:
      break;
  }

  return (
    <ExternalLink href={href}>
      <FontAwesomeIcon icon={icon} data-testid={`${type}-icon`} />
      {children}
    </ExternalLink>
  );
};

export default SocialLink;
