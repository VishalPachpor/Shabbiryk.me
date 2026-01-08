"use client";

import { useSharedAudio, useMobileMenu } from "@/app/providers";
import { Play, Pause, Twitter, Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";
import LinearProgress from "@/components/ui/linear-progress";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Publications", href: "/publications" },
  { name: "Talks and panels", href: "/talks-and-panels" },
  { name: "Portfolio", href: "/investments" },
  { name: "Inspiration", href: "/inspiration" },
  { name: "Investment memo", href: "/investment-memo" },
  {
    name: "Curriculum vitae",
    href: "https://docs.google.com/document/d/1JvdGLWviJ1mJ7WC91O55sTickCXqUy8IKZnHFndpiiA/edit?usp=sharing",
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
    <div className="md:hidden mobile-menu-custom">
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
            <img
              src="/side.gif"
              alt="logo"
              className="absolute left-6 top-6 w-10 h-10 rounded-full object-cover opacity-90"
            />
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

            {/* Social Links */}
            <div className="flex flex-col gap-3 items-center mb-6">
              <a
                href="https://x.com/shabbiryk"
                className="text-white hover:text-gray-300 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <Twitter size={18} />
                Tweet @ me
              </a>
              <a
                href="https://www.linkedin.com/in/shabbiryk/"
                className="text-white hover:text-gray-300 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </a>
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

                <div className="flex-1 flex items-center">
                  <LinearProgress
                    value={duration > 0 ? (currentTime / duration) * 100 : 0}
                    height={4}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="text-center mt-2">
                <span className="mt-2 text-white/80 text-base font-cursive">
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
