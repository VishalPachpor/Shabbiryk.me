"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import MobileHeader from "@/components/MobileHeader";
import { useMobileMenu } from "./providers";

export default function HomePage() {
  const { isMenuOpen } = useMobileMenu();

  return (
    <main className="flex-1">
      {/* Mobile Header */}
      <MobileHeader />
      {/* Mobile Layout: Hero+Card Section */}
      <div className="md:hidden w-full min-h-screen pt-2 px-4 pb-2 relative overflow-y-auto overflow-x-hidden">
        {/* Hero Image with overlapping card */}
        <div className="relative w-[90%] mx-auto h-[600px] overflow-visible z-10">
          <Image
            src="/home1.jpg"
            alt="Landscape photo of person sitting on rocky cliff overlooking coastal town with cloudy sky"
            fill
            className="object-cover object-center"
            priority
            quality={100}
            sizes="90vw"
          />
          {/* Overlapping Card - half on image, half below */}
          <div className="absolute left-6 right-2 bottom-6 translate-y-1/2 max-h-[400px] bg-black text-white shadow-xl flex flex-col justify-between p-6 pt-4 pb-4 z-20 overflow-y-auto break-words whitespace-normal rounded-md">
            <div>
              <div className="text-white text-lg font-medium mb-1 leading-relaxed">
                Shabbir Khan
              </div>
              <div className="text-white text-sm mb-2 leading-relaxed">
                Backed 40+ projects, from early infra to tokenized assets, and
                helped 20+ teams close their first checks since 2022. Along the
                way, he's written 60+ memos, built trading strategies, and ended
                up co-writing a whitepaper for a tokenized penthouse in Dubai.
              </div>
              <div className="text-white text-sm mb-2 leading-relaxed">
                A Kauffman Fellow, EF NextBillion Fellow, and long-time
                Chainlink contributor. You'll usually find him in pitch
                sessions, collective analysis calls, or connecting founders with
                the right capital allocators.
              </div>
              <div className="text-white text-sm mb-2 leading-relaxed">
                Just another degen trying to push good projects forward.
              </div>
              <div className="space-y-3 mb-2"></div>
              <div className="italic text-gray-300 text-xs mb-2">
                <p className="italic text-gray-300 text-xs mb-2">
                  Partner @ EAK Ventures
                </p>
                Prev. State Street, Al-Thani Family Office, Coinswitch Ventures.
              </div>
              <div className="text-white text-sm flex items-center space-x-2 mb-4">
                <MapPin className="w-4 h-4" />
                <span className="text-gray-400">Dubai</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative w-full h-screen items-center justify-center overflow-hidden">
        {/* Hero Image - full viewport height */}
        <div className="relative w-2/3 h-full ml-auto z-10">
          <Image
            src="/home1.jpg"
            alt="Landscape photo of person sitting on rocky cliff overlooking coastal town with cloudy sky"
            fill
            className="object-cover object-center "
            priority
            quality={100}
            sizes="(min-width: 768px) 66vw, 90vw"
          />
        </div>
        {/* Card - positioned to align "Shabbir Khan" with "Home" for perfect F pattern */}
        <div className="absolute top-[120px] left-0 z-20 w-[480px] h-[350px] flex flex-col items-center justify-center">
          <div className="bg-black text-white w-full h-full flex flex-col justify-center p-6 pt-4 pb-4">
            <div className="text-white text-lg font-medium mb-1 leading-relaxed">
              Shabbir Khan
            </div>
            <div className="text-white text-sm mb-2 leading-relaxed">
              Backed 40+ projects, from early infra to tokenized assets, and
              helped 20+ teams close their first checks since 2022. Along the
              way, he's written 60+ memos, built trading strategies, and ended
              up co-writing a whitepaper for a tokenized penthouse in Dubai.
            </div>
            <div className="text-white text-sm mb-2 leading-relaxed">
              A Kauffman Fellow, EF NextBillion Fellow, and long-time Chainlink
              contributor. You'll usually find him in pitch sessions, collective
              analysis calls, or connecting founders with the right capital
              allocators.
            </div>
            <div className="text-white text-sm mb-2 leading-relaxed">
              Just another degen trying to push good projects forward.
            </div>
            <div className="space-y-3 mb-2"></div>
            <div className="italic text-gray-300 text-xs mb-2">
              <p className="italic text-gray-300 text-xs mb-2">
                Partner @ EAK Ventures
              </p>
              Prev. State Street, Al-Thani Family Office, Coinswitch Ventures.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
