const SocialMediaLink = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-white"
  >
    <Icon />
  </a>
);

export default SocialMediaLink;
