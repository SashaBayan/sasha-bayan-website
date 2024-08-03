"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import { CLOUDFRONT_URL } from "../constants/urls";

const bioText = `c`;

export function BioSection() {
  const [selectedImage, setSelectedImage] = useState(
    `${CLOUDFRONT_URL}/sasha-instruments.jpg`,
  );
  return (
    <section
      id="bio"
      className="flex w-full flex-wrap justify-around bg-white sm:flex-nowrap"
    >
      {/* left side */}
      <div className="flex flex-col py-20 sm:w-1/2">
        {/* bio section */}
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="flex max-w-lg flex-col gap-10 px-10">
            {bioText.split("\n").map((paragraph, idx) => (
              <div className="" key={idx}>
                {paragraph}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex flex-col  bg-[#E8E1DD] py-20 sm:w-1/2">
        {/* TODO: use akkurat light font */}
        {/* add nav-bar here */}
        {/* <div className="flex w-full justify-center"> */}
        <div className="mt-5 flex justify-center">
          <div className="relative flex items-center justify-center sm:h-[400px] sm:w-[400px] lg:h-[600px] lg:w-[600px] ">
            <Image
              src={selectedImage}
              layout="fill"
              objectFit="contain"
              alt="sasha bayan photo"
            />
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-around gap-5 p-5">
          <Image
            className="cursor-pointer border border-solid border-white"
            onClick={() => setSelectedImage("/sasha-instruments.jpg")}
            src={`${CLOUDFRONT_URL}/sasha-instruments.jpg`}
            width={260}
            height={168}
            alt="sasha bayan photo"
          />
          <Image
            className="cursor-pointer border border-solid border-white"
            onClick={() => setSelectedImage("/sasha-sitar.jpg")}
            src={`${CLOUDFRONT_URL}/sasha-sitar.jpg`}
            width={133}
            height={200}
            alt="sasha bayan photo"
          />
          <Image
            className="cursor-pointer border border-solid border-white"
            onClick={() => setSelectedImage("/sasha-guitar.jpg")}
            src={`${CLOUDFRONT_URL}/sasha-guitar.jpg`}
            width={133}
            height={200}
            alt="sasha bayan photo"
          />
        </div>
      </div>
    </section>
  );
}
