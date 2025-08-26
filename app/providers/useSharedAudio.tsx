"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";

type AudioContextType = {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  togglePlay: () => void;
  setVolume: (v: number) => void;
  seek: (t: number) => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(60); // %

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/ShabbirBhaijaan.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.6;
      audioRef.current.preload = "metadata";

      audioRef.current.addEventListener("loadedmetadata", () =>
        setDuration(audioRef.current?.duration || 0)
      );
      audioRef.current.addEventListener("timeupdate", () =>
        setCurrentTime(audioRef.current?.currentTime || 0)
      );
    }

    // Try autoplay once
    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true));
    }
  };

  const setVolume = (v: number) => {
    setVolumeState(v);
    if (audioRef.current) audioRef.current.volume = v / 100;
  };

  const seek = (t: number) => {
    if (audioRef.current && duration > 0) {
      audioRef.current.currentTime = t;
      setCurrentTime(t);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        currentTime,
        duration,
        volume,
        togglePlay,
        setVolume,
        seek,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useSharedAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useSharedAudio must be used within AudioProvider");
  return ctx;
}
