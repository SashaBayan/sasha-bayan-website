import Section from "@/app/components/Section";
import { FaDownload, FaFacebook, FaGlobe, FaInstagram } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const rightContent = (
  <div className="flex h-full flex-col items-start justify-center gap-3 sm:w-1/2">
    <h1 className="font-glosa-display text-5xl"> Media </h1>
    <div className="flex flex-col gap-5">
      <a
        className="flex gap-2"
        target="_blank"
        href="https://www.instagram.com/sasha.bayan"
      >
        <FaInstagram className="text-2xl" />
        <p>@sasha.bayan</p>
      </a>
      <a
        className="flex gap-2"
        target="_blank"
        href="https://www.facebook.com/sashabayanmusic/"
      >
        <FaFacebook className="text-2xl" />
        <p>sashabayanmusic</p>
      </a>
      <a
        className="flex gap-2"
        target="_blank"
        href="https://www.sashabayan.com"
      >
        <FaGlobe className="text-2xl" />
        <p>sashabayan.com</p>
      </a>
      <a
        className="flex gap-2"
        target="_blank"
        href="https://www.sashabayan.com"
      >
        <FaDownload className="text-2xl" />
        <p>Download Press Photos</p>
      </a>
    </div>
  </div>
);

const leftContent = (
  <div className="flex flex-col items-center justify-center gap-3  sm:w-1/2">
    <h1 className="font-glosa-display text-5xl"> Contact </h1>
    <a
      className="flex gap-2"
      target="_blank"
      href="mailto:booking@sashabayan.com"
    >
      <GoMail className="text-2xl" />
      <p>booking@sashabayan.com</p>
    </a>
  </div>
);

export function ContactSection() {
  return (
    <Section reverse leftContent={leftContent} rightContent={rightContent} />
  );
}
