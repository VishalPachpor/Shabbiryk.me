import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "shabbiryk",
  description: "shabbiryk portfolio website",
};

const interTight = Inter_Tight({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
          
      </head>
      <body className={interTight.className}>
        <Providers>
          <div className="flex min-h-screen bg-white">
            <Sidebar />
            <main className="flex-1 flex justify-center px-6">
              <div className="w-full max-w-5xl">{children}</div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
