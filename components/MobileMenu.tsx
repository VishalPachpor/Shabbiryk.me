"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMobileMenu } from "@/app/providers";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Publications", href: "/publications" },
  { name: "Investments", href: "/investments" },
  {
    name: "Curriculum Vitae",
    href: "https://docs.google.com/document/d/1VIBwHr-z3-Eb1Ghfqf6DASF0A6bAVyCjUd83-hjWcy4/edit?tab=t.0",
    external: true,
  },
];

const bottomLinks = [
  { name: "Tweet @ me", href: "https://x.com/shabbiryk", external: true },
  {
    name: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/shabbiryk/",
    external: true,
  },
];

const MobileMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useMobileMenu();
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-gray-400/90 transition-all duration-300 animate-fade-in">
          <div
            className="absolute inset-0 bg-gray-400/90"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center gap-8 w-full">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                if (link.external) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl font-semibold text-white text-center"
                      style={{ letterSpacing: 0.5 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-semibold text-white text-center"
                    style={{ letterSpacing: 0.5 }}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="flex flex-col items-center gap-4 mt-10 w-full">
              {bottomLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg text-white text-center opacity-80 hover:opacity-100 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
