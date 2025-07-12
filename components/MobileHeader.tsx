"use client";

import Link from "next/link";
import { useMobileMenu } from "@/app/providers";

const MobileHeader = () => {
  const { isMenuOpen, setIsMenuOpen } = useMobileMenu();

  return (
    <div className="md:hidden w-full flex items-center justify-between px-4 py-4 z-50">
      {/* Ethereum Logo */}
      <Link
        href="/"
        className={`w-12 h-12 transition-opacity duration-300 ${isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <img
          src="/ethereum.png"
          alt="Ethereum Logo"
          className="w-full h-full cursor-pointer"
        />
      </Link>
      {/* Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="w-12 h-12 flex items-center justify-center text-gray-400 text-lg font-medium rounded-lg bg-transparent"
      >
        <span className="sr-only">Menu</span>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
          <line x1="4" x2="20" y1="12" y2="12"/>
          <line x1="4" x2="20" y1="6" y2="6"/>
          <line x1="4" x2="20" y1="18" y2="18"/>
        </svg>
      </button>
    </div>
  );
};

export default MobileHeader;
