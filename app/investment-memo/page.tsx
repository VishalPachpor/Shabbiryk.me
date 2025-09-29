"use client";

import MobileHeader from "@/components/MobileHeader";

export default function InvestmentThesisPage() {
  const investmentMemos = [
    {
      title: "AltLayer",
      description: "Layer 3 Infrastructure",
      url: "https://docs.google.com/document/d/1UJxkamfrRH7xaNY2uLA5DmM4MtnVpDfaA2L4dVoITZQ/edit?usp=sharing",
    },
    {
      title: "EtherFi",
      description: "Liquid Staking Protocol",
      url: "https://docs.google.com/document/d/1jzyKKJtpXw2Ctl92Nxzy9SkXRX8E3nuBuIWCnXfd214/edit?usp=sharing",
    },
    {
      title: "Fhenix",
      description: "Privacy Infrastructure",
      url: "https://docs.google.com/document/d/1j9sXbVfczr11cFmk2Zz5Zi_H8hZjoPx1VcLtTcqvl9I/edit?usp=sharing",
    },
    {
      title: "Glint Analytics",
      description: "AI-powered Analytics Platform",
      url: "https://docs.google.com/document/d/1a97xGkPLupLyIDz7krFydRnMDrr6DDiOUAjSnXZByzY/edit?usp=sharing",
    },
    {
      title: "Maya Protocol",
      description: "Cross-chain Liquidity Protocol",
      url: "https://docs.google.com/document/d/1W86Ookgi8CC2hS2PZQO1mAHicUUEUpha3Unf1bHkIJQ/edit?usp=sharing",
    },
    {
      title: "Modulus",
      description: "DeFi Infrastructure",
      url: "https://docs.google.com/document/d/1nZB2rW2nXXZTGnDgmsZXlgf6bHSUpM5bWIyZttohARo/edit?usp=sharing",
    },
    {
      title: "Puffer",
      description: "Research Paper",
      url: "https://docs.google.com/document/d/1o5v9xyulgmR1_ByqMTTeXaIPPWQdApWxJBqFqEjrGcA/edit?usp=sharing",
    },
    {
      title: "SorellaLabs",
      description: "Web3 Infrastructure",
      url: "https://docs.google.com/document/d/1tUwf18bunWW4LL5Fo-LNHee4MnArmvGO_bFXOUhR6QU/edit?usp=sharing",
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Mobile Header */}
      <MobileHeader />
      <div className="p-4">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-xl mb-3 mt-4 text-left font-medium">
            Investment Thesis & Memos
          </h1>
          <p className="text-gray-700 mb-3 text-left">
            detailed analysis and investment theses for various blockchain and
            web3 projects.
          </p>

          <ul className="list-disc pl-5 space-y-1 text-left marker:text-gray-300">
            {investmentMemos.map((memo, index) => (
              <li key={index}>
                <a
                  href={memo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-600 hover:underline transition-colors duration-200"
                >
                  {memo.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-4 border-t border-gray-200">
            {/* SFImage */}
            <div className="mt-4">
              <img
                src="/SFimage.avif"
                alt="San Francisco landscape and cityscape"
                className="w-full rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
