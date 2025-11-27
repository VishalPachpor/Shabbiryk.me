"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSharedAudio } from "@/app/providers";
import { useState, useRef, useEffect } from "react";
import LinearProgress from "@/components/ui/linear-progress";
import {
  Play,
  Pause,
  Linkedin,
  Twitter,
  Calendar,
  Link as LinkIcon,
  Github,
  Mail,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Publications", href: "/publications" },
  { name: "Talks and panels", href: "/talks-and-panels" },
  { name: "Portfolio", href: "/investments" },
  { name: "Inspiration", href: "/inspiration" },
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
  const [isDesktop, setIsDesktop] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Detect desktop
  useEffect(() => {
    setIsClient(true);
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Autoplay only if desktop
  useEffect(() => {
    if (!isClient || !isDesktop) return;

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

    const resume = async () => {
      if (!attempted && audio.readyState >= 2) {
        await attemptPlay();
      }
    };

    document.addEventListener("click", resume, { once: true });
    document.addEventListener("keydown", resume, { once: true });

    return () => {
      audio.removeEventListener("loadedmetadata", attemptPlay);
      document.removeEventListener("click", resume);
      document.removeEventListener("keydown", resume);
    };
  }, [isClient, isDesktop]);

  // Sync time/duration
  useEffect(() => {
    if (!isClient || !isDesktop) return;
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
  }, [isClient, isDesktop]);

  const togglePlay = async () => {
    if (!isDesktop) return;

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

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDesktop) return;

    const audio = audioRef.current;
    if (!audio) return;

    const newTime = (parseFloat(e.target.value) / 100) * duration;
    if (audio.readyState >= 2 && duration > 0) {
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  if (!isDesktop) return null; // ❌ Don’t render sidebar on mobile

  return (
    <div className="hidden md:flex w-60 h-screen bg-white flex-col fixed left-0 top-0 z-10 border-r border-gray-100 py-6 px-6">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex flex-col items-start mb-8">
          <Link href="/" className="cursor-pointer">
            <img
              src="/side.gif"
              alt="Sidebar Logo"
              className="w-16 h-16 rounded-full object-cover"
            />
          </Link>
        </div>

        {/* Navigation */}
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
                  className={`text-base cursor-pointer ${
                    isActive ? "text-gray-400" : "text-black"
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
                className={`text-base cursor-pointer ${
                  isActive ? "text-gray-400" : "text-black"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex-1" />

        {/* Social Links */}
        <div className="mb-2 flex flex-col gap-2 text-start">
          <a
            href="https://x.com/shabbiryk"
            className="text-sm text-black hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet @ me
          </a>
          <a
            href="https://www.linkedin.com/in/shabbiryk/"
            className="text-sm text-black hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>

        {/* Music Player */}
        <div className="mb-6 flex flex-col">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={16} />}
            </button>

            {/* Progress */}
            <div className="flex-1 flex items-center">
              <LinearProgress
                value={
                  duration > 0
                    ? Math.min((currentTime / duration) * 100, 100)
                    : 0
                }
                height={4}
                className="w-full"
              />
            </div>
          </div>

          <div className="text-center mt-0.5">
            <span className="text-lg text-gray-600 font-cursive">
              my piano cover
            </span>
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
    </div>
  );
};

export default Sidebar;
