"use client";
import { useEffect, useRef } from "react";
import { BsPlayCircle, BsStopCircle } from "react-icons/bs";

export function AudioPlayer({
  src,
  trackName,
  isPlaying,
  onPlay,
  onStop,
}: {
  src: string;
  trackName: string;
  isPlaying: boolean;
  onPlay: () => void;
  onStop: () => void;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      onStop();
    } else {
      onPlay();
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <div
      onClick={handlePlayPause}
      className="flex w-full max-w-[300px] cursor-pointer items-center overflow-clip overflow-ellipsis rounded-full border border-solid border-black bg-white p-4 px-6 shadow-md"
    >
      <button className="mr-2">
        {isPlaying ? <BsStopCircle /> : <BsPlayCircle />}
      </button>
      <span className="overflow-ellipsis text-gray-700">{trackName}</span>
      <audio ref={audioRef} src={src} onEnded={onStop} />
    </div>
  );
}
