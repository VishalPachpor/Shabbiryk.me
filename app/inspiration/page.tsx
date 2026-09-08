"use client";

import MobileHeader from "@/components/MobileHeader";
import { useMobileMenu } from "../providers";

const inspirations = [
  {
    title: "Situational Awareness",
    author: "Leopold Aschenbrenner",
    url: "https://situational-awareness.ai/from-gpt-4-to-agi/",
    note: "Everyone, regardless of your interest in AI, should read this.",
  },
  {
    title: "Venture Capital Start-up Selection",
    author: "Young Soo Jang and Steven N. Kaplan",
    url: "https://www.nber.org/papers/w33483",
    note: "A rare look inside more than 8,000 sourced deals, and a useful challenge to how much weight investors place on team versus market and product.",
  },
  {
    title: "Do Venture Capitalists Beat Random Allocation?",
    author: "Max Sina Knicker, Jean-Philippe Bouchaud, and Michael Benzaquen",
    url: "https://arxiv.org/abs/2605.03980",
    note: "A provocative test of skill, luck, and portfolio construction in a market where a few outcomes shape almost everything.",
  },
  {
    title: "All in the Family: Family Offices and the Limits of Financial Regulation",
    author: "Melinda Roth",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7233101",
    note: "A thoughtful account of why family offices sit awkwardly between private flexibility and public-market systemic risk.",
  },
  {
    title: "How Constraining Are Limits to Arbitrage?",
    author: "Alexander Ljungqvist and Wenlan Qian",
    url: "https://www.nber.org/papers/w19834",
    note: "An interesting study of how credible research and public disclosure can unlock a trade when capital and shorting constraints get in the way.",
  },
  {
    title: "Dare to Do Legendary Things",
    author: "Mike Maples",
    url: "https://www.youtube.com/watch?v=yRgI6-LJVKc",
    note: "Sparked my interest in VC and shaped how I think about startups and markets.",
  },
  {
    title: "Fooled by Randomness / Antifragile",
    author: "Nassim Taleb",
    url: "https://www.amazon.com/s?k=fooled+by+randomness&ref=nb_sb_ss",
    note: "Changed how I think about risk, probability, and thriving through volatility.",
  },
  {
    title: "Cognitive Referents",
    author: "Dennis Hong",
    url: "https://www.youtube.com/watch?v=nvFk9sn5koI",
    note: "Helped shape how I evaluate consumer tech businesses.",
  },
  {
    title: "How to Get Rich Without Getting Lucky",
    author: "Naval Ravikant",
    url: "https://www.youtube.com/watch?v=3qHkcs3kG44",
    note: "Principles on leverage, learning, and compounding that stuck with me.",
  },
  {
    title: "Invest Like the Best",
    author: "Brad Gerstner",
    url: "https://open.spotify.com/episode/5vbZZp0HYFAo0RN8SdN6r5",
    note: "Framed my perspective on crossover investing and essentialism.",
  },
];

export default function InspirationPage() {
  const { isMenuOpen } = useMobileMenu();

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Mobile Header */}
      <MobileHeader />
      <div className="p-4">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-xl mb-3 mt-8 text-left font-medium">Inspiration</h1>
          <p className="text-gray-700 mb-3 text-left">
            Papers, talks, books, and people that shaped how I think.
          </p>

          <ul className="list-disc pl-5 space-y-4 text-left marker:text-gray-300">
            {inspirations.map((item, index) => (
              <li key={index} className="text-gray-800">
                <div>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-600 hover:underline transition-colors duration-200"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <span>{item.title}</span>
                  )}
                  {item.author && (
                    <span className="text-gray-600">
                      {" "}
                      by <i>{item.author}</i>
                    </span>
                  )}
                </div>
                {item.note && (
                  <p className="text-gray-600 text-sm mt-1 ml-0 pl-0">
                    {item.note}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
