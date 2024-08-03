"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import { CLOUDFRONT_URL } from "../constants/urls";

const bioText = `Sasha Bayan is a distinctive voice in the contemporary music scene, renowned for his heartfelt songwriting and introspective sound. His artistry delves deep into complex emotional narratives, with songs that explore love, loss, self-discovery, and the intricate balance of self-worth. Sasha's journey in music is marked by a rich tapestry of global influences and classical training, making him a compelling figure in the world of music.
At the heart of Sasha's work is his album "enough," a collection of 11 tracks released in 2024, stands as a testament to his evocative storytelling and musical depth. Drawing inspiration from artists like Sufjan Stevens and Andrew Bird, Sasha crafts songs that resonate deeply with listeners, inviting them into a world of introspection and emotional connection. His music transcends simple melodies, creating immersive experiences that engage the heart and mind.
Sasha's artistic tapestry is further enriched by his role as the bandleader and sitar player for High Tide, where he brings a captivating fusion of world music elements. This experience complements his solo endeavors, highlighting his versatility and passion as an artist. Sasha navigates diverse musical landscapes, from the intricate rhythms of world music to the introspective realms of indie, showcasing his multifaceted talent.
A graduate of Northwestern University’s Bienen School of Music, Sasha studied guitar and composition, immersing himself in Spanish, Brazilian, and Indian Classical music. His college years were a time of exploration and achievement, winning research grants and scholarships to study Flamenco guitar in Seville, Spain; Samba, Choro, and Bossa Nova in Rio de Janeiro, Brazil; and Hindustani music in Hyderabad, India. These experiences have profoundly influenced his musical style, infusing his compositions with a rich diversity of cultural sounds.
Sasha is not just a musician but a global storyteller. His background in jazz and classical music, combined with his extensive travel and study of various music forms worldwide, have shaped him into an artist with a unique voice and vision. Sasha Bayan's music is a journey through the heart's many landscapes, offering a window into his soul and a reflection of the universal human experience.`;

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
