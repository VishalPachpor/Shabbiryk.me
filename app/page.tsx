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
          <div className="absolute cursor-pointer left-6 right-2 bottom-6 translate-y-1/2 max-h-[450px] bg-black text-white shadow-xl flex flex-col justify-between p-8 pl-10 z-20 overflow-y-auto break-words whitespace-normal rounded-md">
            <div className="space-y-4">
              <div className="text-white text-lg font-medium leading-relaxed">
                Shabbir Khan
              </div>
              <div className="text-white text-sm leading-relaxed">
                Started in code and on-chain analytics. Moved quickly into concentrated allocations across public and private markets for family offices, sovereign-linked capital, and RIA platforms.
              </div>
              <div className="text-white text-sm leading-relaxed">
                Ran crypto and crossover exposure at Blugreen, while advising principal groups on venture entries, secondary paper, and tokenized asset structures.
              </div>
              <div className="text-white text-sm leading-relaxed">
                Capital deployed across 9 GP commitments, 12 SPACs, and 24 primary and secondary positions, alongside early conviction in infrastructure, DeFi, and real-world asset tokenization. Since 2022, helped 20+ teams secure their first institutional checks, authored 60+ investment memos, built trading theses, and structured deployment pipelines from diligence to execution.
              </div>
              <div className="text-white text-sm leading-relaxed">
                CFA. Kauffman Fellow. VC Institute Grad &mdash; a native pushing good funds and solid founders forward.
              </div>
              <div className="text-white text-sm leading-relaxed">
                You&apos;ll find me speaking at family office summits and somewhere between founders, capital, and the point where conviction gets priced in.
              </div>
              <div className="space-y-1">
                <p className="italic text-gray-300 text-xs">
                  <a href="https://www.yusufalthani.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Private Office</a>,{" "}
                  <a href="https://bluegreen.vc" target="_blank" rel="noopener noreferrer" className="hover:underline">Blugreen Venture</a>,{" "}
                  <a href="https://www.statestreet.com/us/en/solutions/digital-assets" target="_blank" rel="noopener noreferrer" className="hover:underline">State Street</a>,{" "}
                  <a href="https://www.eak.ventures/" target="_blank" rel="noopener noreferrer" className="hover:underline">EAK Ventures</a> and{" "}
                  <a href="https://coinswitch.co/ventures" target="_blank" rel="noopener noreferrer" className="hover:underline">Coinswitch Venture</a>
                </p>
                <div className="text-white text-sm flex items-center space-x-2 pt-0">
                  <MapPin className="w-4 h-4" />
                  <span className="text-gray-400">Dubai / SF</span>
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
        <div className="absolute top-[120px] left-0 z-20 w-[480px] max-h-[calc(100vh-160px)] flex flex-col items-center justify-center">
          <div className="bg-black text-white w-full flex flex-col justify-center p-8 pl-10 overflow-y-auto">
            <div className="space-y-4">
              <div className="text-white text-lg font-medium leading-relaxed">
                Shabbir Khan
              </div>
              <div className="text-white text-sm leading-relaxed">
                Started in code and on-chain analytics. Moved quickly into concentrated allocations across public and private markets for family offices, sovereign-linked capital, and RIA platforms.
              </div>
              <div className="text-white text-sm leading-relaxed">
                Ran crypto and crossover exposure at Blugreen, while advising principal groups on venture entries, secondary paper, and tokenized asset structures.
              </div>
              <div className="text-white text-sm leading-relaxed">
                Capital deployed across 9 GP commitments, 12 SPACs, and 24 primary and secondary positions, alongside early conviction in infrastructure, DeFi, and real-world asset tokenization. Since 2022, helped 20+ teams secure their first institutional checks, authored 60+ investment memos, built trading theses, and structured deployment pipelines from diligence to execution.
              </div>
              <div className="text-white text-sm leading-relaxed">
                CFA. Kauffman Fellow. VC Institute Grad &mdash; a native pushing good funds and solid founders forward.
              </div>
              <div className="text-white text-sm leading-relaxed">
                You&apos;ll find me speaking at family office summits and somewhere between founders, capital, and the point where conviction gets priced in.
              </div>
              <div className="space-y-1">
                <p className="italic text-gray-300 text-xs">
                  <a href="https://www.yusufalthani.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Private Office</a>,{" "}
                  <a href="https://bluegreen.vc" target="_blank" rel="noopener noreferrer" className="hover:underline">Blugreen Venture</a>,{" "}
                  <a href="https://www.statestreet.com/us/en/solutions/digital-assets" target="_blank" rel="noopener noreferrer" className="hover:underline">State Street</a>,{" "}
                  <a href="https://www.eak.ventures/" target="_blank" rel="noopener noreferrer" className="hover:underline">EAK Ventures</a> and{" "}
                  <a href="https://coinswitch.co/ventures" target="_blank" rel="noopener noreferrer" className="hover:underline">Coinswitch Venture</a>
                </p>
                <div className="text-white text-sm flex items-center space-x-2 pt-0">
                  <MapPin className="w-4 h-4" />
                  <span className="text-gray-400">Dubai / SF</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
