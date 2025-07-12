"use client";

import Link from "next/link";
import { useMobileMenu } from "@/app/providers";

const MobileHeader = () => {
  const { isMenuOpen } = useMobileMenu();

  return (
    <div className="md:hidden fixed top-4 left-0 w-full flex items-center px-4 z-50">
      {/* Ethereum Logo */}
      <Link
        href="/"
        className={`w-12 h-12 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <img
          src="/ethereum.png"
          alt="Ethereum Logo"
          className="w-full h-full cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default MobileHeader;
