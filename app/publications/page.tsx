"use client";

import Link from "next/link";
import MobileHeader from "@/components/MobileHeader";
import { useMobileMenu } from "../providers";

export default function PublicationsPage() {
  const { isMenuOpen } = useMobileMenu();

  // All publications in a simple array
  const publications = [
    {
      title:
        "Overview of CyberConnect on-chain protocol and explore the potential use cases",
      url: "https://dev.to/shabbirykk/overview-of-cyberconnect-on-chain-protocol-and-explore-the-potential-use-cases-4c04",
    },
    {
      title: "Overview of common DID methods and when to use each one",
      url: "https://dev.to/shabbirykk/overview-of-common-did-methods-and-when-to-use-each-one-2lkn",
    },
    {
      title: "Creating an NFT with Stacks",
      url: "https://dev.to/shabbirykk/creating-an-nft-with-stacks-3cg6",
    },
    {
      title: "Provocations for a better internet",
      url: "https://medium.com/berkman-klein-center/provocations-for-a-better-internet-b5ba53585717",
    },
    {
      title: "Bad incentives ruined the internet",
      url: "https://medium.com/berkman-klein-center/bad-incentives-ruined-the-internet-a711434be92d",
    },
    {
      title: "Wellness and the new Web",
      url: "https://wired.jp/magazine/vol_44/",
    },
    {
      title: "Toward A More Cooperative Web",
      url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4302681",
    },
    {
      title:
        "The Next Phase of the Data Economy: Economic & Technological Perspectives",
      url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5025403",
    },
  ];

  // All publications are now articles (talks and panels moved to separate page)
  const articles = publications;

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Mobile Header */}
      <MobileHeader />
      <div className="p-8">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-3xl mb-4 mt-8 text-left font-medium">
            Articles & Publications
          </h1>
          <p className="text-gray-600 lowercase mb-8 text-left">
            i mostly write about fundraising on-chain analysis, and actionable
            insights on startups.
          </p>

          {/* Articles Section */}
          <ul className="list-disc pl-6 space-y-2 text-left">
            {articles.map((publication, index) => (
              <li key={index}>
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-colors duration-200"
                >
                  {publication.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-blue-600">🔗</span>
              <a
                href="https://dev.to/shabbirykk"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-gray-500 transition-colors duration-200"
              >
                DEV Community Profile
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600">📊</span>
              <a
                href="https://dune.com/dannytrump"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-gray-500 transition-colors duration-200"
              >
                Dune Analytics Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
