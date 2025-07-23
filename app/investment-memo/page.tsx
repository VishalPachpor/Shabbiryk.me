"use client";

import Link from "next/link";
import MobileHeader from "@/components/MobileHeader";
import { useMobileMenu } from "../providers";

export default function InvestmentThesisPage() {
  const { isMenuOpen } = useMobileMenu();

  const investmentMemos = [
    {
      title: "AltLayer Investment Thesis",
      description: "Layer 3 Infrastructure",
      url: "https://docs.google.com/document/d/1F0w9gveT8t3g-limSQpotlNOE4KeWq-AF_z6xsjGftY/edit?tab=t.jevhs8pnklg7#heading=h.xn6j1vrthi97",
    },
    {
      title: "EtherFi Investment Analysis",
      description: "Liquid Staking Protocol",
      url: "https://docs.google.com/document/d/1F0w9gveT8t3g-limSQpotlNOE4KeWq-AF_z6xsjGftY/edit?tab=t.3atl6if8m6a2#heading=h.xn6j1vrthi97",
    },
    {
      title: "Fhenix Investment Memo",
      description: "Privacy Infrastructure",
      url: "https://docs.google.com/document/d/1F0w9gveT8t3g-limSQpotlNOE4KeWq-AF_z6xsjGftY/edit?tab=t.j02kz8d5vnbk#heading=h.xn6j1vrthi97",
    },
    {
      title: "Glint Analytics Investment Memo",
      description: "AI-powered Analytics Platform",
      url: "https://docs.google.com/document/d/1F0w9gveT8t3g-limSQpotlNOE4KeWq-AF_z6xsjGftY/edit?tab=t.r2vbqiruzsn4#heading=h.3jp4hi2t0g2p",
    },
    {
      title: "Maya Protocol Investment Thesis",
      description: "Cross-chain Liquidity Protocol",
      url: "https://docs.google.com/document/d/1F0w9gveT8t3g-limSQpotlNOE4KeWq-AF_z6xsjGftY/edit?tab=t.g2t5agkn92lr#heading=h.hg3fqkgdjfp8",
    },
    {
      title: "Modulus Investment Memo",
      description: "DeFi Infrastructure",
      url: "https://docs.google.com/document/d/1F0w9gveT8t3g-limSQpotlNOE4KeWq-AF_z6xsjGftY/edit?tab=t.khtf2z6dbpgj#heading=h.xn6j1vrthi97",
    },
    {
      title: "Puffer Research Document",
      description: "Research Paper",
      url: "https://docs.google.com/document/d/1F0w9gveT8t3g-limSQpotlNOE4KeWq-AF_z6xsjGftY/edit?tab=t.yf7ia6499ie9#heading=h.45w4nlea2hwi",
    },
    {
      title: "SorellaLabs Investment Memo",
      description: "Web3 Infrastructure",
      url: "https://docs.google.com/document/d/1F0w9gveT8t3g-limSQpotlNOE4KeWq-AF_z6xsjGftY/edit?tab=t.0#heading=h.xn6j1vrthi97",
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Mobile Header */}
      <MobileHeader />
      <div className="p-8">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-xl mb-4 mt-8 text-left font-medium">
            Investment Thesis & Memos
          </h1>
          <p className="text-gray-600 mb-8 text-left">
            detailed analysis and investment theses for various blockchain and
            web3 projects.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {investmentMemos.map((memo, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-medium mb-2">{memo.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{memo.description}</p>
                <a
                  href={memo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                >
                  Read Memo →
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              These investment memos represent detailed analysis and due
              diligence conducted for various projects. Each document contains
              proprietary research and insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
