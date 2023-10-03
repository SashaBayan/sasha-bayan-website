"use client";
import { useState, useRef } from "react";
import { BsPlayCircle, BsStopCircle } from "react-icons/bs";

export function AudioPlayer({
  src,
  trackName,
}: {
  src: string;
  trackName: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      // @ts-ignore
      audioRef.current && audioRef.current.pause();
    } else {
      // @ts-ignore
      audioRef.current && audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      onClick={handlePlayPause}
      className="flex w-full min-w-fit cursor-pointer items-center rounded-full border border-solid border-black bg-white p-4 px-6 shadow-md"
    >
      <button className="mr-4">
        {isPlaying ? <BsStopCircle /> : <BsPlayCircle />}
      </button>
      <span className="text-gray-700">{trackName}</span>
      <audio ref={audioRef} src={src} onEnded={() => setIsPlaying(false)} />
    </div>
  );
}
