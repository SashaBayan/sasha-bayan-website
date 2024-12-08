"use client";
import { useEffect, useRef, useState } from "react";
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
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      if (audio) setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      if (audio) setDuration(audio.duration);
    };

    audio?.addEventListener("timeupdate", handleTimeUpdate);
    audio?.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio?.removeEventListener("timeupdate", handleTimeUpdate);
      audio?.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  return (
    <div className="flex w-full max-w-[300px] flex-col items-center rounded-lg border border-solid border-black bg-white p-4 px-6 shadow-md">
      <div
        onClick={handlePlayPause}
        className="flex w-full cursor-pointer items-center"
      >
        <button className="mr-2">
          {isPlaying ? <BsStopCircle /> : <BsPlayCircle />}
        </button>
        <span className="flex-grow overflow-ellipsis text-gray-700">
          {trackName}
        </span>
      </div>
      <audio ref={audioRef} src={src} onEnded={onStop} />
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        className="mt-2 w-full "
      />
      <div className="text-sm text-gray-600">
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
    </div>
  );
}

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}
