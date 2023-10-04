"use client";
import Image from "next/image";
import { AudioPlayer } from "./AudioPlayer";
import { useAudioPlayer } from "../hooks/useAudioPlayer";

const videoIds = [
  "ycoErhyEqbQ",
  "i5cuBi2iTi4",
  "XwyrG8QX5tA",
  "uLOb6xh_tIc",
  "aNNPN26xhjs",
];

const tracks = [
  {
    src: "the-naming.wav",
    trackName: "The Naming",
  },
  {
    src: "talk-is-cheap.wav",
    trackName: "Talk is Cheap",
  },
  {
    src: "mcdonalds-jingle.mp3",
    trackName: "Mickey D's",
  },
  {
    src: "heartbeat-fanfare.wav",
    trackName: "Heartbeat Fanfare",
  },
];

export function MusicSection() {
  const { currentSrc, playAudio, stopAudio } = useAudioPlayer();
  return (
    <section
      id="music"
      className="flex flex-col-reverse flex-wrap justify-between bg-[#E8E1DD] sm:flex-row sm:flex-nowrap"
    >
      {/* left side */}
      <div className="flex flex-col  items-center justify-start pt-20 sm:w-1/2">
        <Image
          className="grayscale"
          src="/guitar-photo-with-text.png"
          width={480}
          height={720}
          alt="sasha bayan photo"
        />
      </div>
      {/* right side */}
      <div className="flex  flex-col gap-16 bg-white px-16 py-20 pt-20 sm:sm:w-1/2 md:pt-36">
        {/* TODO: should be Glosa Display font, add this secondary font */}
        <div className="text-center sm:px-0 sm:text-left">
          <h4 className="mb-5 text-sm uppercase">Listen</h4>
          <div className="grid grid-cols-1 place-items-center gap-5 sm:place-items-stretch md:grid-cols-2 ">
            {tracks.map((track) => (
              <AudioPlayer
                key={track.src}
                {...track}
                isPlaying={currentSrc === track.src}
                onPlay={() => playAudio(track.src)}
                onStop={stopAudio}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="mb-5 text-center text-sm uppercase sm:text-left">
            Watch
          </h4>
          {/* <div className="flex flex-col items-center justify-center gap-5"> */}
          <div className="aspect-h-9 aspect-w-16">
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
                width="260"
                height="150"
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
