"use client";

import Link from "next/link";
import MobileHeader from "@/components/MobileHeader";
import { useMobileMenu } from "../providers";

const companies = [
  { name: "SuperVerse", url: "https://superverse.com" },
  { name: "Manta Network", url: "https://manta.network" },
  { name: "IMAGINARY ONES", url: "https://www.imaginaryones.com" },
  { name: "DAREWISE", url: "https://www.darewise.com" },
  { name: "OPULOUS", url: "https://www.opulous.org" },
  { name: "Storm", url: "https://www.stormx.io" },
  { name: "AMBER", url: "https://www.ambergroup.io" },
  { name: "alchemy", url: "https://www.alchemy.com" },
  { name: "Acala", url: "https://acala.network" },
  { name: "Balancer", url: "https://balancer.fi" },
  { name: "Ankr", url: "https://www.ankr.com" },
  { name: "0x", url: "https://0x.org" },
  { name: "1inch", url: "https://1inch.io" },
  { name: "Bitso", url: "https://bitso.com" },
  { name: "Bitstamp", url: "https://www.bitstamp.net" },
  { name: "Inference Labs", url: "https://inferencelabs.com" },
  { name: "Xverse", url: "https://xverse.app" },
  { name: "Zerolend", url: "https://zerolend.xyz" },
  { name: "Bitflow", url: "https://bitflow.finance" },
  { name: "Stacking DAO", url: "https://stackingdao.com" },
  { name: "Arch Network", url: "https://arch.network" },
  { name: "Scroll", url: "https://scroll.io" },
  { name: "Estate Protocol", url: "https://estateprotocol.com" },
  { name: "Bitscrunch", url: "https://bitscrunch.com" },
];

export default function InvestmentsPage() {
  const { isMenuOpen } = useMobileMenu();

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Mobile Header */}
      <MobileHeader />
      <div className="p-8">
        <div className="max-w-7xl mx-auto w-full">
          <h3 className="text-2xl mb-4 mt-8 text-left font-medium">
            Investments
          </h3>
          <p className="mb-4 mt-8 text-left font-medium ">
            i am grateful to founder friends who've allowed me to make small
            investments in their projects.
          </p>
          <p className="text-gray-600 mb-8 text-left">
            we typically write first checks ranging 100k-250k.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-left">
            {companies.map((company, index) => (
              <li key={index}>
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-colors duration-200"
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
