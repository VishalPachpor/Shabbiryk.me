import Image from "next/image";
import { MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Mobile Layout */}
      <div className="md:hidden w-full min-h-screen pt-6 px-4">
        {/* Hero Image - full width on mobile */}
        <div className="relative w-full h-64 mb-6">
          <Image
            src="/hero.JPG"
            alt="Landscape photo of person sitting on rocky cliff overlooking coastal town with cloudy sky"
            fill
            className="object-cover object-center rounded-lg"
            priority
            quality={100}
          />
        </div>

        {/* Card - below image on mobile */}
        <div className="w-full">
          <div className="bg-black text-white shadow-xl w-full flex flex-col justify-center p-6 rounded-lg">
            <h1 className="text-2xl font-bold leading-tight mb-4">
              Shabbir Khan
            </h1>
            <div className="text-white text-sm mb-4 leading-relaxed">
              A crypto researcher and investment committee member focusing on
              socio-technical systems. 6+ years in crypto ecosystems, business
              development, and technical research. Visiting researcher at
              Ethereum Foundation (EFNextBillion Fellow '24) and contributor to
              Chainlink. Led 170+ projects, specializing in DeFi, Infra, and
              Gaming.
            </div>
            <div className="space-y-3 mb-3">
              <div className="flex items-start space-x-3">
                <div>
                  <span className="text-white text-sm">
                    <strong>Managing Partner @</strong>{" "}
                    <span className="font-semibold">EAK Ventures</span>
                  </span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div>
                  <span className="text-white text-sm">
                    <strong>Portfolio Partner @</strong>{" "}
                    <span className="font-semibold">Zo Venture Studio</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="italic text-gray-300 text-xs mb-4">
              Prev. JP Morgan's ONYX, Chainlink, Coinswitch Ventures
            </div>
            <div className="text-white text-sm flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, California</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative w-full max-w-5xl mx-auto h-[calc(100vh-2rem)] mt-4 pt-6 px-4 flex items-center justify-center">
        {/* Hero Image - slightly reduced width, with padding */}
        <div className="relative w-2/3 h-full ml-auto p-6">
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
        <div className="absolute top-1/2 left-[-1%] -translate-y-1/2 z-20 w-[420px] h-[380px] flex items-center justify-center">
          <div className="bg-black text-white shadow-xl w-full h-full flex flex-col justify-center p-8">
            <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
              Shabbir Khan
            </h1>
            <div className="text-white text-sm mb-4">
              A crypto researcher and investment committee member focusing on
              socio-technical systems. 6+ years in crypto ecosystems, business
              development, and technical research. Visiting researcher at
              Ethereum Foundation (EFNextBillion Fellow '24) and contributor to
              Chainlink. Led 170+ projects, specializing in DeFi, Infra, and
              Gaming.
            </div>
            <div className="space-y-3 mb-2">
              <div className="flex items-start space-x-3">
                <div>
                  <span className="text-white text-sm">
                    <strong>Managing Partner @</strong>{" "}
                    <span className="font-semibold">EAK Ventures</span>
                  </span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div>
                  <span className="text-white text-sm">
                    <strong>Portfolio Partner @</strong>{" "}
                    <span className="font-semibold">Zo Venture Studio</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="italic text-gray-300 text-xs mb-4">
              Prev. JP Morgan's ONYX, Chainlink, Coinswitch Ventures
            </div>
            <div className="text-white text-sm flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, California</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
