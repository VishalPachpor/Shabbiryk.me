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
      url: "https://docs.google.com/document/d/1UJxkamfrRH7xaNY2uLA5DmM4MtnVpDfaA2L4dVoITZQ/edit?usp=sharing",
    },
    {
      title: "EtherFi Investment Analysis",
      description: "Liquid Staking Protocol",
      url: "https://docs.google.com/document/d/1jzyKKJtpXw2Ctl92Nxzy9SkXRX8E3nuBuIWCnXfd214/edit?usp=sharing",
    },
    {
      title: "Fhenix Investment Memo",
      description: "Privacy Infrastructure",
      url: "https://docs.google.com/document/d/1j9sXbVfczr11cFmk2Zz5Zi_H8hZjoPx1VcLtTcqvl9I/edit?usp=sharing",
    },
    {
      title: "Glint Analytics Investment Memo",
      description: "AI-powered Analytics Platform",
      url: "https://docs.google.com/document/d/1a97xGkPLupLyIDz7krFydRnMDrr6DDiOUAjSnXZByzY/edit?usp=sharing",
    },
    {
      title: "Maya Protocol Investment Thesis",
      description: "Cross-chain Liquidity Protocol",
      url: "https://docs.google.com/document/d/1W86Ookgi8CC2hS2PZQO1mAHicUUEUpha3Unf1bHkIJQ/edit?usp=sharing",
    },
    {
      title: "Modulus Investment Memo",
      description: "DeFi Infrastructure",
      url: "https://docs.google.com/document/d/1nZB2rW2nXXZTGnDgmsZXlgf6bHSUpM5bWIyZttohARo/edit?usp=sharing",
    },
    {
      title: "Puffer Research Document",
      description: "Research Paper",
      url: "https://docs.google.com/document/d/1o5v9xyulgmR1_ByqMTTeXaIPPWQdApWxJBqFqEjrGcA/edit?usp=sharing",
    },
    {
      title: "SorellaLabs Investment Memo",
      description: "Web3 Infrastructure",
      url: "https://docs.google.com/document/d/1tUwf18bunWW4LL5Fo-LNHee4MnArmvGO_bFXOUhR6QU/edit?usp=sharing",
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

          <ul className="list pl-6 space-y-2 text-left">
            {investmentMemos.map((memo, index) => (
              <li key={index}>
                <a
                  href={memo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-colors duration-200"
                >
                  {memo.title}
                </a>
              </li>
            ))}
          </ul>

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
