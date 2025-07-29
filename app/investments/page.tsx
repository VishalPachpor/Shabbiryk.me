"use client";

import Link from "next/link";
import MobileHeader from "@/components/MobileHeader";
import { useMobileMenu } from "../providers";

const companies = [
  { name: "superverse", url: "https://superverse.com" },
  { name: "manta network", url: "https://manta.network" },
  { name: "imaginary ones", url: "https://www.imaginaryones.com" },
  { name: "darewise", url: "https://www.darewise.com" },
  { name: "opulous", url: "https://www.opulous.org" },
  { name: "stormx", url: "https://www.stormx.io" },
  { name: "amber", url: "https://www.ambergroup.io" },
  { name: "alchemy", url: "https://www.alchemy.com" },
  { name: "acala", url: "https://acala.network" },
  { name: "balancer", url: "https://balancer.fi" },
  { name: "ankr", url: "https://www.ankr.com" },
  { name: "0x", url: "https://0x.org" },
  { name: "1inch", url: "https://1inch.io" },
  { name: "bitso", url: "https://bitso.com" },
  { name: "bitstamp", url: "https://www.bitstamp.net" },
  { name: "inference labs", url: "https://inferencelabs.com" },
  { name: "xverse", url: "https://xverse.app" },
  { name: "zerolend", url: "https://zerolend.xyz" },
  { name: "bitflow", url: "https://bitflow.finance" },
  { name: "stacking dao", url: "https://stackingdao.com" },
  { name: "arch network", url: "https://arch.network" },
  { name: "scroll", url: "https://scroll.io" },
  { name: "estate protocol", url: "https://estateprotocol.com" },
  { name: "bitscrunch", url: "https://bitscrunch.com" },
];

export default function PortfolioPage() {
  const { isMenuOpen } = useMobileMenu();

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Mobile Header */}
      <MobileHeader />
      <div className="p-4">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-xl mb-3 mt-8 text-left font-medium">Portfolio</h1>
          <p className="text-gray-700 mb-1 text-left">
            i am grateful to founder friends who've allowed me to make small
            investments in their projects.
          </p>
          <p className="text-gray-700 mb-3 text-left">
            we typically write first checks ranging 100k-250k.
          </p>

          <ul className="list-disc pl-5 space-y-1 text-left marker:text-gray-300">
            {companies.map((company, index) => (
              <li key={index}>
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
                >
                  {company.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
