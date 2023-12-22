"use client";
import { FaFacebook, FaInstagram, FaSpotify } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { MediaLink } from "./MediaLink";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="flex h-[432px] w-full flex-col-reverse justify-around sm:flex-row sm:flex-nowrap"
    >
      {/* left side */}
      <div className="flex h-full flex-col items-center justify-center gap-3 bg-[#E8E1DD] sm:w-1/2">
        <h1 className="font-glosa-display text-5xl"> Follow </h1>
        <div className="flex flex-col gap-5">
          {mediaLinks().map((link, index) => (
            <MediaLink key={index} {...link} />
          ))}
        </div>
      </div>
      {/* right side */}
      <div className="flex h-full flex-col items-center justify-center gap-3 bg-white sm:w-1/2">
        <h1 className="font-glosa-display text-5xl"> Book </h1>
        <a
          className="flex gap-2"
          target="_blank"
          href="mailto:sasha@sashabayan.com"
        >
          <GoMail className="text-2xl" />
          <p>booking@sashabayan.com</p>
        </a>
      </div>
    </section>
  );
}

function mediaLinks() {
  return [
    {
      href: "https://www.instagram.com/sasha.bayan",
      icon: <FaInstagram className="text-2xl" />,
      copy: "@sasha.bayan",
    },
    {
      href: "https://open.spotify.com/artist/2cwKhNJE0AFNVtYKhHAgMc",
      icon: <FaSpotify className="text-2xl" />,
      copy: "Sasha Bayan",
    },
    {
      href: "https://www.facebook.com/sashabayanmusic/",
      icon: <FaFacebook className="text-2xl" />,
      copy: "sashabayanmusic",
    },
  ];
}
