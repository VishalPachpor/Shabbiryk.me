"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import MobileHeader from "@/components/MobileHeader";

export default function TalksAndPanelsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slideshow images
  const slides = [
    { src: "/talk1.jpeg", alt: "Talk 1" },
    { src: "/talk2.JPG", alt: "Talk 2" },
    { src: "/talk3.JPG", alt: "Talk 3" },
    { src: "/talk4.jpg", alt: "Talk 4" },
  ];

  // Auto-rotate slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  // LinkedIn posts for talks and panels
  const talksAndPanels = [
    {
      title: "Growing Convicted Sector: RWA",
      url: "https://www.linkedin.com/posts/ugcPost-7305749466022584321-6rqG?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
    },
    {
      title:
        "Where The Smart Money Flows: VC Predictions For The DeFAI Frontier",
      url: "https://www.linkedin.com/posts/nikilster_1-trillion-market-cap-25-trillion-aum-activity-7308957830160560129-nPE9?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
    },
    {
      title: "Blockchain Technologies and Entrepreneurship",
      url: "https://www.linkedin.com/posts/ugcPost-7305749466022584321-6rqG?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
    },
    {
      title: "2025 Crypto Plans",
      url: "https://www.linkedin.com/posts/nikilster_1-trillion-market-cap-25-trillion-aum-activity-7308957830160560129-nPE9?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
    },
    {
      title: "World Economic Forum: Session On Crypto",
      url: "https://www.linkedin.com/posts/activity-7291279229785194496-RuKt?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
    },
    {
      title: "Building Investors Communities",
      url: "https://www.linkedin.com/posts/activity-7270882888483504128-E3Fn?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
    },
    {
      title: "The case for diversified portfolios & no pro-rata",
      url: "https://www.linkedin.com/posts/s21-is_web3-venturecapital-istanbul-ugcPost-7346119028177817600-_qO4?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
    },
    {
      title: "Future of Fundraising and Liquidity in Web3",
      url: "https://www.linkedin.com/posts/joy-sim-kia_token2049-dubai-was-intense-telegram-ugcPost-7325795420704518144-Z7f6?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
    },
    {
      title: "Dealflow Den: $80B in AUM",
      url: "https://www.linkedin.com/posts/activity-7333469707385098241-0wzD?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
    },
    {
      title: "State Of Solana Consumer Apps",
      url: "https://www.linkedin.com/posts/activity-7303181245314711552-_PG4?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
    },
    {
      title: "Roundtable on Restaking: IBW",
      url: "https://www.linkedin.com/posts/ugcPost-7233418335479021568-c4Q0?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
    },
    {
      title: "Crypto Regs in Dubai: VARA",
      url: "https://x.com/web3conf_india/status/1864591217213747524?s=46&t=mubNscfry1EBdGzHORVPCg",
    },
    {
      title: "Founders' Alignment in UAE",
      url: "https://x.com/shabbiryk/status/1797706818589983207?s=46&t=mubNscfry1EBdGzHORVPCg",
    },
    {
      title: "AI Agents: Type. Deploy. Done.",
      url: "https://x.com/donjohnsonsays/status/1935596149592985674?s=46&t=mubNscfry1EBdGzHORVPCg",
    },
    {
      title: "The Digital Asset Roundtable",
      url: "https://x.com/shabbiryk/status/1797467905183138141?s=46&t=mubNscfry1EBdGzHORVPCg",
    },
    {
      title:
        "Davos Debate on Artificial Intelligence, Crypto Regs And the UPI Revolution",
      url: "https://www.linkedin.com/posts/activity-7286437703213101056-w3D_?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Mobile Header */}
      <MobileHeader />
      <div className="p-4">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-xl mb-3 mt-4 text-left font-medium">
            Talks and Panels
          </h1>
          <p className="text-gray-700 mb-4 text-left">
            Speaking engagements, panel discussions, and thought leadership
            content on blockchain, DeFi, and Web3.
          </p>

          <ul className="list-disc pl-5 space-y-1 text-left marker:text-gray-300">
            {talksAndPanels.map((talk, index) => (
              <li key={index}>
                <a
                  href={talk.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-600 hover:underline transition-colors duration-200"
                >
                  {talk.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-3 border-t border-gray-200">
            {/* Slideshow */}
            <div className="mt-4 relative">
              <div className="relative w-full h-[400px] rounded-lg shadow-lg overflow-hidden">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className={
                        index === 3 ? "object-contain" : "object-cover"
                      }
                      priority={index === 0}
                    />
                  </div>
                ))}

                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-400 ${
                        index === currentSlide
                          ? "bg-white"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
