import Image from "next/image";
import { MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Mobile Layout */}
      {/* Ethereum logo top left on mobile */}
      <img
        src="/ethereum.png"
        alt="Ethereum Logo"
        className="md:hidden fixed top-4 left-4 w-12 h-12 z-50"
      />
      <div className="md:hidden w-full min-h-screen pt-6 px-4 pb-64 py-8 relative overflow-hidden">
        {/* Hero Image with overlapping card */}
        <div className="relative w-[90%] mx-auto h-[600px] overflow-visible z-10 rounded-2xl mt-20">
          <Image
            src="/hero.JPG"
            alt="Landscape photo of person sitting on rocky cliff overlooking coastal town with cloudy sky"
            fill
            className="object-cover object-center rounded-lg"
            priority
            quality={100}
          />
          {/* Overlapping Card - half on image, half below */}
          <div className="absolute left-[10%] bottom-0 translate-y-1/2 w-[110%] max-w-[95vw] max-h-[420px] bg-black text-white shadow-xl flex flex-col justify-center p-7 z-20 overflow-y-auto break-words whitespace-normal">
            <h1 className="text-2xl leading-tight mb-4 text-white">
              Shabbir Khan
            </h1>
            <div className="text-white text-sm mb-4 leading-relaxed">
              Investment partner at EAK Ventures (fund based in dubai) — mainly
              deploying in AI, Longevity and RWAs
            </div>
            <div className="text-white text-sm mb-4 leading-relaxed">
              Also a finance nerd who loves to hold assets in a decentralized
              way. I mostly write about fundraising on-chain analysis, and
              actionable insights on startups.
            </div>
            <div className="text-gray-300 text-sm mb-4 leading-relaxed">
              Academics: system programming, algorithms, distributed systems,
              hyperledger fabric.
            </div>
            <div className="space-y-3 mb-3"></div>
            <div className="italic text-gray-300 text-xs mb-4">
              Prev. JP Morgan's ONYX, Chainlink, Coinswitch Ventures
            </div>
            <div className="text-white text-sm flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span className="text-white">Dubai, UAE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative w-full h-[calc(100vh-2rem)] mt-4 pt-6 px-4 flex items-center justify-center overflow-hidden">
        {/* Hero Image - slightly reduced width, with padding */}
        <div className="relative w-2/3 h-full ml-auto p-6 z-10">
          <Image
            src="/hero.JPG"
            alt="Landscape photo of person sitting on rocky cliff overlooking coastal town with cloudy sky"
            fill
            className="object-cover object-center rounded-lg"
            priority
            quality={100}
          />
        </div>
        {/* Card - left, overlapping image, moved left */}
        <div className="absolute top-1/2 left-[-1%] -translate-y-1/2 z-20 w-[420px] h-[480px] flex items-center justify-center">
          <div className="bg-black text-white shadow-xl w-full h-full flex flex-col justify-center p-8">
            <h1 className="text-2xl md:text-3xl leading-tight mb-6 text-white">
              Shabbir Khan
            </h1>
            <div className="text-white text-sm mb-4">
              Investment partner at EAK Ventures (fund based in dubai) — mainly
              deploying in AI, Longevity and RWAs
            </div>
            <div className="text-white text-sm mb-4">
              Also a finance nerd who loves to hold assets in a decentralized
              way. I mostly write about fundraising on-chain analysis, and
              actionable insights on startups.
            </div>
            <div className="text-gray-300 text-sm mb-4">
              Academics: system programming, algorithms, distributed systems,
              hyperledger fabric.
            </div>
            <div className="space-y-3 mb-2"></div>
            <div className="italic text-gray-300 text-xs mb-4">
              Prev. JP Morgan's ONYX, Chainlink, Coinswitch Ventures
            </div>
            <div className="text-white text-sm flex items-center space-x-2 hover:text-gray-300">
              <MapPin className="w-4 h-4" />
              <span className="text-white">Dubai, UAE</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
