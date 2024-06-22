import SocialMediaLink from "./SocialMediaLink";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const SocialMediaButtons = ({ className }) => (
  <div className={`flex space-x-2 ${className}`}>
    <SocialMediaLink href="https://facebook.com" icon={FaFacebookF} />
    <SocialMediaLink href="https://twitter.com" icon={FaXTwitter} />
    <SocialMediaLink href="https://linkedin.com" icon={FaLinkedinIn} />
  </div>
);

export default SocialMediaButtons;
