"use client";

import Image from "next/image";
import Link from "next/link";
import MobileHeader from "@/components/MobileHeader";
import { useMobileMenu } from "../providers";

const companies = [
  { name: "SuperVerse", img: "/superverse.png", url: "https://superverse.com" },
  { name: "Manta Network", img: "/manta.png", url: "https://manta.network" },
  {
    name: "IMAGINARY ONES",
    img: "/imaginary.png",
    url: "https://www.imaginaryones.com",
  },
  { name: "DAREWISE", img: "/darewise.png", url: "https://www.darewise.com" },
  { name: "OPULOUS", img: "/opulous.png", url: "https://www.opulous.org" },
  { name: "Storm", img: "/storm.png", url: "https://www.stormx.io" },
  { name: "AMBER", img: "/amber.png", url: "https://www.ambergroup.io" },
  { name: "alchemy", img: "/alchemy.png", url: "https://www.alchemy.com" },
  { name: "Acala", img: "/acala.png", url: "https://acala.network" },
  { name: "Balancer", img: "/balancer.png", url: "https://balancer.fi" },
  { name: "Ankr", img: "/ankr.png", url: "https://www.ankr.com" },
  { name: "0x", img: "/0x.png", url: "https://0x.org" },
  { name: "1inch", img: "/1inch.png", url: "https://1inch.io" },
  { name: "Bitso", img: "/bitso.png", url: "https://bitso.com" },
  { name: "Bitstamp", img: "/bitstamp.png", url: "https://www.bitstamp.net" },
  {
    name: "Inference Labs",
    img: "/inference.png",
    url: "https://inferencelabs.com",
  },
  { name: "Xverse", img: "/xverse.png", url: "https://xverse.app" },
  { name: "Zerolend", img: "/zerolend.png", url: "https://zerolend.xyz" },
  { name: "Bitflow", img: "/btiflow.png", url: "https://bitflow.finance" },
  {
    name: "Stacking DAO",
    img: "/stackingdao.png",
    url: "https://stackingdao.com",
  },
  { name: "Arch Network", img: "/Arch.png", url: "https://arch.network" },
  { name: "Scroll", img: "/scroll.png", url: "https://scroll.io" },
  {
    name: "Estate Protocol",
    img: "/estate.png",
    url: "https://estateprotocol.com",
  },
  { name: "Bitscrunch", img: "/bitcrunch.png", url: "https://bitscrunch.com" },
];

export default function InvestmentsPage() {
  const { isMenuOpen } = useMobileMenu();

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Mobile Header */}
      <MobileHeader />
      <div className="p-8">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-xl mb-4 text-left">
            I am grateful to founder friends who've allowed me to make small
            investments in their projects
          </h1>
          <p className="text-gray-600 mb-8 text-left">
            We typically write first checks ranging 100k-250k
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7 w-full">
            {companies.map((company) => (
              <a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-200 rounded-2xl p-8 bg-white shadow-md hover:shadow-lg transition-all duration-200 flex flex-col items-center justify-center cursor-pointer hover:border-gray-300 min-h-[180px]"
              >
                <div className="w-20 h-20 flex items-center justify-center mb-6">
                  <Image
                    src={company.img}
                    alt={company.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="text-gray-900 text-base text-center font-medium w-full break-words">
                  {company.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
