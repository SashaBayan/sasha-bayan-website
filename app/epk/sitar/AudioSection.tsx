"use client";

import { AudioPlayer } from "@/app/components/AudioPlayer";
import { useAudioPlayer } from "@/app/hooks/useAudioPlayer";

const tracks = [
  {
    src: "/kava-on-carl.wav",
    trackName: "Kava on Carl",
  },
  {
    src: "/atash-abi.wav",
    trackName: "Átash Ábi",
  },
];

export function AudioSection() {
  const { currentSrc, playAudio, stopAudio } = useAudioPlayer();

  return (
    <section className="flex flex-col items-center gap-5">
      <h2 className="text-2xl font-semibold">Listen</h2>
      <div className="grid grid-cols-1 gap-4 ">
        {tracks.map((track) => (
          <AudioPlayer
            key={track.src}
            src={track.src}
            trackName={track.trackName}
            isPlaying={currentSrc === track.src}
            onPlay={() => playAudio(track.src)}
            onStop={stopAudio}
          />
        ))}
      </div>
    </section>
  );
}
