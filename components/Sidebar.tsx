"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSharedAudio } from "@/app/providers";
import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Linkedin,
  Twitter,
  Calendar,
  Link as LinkIcon,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Publications", href: "/publications" },
  { name: "Talks and panels", href: "/talks-and-panels" },
  { name: "Portfolio", href: "/investments" },
  { name: "Investment memos", href: "/investment-memo" },
  {
    name: "Curriculum vitae",
    href: "https://docs.google.com/document/d/1VIBwHr-z3-Eb1Ghfqf6DASF0A6bAVyCjUd83-hjWcy4/edit?tab=t.0",
    external: true,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
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
  const [isClient, setIsClient] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Autoplay functionality with volume control
  useEffect(() => {
    if (!isClient) return;

    const audio = audioRef.current;
    if (!audio) return;

    // Set volume to 60% (0.6)
    audio.volume = 0.6;
    setVolume(60);

    // Attempt autoplay when audio is ready
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

    // Try autoplay when audio metadata is loaded
    audio.addEventListener("loadedmetadata", attemptAutoplay);

    // Also try when audio can start playing
    audio.addEventListener("canplay", attemptAutoplay);

    // Mobile-specific: Try to resume audio context on user interaction
    const resumeAudioContext = () => {
      if (audio.readyState >= 2) {
        attemptAutoplay();
      }
    };

    // Listen for user interactions that might enable audio
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
      console.log("Time update:", audio.currentTime);
    };
    const updateDuration = () => {
      setDuration(audio.duration);
      console.log("Duration update:", audio.duration);
    };

    // Add multiple event listeners for better compatibility
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

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = (parseFloat(e.target.value) / 100) * duration;
    console.log("Progress change:", {
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

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // Ensure progress bar updates reliably across browsers while playing
  useEffect(() => {
    if (!isClient) return;
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      // Use a more frequent interval for smoother progress bar updates
      const intervalId = setInterval(() => {
        if (audio.readyState >= 2) {
          // HAVE_CURRENT_DATA
          setCurrentTime(audio.currentTime || 0);
        }
      }, 100); // Update more frequently for smoother progress
      return () => clearInterval(intervalId);
    }
  }, [isPlaying, isClient]);

  return (
    <div className="hidden md:flex w-60 h-screen bg-white flex-col fixed left-0 top-0 z-10 border-r border-gray-100 py-6 px-6">
      <div className="flex flex-col h-full">
        {/* Logo - Small circular logo at the top */}
        <div className="flex flex-col items-start mb-8">
          <Link href="/" className="cursor-pointer">
            <img
              src="/side.gif"
              alt="Sidebar Logo"
              className="w-16 h-16 rounded-full object-cover"
            />
          </Link>
        </div>

        {/* Navigation Menu - Vertical navigation with links */}
        <nav className="flex flex-col gap-2 text-start">
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
                  className={`text-base  transition-colors duration-200 cursor-pointer text-left ${
                    isActive
                      ? "text-gray-400 font-normal"
                      : "text-black font-normal"
                  }`}
                >
                  {link.name}
                </a>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base transition-colors duration-200 cursor-pointer text-left ${
                  isActive
                    ? "text-gray-400 font-normal"
                    : "text-black font-normal"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Spacer to push social links and music player to bottom */}
        <div className="flex-1" />

        {/* Text Social Links - Above icons */}
        <div className="mb-2 flex flex-col gap-2 text-start">
          <a
            href="https://x.com/shabbiryk"
            className="text-sm  text-black font-normal hover:text-gray-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet @ me
          </a>
          <a
            href="https://www.linkedin.com/in/shabbiryk/"
            className="text-sm text-black font-normal hover:text-gray-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>

        {/* Social Icons - Below text links */}
        <div className="mb-2 mt-2 flex space-x-3 justify-start">
          <a
            href="https://linkedin.com/in/shabbirkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600 transition-colors duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/shabbirkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600 transition-colors duration-200"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://cal.com/shabbir-khan-dhkgcs/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600 transition-colors duration-200"
          >
            <Calendar className="w-5 h-5" />
          </a>
          <a
            href="https://linktr.ee/shabbiryk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600 transition-colors duration-200"
          >
            <LinkIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Music Player at the bottom */}
        <div className="mb-6 pt-2 flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={16} />}
          </button>
          {/* Progress Bar - slider only, no timing */}
          <div className="flex-1 flex items-center">
            <input
              type="range"
              min="0"
              max="100"
              value={
                duration > 0 ? Math.min((currentTime / duration) * 100, 100) : 0
              }
              onChange={handleProgressChange}
              onInput={handleProgressChange} // Add onInput for better touch handling
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider touch-manipulation"
              style={{
                background: `linear-gradient(to right, #000 0%, #000 ${
                  duration > 0
                    ? Math.min((currentTime / duration) * 100, 100)
                    : 0
                }%, #e5e7eb ${
                  duration > 0
                    ? Math.min((currentTime / duration) * 100, 100)
                    : 0
                }%, #e5e7eb 100%)`,
              }}
            />
          </div>
          {/* Volume Control */}
          <div className="w-12 flex items-center">
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
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider touch-manipulation"
              style={{
                background: `linear-gradient(to right, #000 0%, #000 ${volume}%, #e5e7eb ${volume}%, #e5e7eb 100%)`,
              }}
            />
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

        {/* Piano Cover Signature */}
        <div className="text-center ">
          <span className="text-lg text-gray-600 font-cursive italic">
            my piano cover
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
