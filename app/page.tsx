"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import MobileHeader from "@/components/MobileHeader";

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Mobile Header */}
      <MobileHeader />
      {/* Mobile Layout: Hero+Card Section */}
      <div className="md:hidden w-full min-h-screen pt-2 px-4 pb-2 relative overflow-y-auto overflow-x-hidden">
        {/* Hero Image with overlapping card */}
        <div className="relative w-[90%] mx-auto h-[600px] overflow-visible z-10">
          <Image
            src="/IMG_6601.JPG"
            alt="Portrait photo of person at event"
            fill
            className="object-cover object-center"
            priority
            quality={100}
            sizes="90vw"
          />
          {/* Overlapping Card - half on image, half below */}
          <div className="absolute left-6 right-2 bottom-6 translate-y-1/2 max-h-[450px] bg-black text-white shadow-xl flex flex-col justify-between p-8 pl-10 z-20 overflow-y-auto break-words whitespace-normal rounded-md">
            <div className="space-y-4">
              <div className="text-white text-lg font-medium leading-relaxed">
                Shabbir Khan
              </div>
              <div className="text-white text-sm leading-relaxed">
                Started as a dev and on-chain analyst, later managing concentrated equity portfolios for family offices and RIA firms.
              </div>
              <div className="text-white text-sm leading-relaxed">
                Backed over 40 projects, from early infra to tokenized assets, and
                helped 20+ teams close their first checks since 2022. Along the
                way, he&apos;s written 60+ memos, built trading strategies, and
                ended up co-writing a whitepaper for a tokenized penthouse in
                Dubai.
              </div>
              <div className="text-white text-sm leading-relaxed">
                A Kauffman Fellow, EF NextBillion Fellow, and long-time
                Chainlink contributor. You&apos;ll usually find him in pitch
                sessions, collective analysis calls, or connecting founders with
                the right capital allocators.
              </div>
              <div className="text-white text-sm leading-relaxed">
                Just a native trying to push good projects forward.
              </div>
              <div className="space-y-1">
                <p className="italic text-gray-300 text-xs">
                  Prev. Al-Thani Family Office, State Street, EAK Ventures Coinswitch Ventures.
                </p>
                <div className="text-white text-sm flex items-center space-x-2 pt-0">
                  <MapPin className="w-4 h-4" />
                  <span className="text-gray-400">Dubai</span>
                </div>
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
            src="/IMG_6601.JPG"
            alt="Portrait photo of person at event"
            fill
            className="object-cover object-center "
            priority
            quality={100}
            sizes="(min-width: 768px) 66vw, 90vw"
          />
        </div>
        {/* Card - positioned to align "Shabbir Khan" with "Home" for perfect F pattern */}
        <div className="absolute top-[120px] left-0 z-20 w-[480px] h-[500px] flex flex-col items-center justify-center">
          <div className="bg-black text-white w-full h-full flex flex-col justify-center p-8 pl-10">
            <div className="space-y-4">
              <div className="text-white text-lg font-medium leading-relaxed">
                Shabbir Khan
              </div>
              <div className="text-white text-sm leading-relaxed">
                Started as a dev and on-chain analyst, later managing concentrated equity portfolios for family offices and RIA firms.
              </div>
              <div className="text-white text-sm leading-relaxed">
                Backed over 40 projects, from early infra to tokenized assets, and
                helped 20+ teams close their first checks since 2022. Along the
                way, he&apos;s written 60+ memos, built trading strategies, and
                ended up co-writing a whitepaper for a tokenized penthouse in
                Dubai.
              </div>
              <div className="text-white text-sm leading-relaxed">
                A Kauffman Fellow, EF NextBillion Fellow, and long-time Chainlink
                contributor. You&apos;ll find him in pitch sessions,
                collective analysis calls, or connecting founders with the right
                capital allocators.
              </div>
              <div className="text-white text-sm leading-relaxed">
                Just a native trying to push good projects forward.
              </div>
              <div className="space-y-1">
                <p className="italic text-gray-300 text-xs">
                  Prev. Al-Thani Family Office, State Street, EAK Ventures Coinswitch Ventures.
                </p>
                <div className="text-white text-sm flex items-center space-x-2 pt-0">
                  <MapPin className="w-4 h-4" />
                  <span className="text-gray-400">Dubai</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
