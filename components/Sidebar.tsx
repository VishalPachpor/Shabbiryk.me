"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

const secondaryLinks = [
  { name: "Tweet @ me", href: "https://x.com/shabbiryk" },
  {
    name: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/shabbiryk/",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex w-60 h-screen bg-white flex-col fixed left-0 top-0 z-10 border-r border-gray-100 py-8 px-6">
      <div>
        {/* Logo - Small circular logo at the top */}
        <div className="flex flex-col items-center mb-12">
          <Link href="/" className="cursor-pointer">
            <img
              src="/side.gif"
              alt="Sidebar Logo"
              className="w-16 h-16 rounded-full object-cover shadow-md hover:shadow-lg transition-shadow duration-200"
            />
          </Link>
        </div>

        {/* Navigation Menu - Vertical navigation with links */}
        <nav className="flex flex-col gap-4">
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
                  className={`text-xl transition-colors duration-200 cursor-pointer hover:text-gray-600 ${
                    isActive ? "text-black" : "text-black"
                  }`}
                  style={{ letterSpacing: 0.5 }}
                >
                  {link.name}
                </a>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xl transition-colors duration-200 cursor-pointer hover:text-gray-600 ${
                  isActive ? "text-black" : "text-black"
                }`}
                style={{ letterSpacing: 0.5 }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Secondary Links - Below main nav, not in footer */}
        <div className="flex flex-col gap-3 mt-10">
          {secondaryLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-600 hover:text-black transition-colors duration-200 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
