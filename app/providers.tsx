"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { createContext, useContext, useState } from "react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const queryClient = new QueryClient();

// Create context for mobile menu state
interface MobileMenuContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(
  undefined
);

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext);
  if (context === undefined) {
    throw new Error("useMobileMenu must be used within a MobileMenuProvider");
  }
  return context;
};

// Create context for shared audio state
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

export const useSharedAudio = () => {
  const context = useContext(SharedAudioContext);
  if (context === undefined) {
    throw new Error("useSharedAudio must be used within a SharedAudioProvider");
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

export const SharedAudioProvider = ({ children }: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(60);

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

export default function Providers({ children }: { children: React.ReactNode }) {
  // Initialize smooth scrolling
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
