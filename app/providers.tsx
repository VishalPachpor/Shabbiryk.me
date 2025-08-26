"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

// --------------------
// Query Client
// --------------------
const queryClient = new QueryClient();

// --------------------
// Mobile Menu Context
// --------------------
interface MobileMenuContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(
  undefined
);

export const useMobileMenu = (): MobileMenuContextType => {
  const context = useContext(MobileMenuContext);
  if (!context) {
    throw new Error("useMobileMenu must be used within a MobileMenuProvider");
  }
  return context;
};

export const MobileMenuProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

// --------------------
// Shared Audio Context
// --------------------
interface SharedAudioContextType {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  currentTime: number;
  setCurrentTime: (time: number) => void;
  duration: number;
  setDuration: (dur: number) => void;
  volume: number;
  setVolume: (vol: number) => void;
}

const SharedAudioContext = createContext<SharedAudioContextType | undefined>(
  undefined
);

export const useSharedAudio = (): SharedAudioContextType => {
  const context = useContext(SharedAudioContext);
  if (!context) {
    throw new Error("useSharedAudio must be used within a SharedAudioProvider");
  }
  return context;
};

export const SharedAudioProvider = ({ children }: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(60); // Default to 60%

  return (
    <SharedAudioContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        currentTime,
        setCurrentTime,
        duration,
        setDuration,
        volume,
        setVolume,
      }}
    >
      {children}
    </SharedAudioContext.Provider>
  );
};

// --------------------
// Root Providers
// --------------------
export default function Providers({ children }: { children: ReactNode }) {
  // Enable smooth scrolling globally
  useSmoothScroll();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MobileMenuProvider>
            <SharedAudioProvider>
              {/* Global Toasters */}
              <Toaster />
              <Sonner />

              {children}
            </SharedAudioProvider>
          </MobileMenuProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
