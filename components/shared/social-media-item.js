import {
  FaTwitter,
  FaTelegramPlane,
  FaRedditAlien,
  FaLinkedin,
} from "react-icons/fa";
import { BsMedium, BsTelegram } from "react-icons/bs";

const SocialMediaItem = ({ url, platform }) => {
  let icon;

  switch (platform) {
    case "Telegram (circle)":
      icon = <BsTelegram />;
      break;
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
      title={`Go to website`}
    >
      {icon}
    </a>
  );
};

export default SocialMediaItem;
