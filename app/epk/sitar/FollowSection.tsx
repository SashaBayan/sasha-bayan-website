"use client";
import { MediaLink } from "@/app/components/MediaLink";
import { FaInstagram, FaSpotify, FaFacebook, FaEnvelope } from "react-icons/fa";

const mediaLinks = [
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
  {
    href: "/mailing-list",
    icon: <FaEnvelope className="text-2xl" />,
    copy: "Mailing list",
  },
];

export function FollowSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-10">
      <div className="flex items-center space-x-3">
        <h2 className="text-2xl font-semibold">Links</h2>
      </div>
      <div className="flex flex-col gap-5">
        {mediaLinks.map((link, index) => (
          <MediaLink
            key={index}
            href={link.href}
            icon={link.icon}
            copy={link.copy}
          />
        ))}
      </div>
    </div>
  );
}
