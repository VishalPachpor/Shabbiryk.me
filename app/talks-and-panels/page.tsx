"use client";

import Link from "next/link";
import MobileHeader from "@/components/MobileHeader";
import { useMobileMenu } from "../providers";

export default function TalksAndPanelsPage() {
  const { isMenuOpen } = useMobileMenu();

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
      <div className="p-8">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-3xl mb-4 mt-8 text-left font-medium">
            Talks and Panels
          </h1>
          <p className="text-gray-600 mb-8 text-left">
            speaking engagements, panel discussions, and thought leadership
            content on blockchain, DeFi, and Web3.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-left">
            {talksAndPanels.map((talk, index) => (
              <li key={index}>
                <a
                  href={talk.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-colors duration-200"
                >
                  {talk.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <span className="text-blue-600">🔗</span>
              <a
                href="https://www.linkedin.com/in/shabbiryk/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-gray-500 transition-colors duration-200"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
