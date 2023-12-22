import Section from "@/app/components/Section";
import { FaFacebook, FaInstagram, FaSpotify } from "react-icons/fa";
import { MdFileDownload, MdLanguage } from "react-icons/md";
import { GoMail } from "react-icons/go";

function Link({
  href,
  icon,
  copy,
}: {
  href: string;
  icon: React.ReactNode;
  copy: string;
}) {
  return (
    <a className="flex gap-2 hover:animate-pulse" target="_blank" href={href}>
      {icon}
      <p>{copy}</p>
    </a>
  );
}

const mediaLinks = [
  {
    href: "https://www.instagram.com/sasha.bayan",
    icon: <FaSpotify className="text-2xl" />,
    copy: "Sasha Bayan",
  },
  {
    href: "https://www.instagram.com/sasha.bayan",
    icon: <FaInstagram className="text-2xl" />,
    copy: "@sasha.bayan",
  },
  {
    href: "https://www.facebook.com/sashabayanmusic/",
    icon: <FaFacebook className="text-2xl" />,
    copy: "sashabayanmusic",
  },
  {
    href: "https://www.sashabayan.com",
    icon: <MdLanguage className="text-2xl" />,
    copy: "sashabayan.com",
  },
  {
    href: "https://www.dropbox.com/scl/fo/aigzqwzhzu3go0i1wiyhn/h?rlkey=smsi7biu8crfiezq6k2bi3v6y&dl=0",
    icon: <MdFileDownload className="text-2xl" />,
    copy: "Download Press Photos",
  },
];

const contactLinks = [
  {
    href: "mailto:booking@sashabayan.com",
    icon: <GoMail className="text-2xl" />,
    copy: "booking@sashabayan.com",
  },
];

const rightContent = (
  <div className="flex h-full flex-col items-center justify-center gap-3 sm:w-1/2">
    <h1 className="font-glosa-display text-5xl"> Media </h1>
    <div className="flex flex-col gap-5">
      {mediaLinks.map((link, index) => (
        <Link key={index} {...link} />
      ))}
    </div>
  </div>
);

const leftContent = (
  <div className="flex flex-col items-center justify-center gap-3  sm:w-1/2">
    <h1 className="font-glosa-display text-5xl"> Contact </h1>
    {contactLinks.map((link, index) => (
      <Link key={index} {...link} />
    ))}
  </div>
);

export function ContactSection() {
  return (
    <Section reverse leftContent={leftContent} rightContent={rightContent} />
  );
}
