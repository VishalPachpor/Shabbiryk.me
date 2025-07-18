"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMobileMenu } from "@/app/providers";
import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const navLinks = [
  { name: "home", href: "/" },
  { name: "publications", href: "/publications" },
  { name: "talks and panels", href: "/talks-and-panels" },
  { name: "investments", href: "/investments" },
  {
    name: "curriculum vitae",
    href: "https://docs.google.com/document/d/1VIBwHr-z3-Eb1Ghfqf6DASF0A6bAVyCjUd83-hjWcy4/edit?tab=t.0",
    external: true,
  },
];

const bottomLinks = [
  { name: "tweet @ me", href: "https://x.com/shabbiryk", external: true },
  {
    name: "connect on linkedin",
    href: "https://www.linkedin.com/in/shabbiryk/",
    external: true,
  },
];

const MobileMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useMobileMenu();
  const pathname = usePathname();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch((error) => {
        console.log("Audio file not found or cannot be played");
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = (parseFloat(e.target.value) / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="md:hidden">
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-gray-400/90 transition-all duration-300 animate-fade-in mobile-menu-custom">
          <div
            className="absolute inset-0 bg-gray-400/90"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center gap-3 w-full text-center">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                if (link.external) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg tracking-wide text-white text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg tracking-wide text-white text-center"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex flex-col items-center gap-2 mt-4 w-full text-center">
              {bottomLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs tracking-wide text-white text-center opacity-80 hover:opacity-100 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Music Player - now below Twitter and LinkedIn */}
            <div className="flex items-center gap-3 mt-8 px-8">
              <button
                onClick={togglePlay}
                className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
              {/* Progress Bar - slider only, no timing */}
              <div className="flex-1 flex items-center">
                <input
                  type="range"
                  min="0"
                  max={duration}
                  value={currentTime}
                  onChange={(e) => {
                    const audio = audioRef.current;
                    if (!audio) return;
                    const newTime = parseFloat(e.target.value);
                    audio.currentTime = newTime;
                    setCurrentTime(newTime);
                  }}
                  className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #fff 0%, #fff ${
                      duration ? (currentTime / duration) * 100 : 0
                    }%, rgba(255,255,255,0.3) ${
                      duration ? (currentTime / duration) * 100 : 0
                    }%, rgba(255,255,255,0.3) 100%)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Hidden Audio Element */}
          <audio
            ref={audioRef}
            src="/music.mp3"
            onEnded={() => setIsPlaying(false)}
            style={{ display: "none" }}
          />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
