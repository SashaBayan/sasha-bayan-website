"use client";
import Image from "next/image";
import { AudioPlayer } from "./AudioPlayer";

const videoIds = [
  "ycoErhyEqbQ",
  "i5cuBi2iTi4",
  "XwyrG8QX5tA",
  "uLOb6xh_tIc",
  "aNNPN26xhjs",
];

export function MediaSection() {
  return (
    <section className="max-[45rem] flex flex-wrap justify-around bg-[#E8E1DD] py-10 sm:flex-nowrap">
      {/* left side */}
      <div>
        {/* TODO: use akkurat light font */}
        <h4 className="text-sm font-thin uppercase">Sasha Bayan</h4>
        <Image
          className="grayscale"
          src="/guitar-photo-with-text.png"
          width={600}
          height={900}
          alt="sasha bayan photo"
        />
        {/* <img
          className="hidden object-cover grayscale lg:block"
          src="/guitar-photo-with-text.png"
          alt="sasha bayan photo"
        /> */}
      </div>
      {/* right side */}
      <div className="flex flex-col gap-16 bg-white px-16 pt-20 sm:w-1/2 md:pt-36">
        {/* TODO: should be Glosa Display font, add this secondary font */}
        <div className="px-16 text-center sm:px-0 sm:text-left">
          <h4 className="mb-5 text-sm uppercase">Listen</h4>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-between gap-5 sm:flex-row">
              <AudioPlayer src="test-audio.wav" trackName="Enough" />
              <AudioPlayer src="test-audio-2.wav" trackName="Tomorrow" />
            </div>
            <div className="flex flex-col justify-between gap-5 sm:flex-row">
              <AudioPlayer src="test-audio.wav" trackName="Tester" />
              <AudioPlayer src="test-audio-2.wav" trackName="Testing 4" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="mb-5 text-sm uppercase">Watch</h4>
          {/* <div className="flex flex-col items-center justify-center gap-5"> */}
          <div className="sm:aspect-h-9 sm:aspect-w-16">
            <iframe
              src={`https://www.youtube.com/embed/${videoIds[0]}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allow-full-screen"
              allowFullScreen
            />
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            {videoIds.slice(1).map((videoId) => (
              <iframe
                key={videoId}
                src={`https://www.youtube.com/embed/${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allow-full-screen"
                allowFullScreen
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
