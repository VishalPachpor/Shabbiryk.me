"use client";

import { useSharedAudio, useMobileMenu } from "@/app/providers";
import { Play, Pause, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Publications", href: "/publications" },
  { name: "Talks and panels", href: "/talks-and-panels" },
  { name: "Portfolio", href: "/investments" },
  { name: "Investment memo", href: "/investment-memo" },
  {
    name: "Curriculum vitae",
    href: "https://docs.google.com/document/d/1VIBwHr-z3-Eb1Ghfqf6DASF0A6bAVyCjUd83-hjWcy4/edit?tab=t.0",
    external: true,
  },
];

const MobileMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useMobileMenu();
  const {
    isPlaying,
    setIsPlaying,
    currentTime,
    setCurrentTime,
    duration,
    setDuration,
    volume,
    setVolume,
  } = useSharedAudio();

  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Detect if user is on mobile (≤768px)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Setup autoplay only if mobile
  useEffect(() => {
    if (!isClient || !isMobile) return;

    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.6;
    setVolume(60);

    let attempted = false;

    const attemptPlay = async () => {
      if (attempted) return;
      attempted = true;
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    audio.addEventListener("loadedmetadata", attemptPlay);

    // fallback on user interaction
    const resume = async () => {
      if (!attempted && audio.readyState >= 2) {
        await attemptPlay();
      }
    };

    document.addEventListener("touchstart", resume, { once: true });
    document.addEventListener("click", resume, { once: true });

    return () => {
      audio.removeEventListener("loadedmetadata", attemptPlay);
      document.removeEventListener("touchstart", resume);
      document.removeEventListener("click", resume);
    };
  }, [isClient, isMobile]);

  // Sync playback state
  const togglePlay = async () => {
    if (!isMobile) return; // Prevent desktop interference

    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  // Keep progress bar updated
  useEffect(() => {
    if (!isClient || !isMobile) return;

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
  }, [isClient, isMobile]);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isMobile) return;

    const audio = audioRef.current;
    if (!audio) return;

    const newTime = (parseFloat(e.target.value) / 100) * duration;
    if (audio.readyState >= 2 && duration > 0) {
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  if (!isMobile) return null; // ❌ Don't render anything on desktop

  return (
    <div className="md:hidden">
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center transition-all duration-300"
          style={{ backgroundColor: "#a3a3a3" }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#a3a3a3" }}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Content */}
          <div className="relative w-full h-full flex flex-col items-center justify-between">
            {/* Navigation */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <nav className="flex flex-col items-center gap-3">
                {navLinks.map((link) =>
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lg text-white"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lg text-white"
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </nav>
            </div>

            {/* Player */}
            <div className="w-full px-8 pb-8">
              <div className="flex items-center gap-3 w-full">
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center"
                  aria-label={isPlaying ? "Pause audio" : "Play audio"}
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={duration > 0 ? (currentTime / duration) * 100 : 0}
                  onChange={handleProgressChange}
                  className="flex-1"
                />

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => {
                    const newVol = parseInt(e.target.value);
                    setVolume(newVol);
                    if (audioRef.current) {
                      audioRef.current.volume = newVol / 100;
                    }
                  }}
                  className="w-16"
                />
              </div>

              <div className="text-center mt-2">
                <span className="mt-2 italic text-gray-500 text-sm">
                  my piano cover
                </span>
              </div>
            </div>
          </div>

          {/* Hidden Audio */}
          <audio
            ref={audioRef}
            src="/ShabbirBhaijaan.mp3"
            preload="metadata"
            playsInline
            onEnded={() => setIsPlaying(false)}
            style={{ display: "none" }}
          />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
