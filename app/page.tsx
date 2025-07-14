"use client";

import Image from "next/image";
import { MapPin, Linkedin, Twitter, Calendar, Link } from "lucide-react";
import MobileHeader from "@/components/MobileHeader";
import { useMobileMenu } from "./providers";

export default function HomePage() {
  const { isMenuOpen } = useMobileMenu();

  return (
    <main className="flex-1">
      {/* Mobile Header */}
      <MobileHeader />
      {/* Mobile Layout: Hero+Card Section */}
      <div className="md:hidden w-full min-h-screen pt-2 px-4 pb-2 relative overflow-auto">
        {/* Hero Image with overlapping card */}
        <div className="relative w-[90%] mx-auto h-[600px] overflow-visible z-10">
          <Image
            src="/hero.JPG"
            alt="Landscape photo of person sitting on rocky cliff overlooking coastal town with cloudy sky"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          {/* Overlapping Card - half on image, half below */}
          <div className="absolute left-[10%] bottom-[22px] translate-y-1/2 w-[110%] max-w-[95vw] max-h-[420px] bg-black text-white shadow-xl flex flex-col justify-between p-4 pt-6 z-20 overflow-y-auto break-words whitespace-normal">
            <div>
              <div className="text-white text-sm mb-2 leading-relaxed">
                Shabbir Khan investment partner at EAK Ventures (fund based in dubai) —
                mainly deploying in AI, longevity and RWAs
              </div>
              <div className="text-white text-sm mb-2 leading-relaxed">
                an angel and a finance nerd who loves to hold assets in a
                decentralized way.
              </div>
              <div className="text-gray-300 text-sm italic mb-2 leading-relaxed">
                Academics: system programming, algorithms, distributed systems,
                hyperledger fabric.
              </div>
              <div className="space-y-3 mb-2"></div>
              <div className="italic text-gray-300 text-xs mb-2">
                prev. JP Morgan's ONYX, Chainlink, Coinswitch Ventures
              </div>
              <div className="text-white text-sm flex items-center space-x-2 mb-4">
                <MapPin className="w-4 h-4" />
                <span className="text-gray-400">dubai</span>
              </div>
            </div>
            {/* Social Links - Mobile (inside card, bottom) */}
            <div className="flex md:hidden flex-row space-x-4 justify-start mt-2">
              <a
                href="https://linkedin.com/in/shabbirkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/shabbirkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://cal.com/shabbir-khan-dhkgcs/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <Calendar className="w-6 h-6" />
              </a>
              <a
                href="https://linktr.ee/shabbiryk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <Link className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative w-full h-screen items-center justify-center overflow-hidden">
        {/* Hero Image - full viewport height */}
        <div className="relative w-2/3 h-full ml-auto z-10">
          <Image
            src="/hero.JPG"
            alt="Landscape photo of person sitting on rocky cliff overlooking coastal town with cloudy sky"
            fill
            className="object-cover object-center "
            priority
            quality={100}
          />
        </div>
        {/* Card - left, overlapping image, moved left */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 z-20 w-[420px] h-[360px] flex flex-col items-center justify-center">
          <div className="bg-black text-white shadow-xl w-full h-full flex flex-col justify-center p-4 pt-6">
            <div className="text-white text-sm mb-2 leading-relaxed">
              Shabbir Khan investment partner at EAK Ventures (fund based in dubai) — mainly
              deploying in AI, longevity and RWAs
            </div>
            <div className="text-white text-sm mb-2 leading-relaxed">
              an angel and a finance nerd who loves to hold assets in a
              decentralized way.
            </div>
            <div className="text-gray-300 text-sm italic mb-2 leading-relaxed">
              Academics: system programming, algorithms, distributed systems,
              hyperledger fabric.
            </div>
            <div className="space-y-3 mb-2"></div>
            <div className="italic text-gray-300 text-xs mb-2">
              prev. JP Morgan's ONYX, Chainlink, Coinswitch Ventures
            </div>
            <div className="text-white text-sm flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span className="text-gray-400">dubai</span>
            </div>
            {/* Social Links - Mobile (inside card, below content) */}
            <div className="flex md:hidden flex-row space-x-4 justify-start mt-2">
              <a
                href="https://linkedin.com/in/shabbirkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/shabbirkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://cal.com/shabbir-khan-dhkgcs/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <Calendar className="w-6 h-6" />
              </a>
              <a
                href="https://linktr.ee/shabbiryk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <Link className="w-6 h-6" />
              </a>
            </div>
            {/* Social Links - Desktop (inside card, below content) */}
            <div className="hidden md:flex flex-row space-x-4 justify-start mt-2">
              <a
                href="https://linkedin.com/in/shabbirkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/shabbirkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://cal.com/shabbir-khan-dhkgcs/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <Calendar className="w-6 h-6" />
              </a>
              <a
                href="https://linktr.ee/shabbiryk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <Link className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
