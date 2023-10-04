"use client";
import { FaInstagram } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import Image from "next/image";
import { AudioPlayer } from "./AudioPlayer";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="flex h-[432px] w-full flex-col-reverse justify-around sm:flex-row sm:flex-nowrap"
    >
      {/* left side */}
      <div className="flex h-full flex-col items-center justify-center gap-3 bg-[#E8E1DD] sm:w-1/2">
        <h1 className="font-glosa-display text-5xl"> Follow </h1>
        <a
          className="flex gap-2"
          target="_blank"
          href="https:www.instagram.com/sasha.bayan"
        >
          <FaInstagram className="text-2xl" />
          <p>@sasha.bayan</p>
        </a>
      </div>
      {/* right side */}
      <div className="flex h-full flex-col items-center justify-center gap-3 bg-white sm:w-1/2">
        <h1 className="font-glosa-display text-5xl"> Book </h1>
        <a
          className="flex gap-2"
          target="_blank"
          href="mailto:booking@sashabayan.com"
        >
          <GoMail className="text-2xl" />
          <p>booking@sashabayan.com</p>
        </a>
      </div>
    </section>
  );
}
