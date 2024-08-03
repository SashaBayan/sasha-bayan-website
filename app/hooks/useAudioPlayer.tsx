import { useState, useEffect } from "react";

export const useAudioPlayer = () => {
  const [currentSrc, setCurrentSrc] = useState<string | null>(null);

  const playAudio = (src: string) => {
    setCurrentSrc(src);
  };

  const stopAudio = () => {
    setCurrentSrc(null);
  };

  return {
    currentSrc,
    playAudio,
    stopAudio,
  };
};
