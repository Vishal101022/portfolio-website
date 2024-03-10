import Link from "next/link";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon }) => (
  <span>
    <Link href={href} target="_blank">
      <Icon />
    </Link>
  </span>
);

interface SocialLinksProps {
  socialLinks: {
    linkedin: string;
    github: string;
    twitter: string;
  };
}

const SocialLinks: React.FC<SocialLinksProps> = ({ socialLinks }) => (
  <div className="flex flex-wrap gap-3 text-2xl py-2">
    <SocialLink href={socialLinks.linkedin} icon={FiLinkedin} />
    <SocialLink href={socialLinks.github} icon={FiGithub} />
    <SocialLink href={socialLinks.twitter} icon={BsTwitterX} />
  </div>
);

export default SocialLinks;
