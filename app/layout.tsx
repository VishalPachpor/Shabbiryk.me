import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Sidebar from "@/components/Sidebar";
import MobileMenu from "@/components/MobileMenu";

export const metadata: Metadata = {
  title: "shabbiryk",
  description: "shabbiryk portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Proxima+Nova:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/ethereum.png" />
      </head>
      <body>
        <Providers>
          <div className="flex min-h-screen bg-white">
            <div className="hidden md:block">
              <Sidebar />
            </div>
            <div className="block md:hidden">
              <MobileMenu />
            </div>
            <main className="flex-1 flex justify-center px-6 md:ml-60">
              <div className="w-full max-w-5xl">{children}</div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
