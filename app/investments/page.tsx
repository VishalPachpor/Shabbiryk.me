"use client";

import MobileHeader from "@/components/MobileHeader";
import { useMobileMenu } from "../providers";

const companies = [
  { name: "PathPulse", url: "https://pathpulse.ai/" },
  { name: "TrueNorth", url: "https://x.com/get_truenorth" },
  { name: "PrismaX", url: "https://x.com/PrismaXai" },
  { name: "Bitrobot", url: "https://x.com/BitRobotNetwork" },
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

          <ul className="list-disc pl-5 space-y-1 text-left marker:text-gray-300">
            {companies.map((company, index) => (
              <li key={index}>
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-600 hover:underline transition-colors duration-200"
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
