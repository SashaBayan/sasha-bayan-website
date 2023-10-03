"use client";

import Image from "next/image";
import { useState } from "react";

export function BioSection() {
  const [selectedImage, setSelectedImage] = useState("/sasha-instruments.jpg");
  return (
    <section className="flex w-full flex-wrap justify-around bg-white py-10 sm:flex-nowrap">
      {/* left side */}
      <div className="flex flex-col lg:w-1/2">
        <h4 className="ml-16 flex w-full justify-start text-sm font-thin uppercase sm:mb-24">
          Sasha Bayan
        </h4>
        {/* bio section */}
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex max-w-lg flex-col gap-10 px-10">
            <p>
              Sasha Bayan is multi-instrumentalist and composer based in San
              Francisco. Born and raised in Southern California to a
              multi-cultural family, he started playing guitar and writing songs
              in his early teens.
            </p>
            <p>
              He went on to study guitar and composition at Northwestern
              University’s Bienen School of Music, where his love for Spanish,
              Brazilian, and Indian Classical music became an intimate part of
              his musical expression.
            </p>
            <p>
              During his college years, he won research grants and scholarships
              to study Flamenco guitar in Seville, Spain; Samba, Choro, and
              Bossa Nova in Rio de Janeiro, Brazil; and Hindustani music in
              Hyderabad, India.
            </p>
            <p>
              Currently, Sasha plays sitar, guitar, and his own compositions
              throughout the Bay Area. He headlines the band, High Tide – where
              he has rotating guest artists that accompany him on original work
              and improvisations.
            </p>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex flex-col bg-[#E8E1DD] lg:w-1/2">
        {/* TODO: use akkurat light font */}
        {/* add nav-bar here */}
        {/* <div className="flex w-full justify-center"> */}
        <div className="my-5 flex justify-center">
          <div className="relative flex h-[600px] w-[600px] items-center justify-center ">
            <Image
              src={selectedImage}
              layout="fill"
              objectFit="contain"
              alt="sasha bayan photo"
            />
          </div>
        </div>
        <div className="flex w-full justify-around gap-5">
          <Image
            className="cursor-pointer border border-solid border-white"
            onClick={() => setSelectedImage("/sasha-instruments.jpg")}
            src={"/sasha-instruments.jpg"}
            width={260}
            height={168}
            alt="sasha bayan photo"
          />
          <Image
            className="cursor-pointer border border-solid border-white"
            onClick={() => setSelectedImage("/sasha-sitar.jpg")}
            src="/sasha-sitar.jpg"
            width={133}
            height={200}
            alt="sasha bayan photo"
          />
          <Image
            className="cursor-pointer border border-solid border-white"
            onClick={() => setSelectedImage("/sasha-guitar.jpg")}
            src="/sasha-guitar.jpg"
            width={133}
            height={200}
            alt="sasha bayan photo"
          />
        </div>
      </div>
    </section>
  );
}
