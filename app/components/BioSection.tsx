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
        <div className="flex w-full justify-center">
          <div className="max-w-lg">
            <div className="relative aspect-9 h-[336px] w-[452px] overflow-hidden object-cover">
              <Image
                className="img-cover absolute left-0 top-0 h-full w-full"
                src={selectedImage}
                layout="fill"
                alt="sasha bayan photo"
              />
            </div>
          </div>
          {/* <div className="max-h-10 object-fill">
            <Image
              className="mb-10"
              src={selectedImage}
              width={200}
              height={200}
              alt="sasha bayan photo"
            />
          </div> */}
        </div>
        <div className="flex w-full justify-around gap-5">
          <Image
            className="cursor-pointer"
            onClick={() => setSelectedImage("/sasha-instruments.jpg")}
            src={"/sasha-instruments.jpg"}
            width={226}
            height={168}
            alt="sasha bayan photo"
          />
          <Image
            className="cursor-pointer"
            onClick={() => setSelectedImage("/sasha-sitar.jpg")}
            src="/sasha-sitar.jpg"
            width={133}
            height={200}
            alt="sasha bayan photo"
          />
          <Image
            className="cursor-pointer"
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
