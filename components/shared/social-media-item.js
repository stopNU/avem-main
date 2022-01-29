import {
  FaTwitter,
  FaTelegramPlane,
  FaRedditAlien,
  FaLinkedin,
} from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

const SocialMediaItem = ({ url, platform }) => {
  let icon;

  switch (platform) {
    case "Telegram":
      icon = <FaTelegramPlane />;
      break;
    case "Twitter":
      icon = <FaTwitter />;
      break;
    case "Medium":
      icon = <BsMedium />;
      break;
    case "Reddit":
      icon = <FaRedditAlien />;
      break;
    case "LinkedIn":
      icon = <FaLinkedin />;
      break;
    default:
      icon = "";
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      title={`Go to ${platform}`}
    >
      {icon}
    </a>
  );
};

export default SocialMediaItem;
