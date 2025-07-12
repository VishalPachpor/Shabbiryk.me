"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Publications", href: "/publications" },
  { name: "Investments", href: "/investments" },
  { name: "Shelf", href: "/shelf" },
];

const bottomLinks = [
  { name: "Tweet @ me", href: "https://x.com/shabbiryk" },
  { name: "Connect on LinkedIn", href: "https://www.linkedin.com/in/shabbiryk/" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex w-60 h-screen bg-white flex-col justify-between fixed left-0 top-0 z-10 border-r border-gray-100 py-8 px-6">
      <div>
        {/* Logo - Small circular logo at the top */}
        <div className="flex flex-col items-center mb-12">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=64&h=64&facepad=2&q=80"
            alt="Profile Logo"
            className="w-16 h-16 rounded-full object-cover shadow-md"
          />
        </div>

        {/* Navigation Menu - Vertical navigation with links */}
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xl font-semibold transition-colors duration-200 cursor-pointer hover:text-gray-600 ${
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

      {/* Secondary Links - Bottom section */}
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
  );
};

export default Sidebar;
