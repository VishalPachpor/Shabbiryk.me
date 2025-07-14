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

export default function InvestmentsPage() {
  const { isMenuOpen } = useMobileMenu();

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Mobile Header */}
      <MobileHeader />
      <div className="p-8">
        <div className="max-w-7xl mx-auto w-full">
          <h3 className="text-xl mb-4 mt-8 text-left font-medium tracking-wide">
            investments
          </h3>
          <p className="mb-2 mt-2 text-left font-medium tracking-wide">
            i am grateful to founder friends who've allowed me to make small
            investments in their projects.
          </p>
          <p className="text-gray-600 mb-8 text-left tracking-wide">
            we typically write first checks ranging 100k-250k.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-left">
            {companies.map((company, index) => (
              <li key={index} className="tracking-wide">
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-800 transition-colors duration-200 tracking-wide"
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
