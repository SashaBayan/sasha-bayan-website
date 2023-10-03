"use client";
import { FaInstagram } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import Image from "next/image";
import { AudioPlayer } from "./AudioPlayer";

export function ContactSection() {
  return (
    <section className="flex h-[432px] w-full flex-wrap justify-between py-10 sm:flex-nowrap">
      {/* left side */}
      <div className="flex w-1/2 flex-col items-center justify-center gap-3 bg-white">
        <h1 className="font-glosa-display text-5xl"> Follow </h1>
        <a
          className="flex gap-2"
          target="_blank"
          href="www.instagram.com/sasha.bayan"
        >
          <FaInstagram className="text-2xl" />
          <p>@sasha.bayan</p>
        </a>
      </div>
      {/* right side */}
      <div className="flex w-1/2 flex-col items-center justify-center gap-3 bg-[#E8E1DD]">
        <h1 className="font-glosa-display text-5xl"> Book </h1>
        <a
          className="flex gap-2"
          target="_blank"
          href="www.instagram.com/sasha.bayan"
        >
          <GoMail className="text-2xl" />
          <p>booking@sashabayan.com</p>
        </a>
      </div>
    </section>
  );
}
