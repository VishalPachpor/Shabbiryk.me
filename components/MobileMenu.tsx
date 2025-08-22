"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMobileMenu, useSharedAudio } from "@/app/providers";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Twitter, Linkedin } from "lucide-react";

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

const bottomLinks = [
  { name: "tweet @ me", href: "https://x.com/shabbiryk", external: true },
  {
    name: "connect on Linkedin",
    href: "https://www.linkedin.com/in/shabbiryk/",
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
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Autoplay functionality with volume control (audio is always mounted)
  useEffect(() => {
    if (!isClient) return;

    const audio = audioRef.current;
    if (!audio) return;

    // Set volume to 60% (0.6)
    audio.volume = 0.6;
    setVolume(60);

    const attemptAutoplay = async () => {
      try {
        // Try to play immediately
        await audio.play();
        setIsPlaying(true);
        console.log("Autoplay successful!");
      } catch (error: any) {
        console.log("Autoplay failed:", error?.name || "Unknown error");
        // Autoplay failed - this is expected in modern browsers
        // We'll use the fallback interaction listeners below
      }
    };

    // Try autoplay when audio is ready
    audio.addEventListener("loadedmetadata", attemptAutoplay);
    audio.addEventListener("canplay", attemptAutoplay);

    // Fallback: start on first user interaction (touch/click anywhere)
    const resumeAudioContext = () => {
      if (audio.readyState >= 2) {
        console.log("User interaction detected, starting audio...");
        attemptAutoplay();
      }
    };

    // Listen for any user interaction to start audio
    document.addEventListener("touchstart", resumeAudioContext, { once: true });
    document.addEventListener("click", resumeAudioContext, { once: true });
    document.addEventListener("keydown", resumeAudioContext, { once: true });

    return () => {
      audio.removeEventListener("loadedmetadata", attemptAutoplay);
      audio.removeEventListener("canplay", attemptAutoplay);
      document.removeEventListener("touchstart", resumeAudioContext);
      document.removeEventListener("click", resumeAudioContext);
      document.removeEventListener("keydown", resumeAudioContext);
    };
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;

    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      console.log("Mobile time update:", audio.currentTime);
    };
    const updateDuration = () => {
      setDuration(audio.duration);
      console.log("Mobile duration update:", audio.duration);
    };

    // Add multiple event listeners for better mobile compatibility
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("canplay", updateDuration);
    audio.addEventListener("loadeddata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("canplay", updateDuration);
      audio.removeEventListener("loadeddata", updateDuration);
    };
  }, [isClient]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      // Mobile-friendly play with better error handling
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            console.log("Audio started successfully");
          })
          .catch((error) => {
            console.log("Audio play failed:", error);
            setIsPlaying(false);

            // On mobile, show specific error handling
            if (error.name === "NotAllowedError") {
              console.log("User interaction required on mobile");
            }
          });
      }
    }
  };

  // Ensure progress bar updates reliably across browsers while playing
  useEffect(() => {
    if (!isClient) return;
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      // Use a more frequent interval for smoother progress bar updates on mobile
      const intervalId = setInterval(() => {
        if (audio.readyState >= 2) {
          // HAVE_CURRENT_DATA
          setCurrentTime(audio.currentTime || 0);
        }
      }, 100); // Update more frequently for smoother progress
      return () => clearInterval(intervalId);
    }
  }, [isPlaying, isClient]);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = (parseFloat(e.target.value) / 100) * duration;
    console.log("Mobile progress change:", {
      value: e.target.value,
      newTime,
      duration,
    });

    // Ensure audio is ready before seeking
    if (audio.readyState >= 2 && duration > 0) {
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
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
        <div
          className="fixed inset-0 z-40 flex items-center justify-center transition-all duration-300 animate-fade-in mobile-menu-custom"
          style={{ backgroundColor: "#a3a3a3" }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#a3a3a3" }}
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="relative w-full h-full flex flex-col items-center justify-between">
            {/* Top bar with Earth logo while menu is open */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <img src="/side.gif" alt="Logo" className="w-10 h-10" />
            </div>

            {/* Main navigation in center */}
            <div className="flex-1 flex flex-col items-center justify-center">
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
            </div>

            {/* Bottom section with social links and music player */}
            <div className="w-full px-8 pb-8">
              {/* Text social links */}
              <div className="flex flex-col items-center gap-2 mb-4">
                <a
                  href="https://x.com/shabbiryk"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xs tracking-wide text-white text-center opacity-80 hover:opacity-100 transition"
                >
                  tweet @ me
                </a>
                <a
                  href="https://www.linkedin.com/in/shabbiryk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xs tracking-wide text-white text-center opacity-80 hover:opacity-100 transition"
                >
                  connect on LinkedIn
                </a>
              </div>

              {/* Social icons */}
              <div className="flex items-center justify-center gap-6 mb-4">
                <a
                  href="https://x.com/shabbiryk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shabbiryk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white"
                >
                  <Linkedin size={20} />
                </a>
              </div>

              {/* Music Player */}
              <div className="flex items-center gap-3 px-4">
                <div className="flex flex-col items-center flex-none w-10">
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: "#fff" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#a3a3a3")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#fff")
                    }
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                  {/* Mobile audio hint */}
                  {!isPlaying && (
                    <span className="sr-only">Tap to enable audio</span>
                  )}
                </div>
                {/* Progress Bar - slider only, no timing */}
                <div className="flex-1 flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={
                      duration > 0
                        ? Math.min((currentTime / duration) * 100, 100)
                        : 0
                    }
                    onChange={handleProgressChange}
                    onInput={handleProgressChange} // Add onInput for better mobile touch handling
                    className="w-full h-3 bg-white/30 rounded-lg appearance-none cursor-pointer slider touch-manipulation"
                    style={{
                      background: `linear-gradient(to right, #fff 0%, #fff ${
                        duration > 0
                          ? Math.min((currentTime / duration) * 100, 100)
                          : 0
                      }%, rgba(255,255,255,0.3) ${
                        duration > 0
                          ? Math.min((currentTime / duration) * 100, 100)
                          : 0
                      }%, rgba(255,255,255,0.3) 100%)`,
                    }}
                  />
                </div>
                {/* Volume Control */}
                <div className="w-16 flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => {
                      const newVolume = parseInt(e.target.value);
                      setVolume(newVolume);
                      const audio = audioRef.current;
                      if (audio) {
                        audio.volume = newVolume / 100;
                      }
                    }}
                    className="w-full h-3 bg-white/30 rounded-lg appearance-none cursor-pointer slider touch-manipulation"
                    style={{
                      background: `linear-gradient(to right, #fff 0%, #fff ${volume}%, rgba(255,255,255,0.3) ${volume}%, rgba(255,255,255,0.3) 100%)`,
                    }}
                  />
                </div>
              </div>

              {/* Piano Cover Signature - Below Music Player */}
              <div className="text-center mt-4 px-4">
                <span className="text-2xl text-white font-cursive italic">
                  my piano cover
                </span>
              </div>
            </div>
          </div>

          {/* Hidden Audio Element */}
          <audio
            ref={audioRef}
            src="/ShabbirBhaijaan.mp3"
            preload="metadata"
            autoPlay
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
