"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Publications", href: "/publications" },
  { name: "Investments", href: "/investments" },
  { name: "Shelf", href: "/shelf" },
  { name: "Coffee", href: "/coffee" },
  { name: "Contact", href: "/contact" },
];

const bottomLinks = [
  { name: "koodos labs", href: "#" },
  { name: "Tweet @ me", href: "#" },
  { name: "Connect on LinkedIn", href: "#" },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-black/90 backdrop-blur-sm rounded-lg"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span
            className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          />
          <span
            className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300">
            <div className="flex flex-col justify-between h-full py-16 px-6">
              <div>
                {/* Logo */}
                <div className="flex flex-col items-center mb-12">
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=64&h=64&facepad=2&q=80"
                    alt="Profile Logo"
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                  />
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => {
                    const isActive =
                      pathname === link.href ||
                      (link.href !== "/" && pathname.startsWith(link.href));
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-xl transition-colors duration-200 cursor-pointer hover:text-gray-600 ${
                          isActive
                            ? "text-black"
                            : link.name === "Publications"
                            ? "text-gray-400"
                            : "text-black"
                        }`}
                        style={{ letterSpacing: 0.5 }}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Links */}
              <div className="flex flex-col gap-3">
                {bottomLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-black transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
