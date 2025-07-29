"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  { name: "home", href: "/" },
  { name: "publications", href: "/publications" },
  { name: "talks and panels", href: "/talks-and-panels" },
  { name: "portfolio", href: "/investments" },
  { name: "investment memos", href: "/investment-memo" },
  {
    name: "curriculum vitae",
    href: "https://docs.google.com/document/d/1VIBwHr-z3-Eb1Ghfqf6DASF0A6bAVyCjUd83-hjWcy4/edit?tab=t.0",
    external: true,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, [isClient]);

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
    console.log("Progress change:", {
      value: e.target.value,
      newTime,
      duration,
    });
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

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
                  className={`text-base lowercase transition-colors duration-200 cursor-pointer text-left ${
                    isActive
                      ? "text-gray-400 font-normal"
                      : "text-black font-bold"
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
                className={`text-base lowercase transition-colors duration-200 cursor-pointer text-left ${
                  isActive
                    ? "text-gray-400 font-normal"
                    : "text-black font-bold"
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
            className="text-sm lowercase text-black font-normal hover:text-gray-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            tweet @ me
          </a>
          <a
            href="https://www.linkedin.com/in/shabbiryk/"
            className="text-sm text-black font-normal hover:text-gray-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            connect on LinkedIn
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
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          {/* Progress Bar - slider only, no timing */}
          <div className="flex-1 flex items-center">
            <input
              type="range"
              min="0"
              max="100"
              value={duration ? (currentTime / duration) * 100 : 0}
              onChange={handleProgressChange}
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #000 0%, #000 ${
                  duration ? (currentTime / duration) * 100 : 0
                }%, #e5e7eb ${
                  duration ? (currentTime / duration) * 100 : 0
                }%, #e5e7eb 100%)`,
              }}
            />
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
    </div>
  );
};

export default Sidebar;
