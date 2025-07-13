"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

const secondaryLinks = [
  { name: "tweet @ me", href: "https://x.com/shabbiryk" },
  {
    name: "connect on linkedin",
    href: "https://www.linkedin.com/in/shabbiryk/",
  },
];

const Sidebar = () => {
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

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
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
        console.log('Audio file not found or cannot be played');
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

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
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
        <nav className="flex flex-col gap-1 text-start">
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

        {/* Secondary Links - Below main nav, not in footer */}
        <div className="flex flex-col gap-1 mt-4 pl-0 text-start">
          {secondaryLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm lowercase text-black font-normal"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Music Player */}
        <div className="mt-12 pt-8 flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          
          <div className="flex-1">
            <input
              type="range"
              min="0"
              max="100"
              value={duration ? (currentTime / duration) * 100 : 0}
              onChange={handleProgressChange}
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #000 0%, #000 ${duration ? (currentTime / duration) * 100 : 0}%, #e5e7eb ${duration ? (currentTime / duration) * 100 : 0}%, #e5e7eb 100%)`
              }}
            />
          </div>
        </div>

        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          src="/music.mp3"
          onEnded={() => setIsPlaying(false)}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
