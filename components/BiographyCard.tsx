"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { MapPin } from "lucide-react";

const statistics = [
  "9 GP commitments",
  "4 SPACs",
  "24 allocations in direct and secondaries",
];

function StatisticLine({ index }: { index: number }) {
  const [value, ...labelParts] = statistics[index].split(" ");

  return (
    <span className="flex items-baseline gap-2 leading-6">
      <span className="text-base font-medium tabular-nums text-gray-300">
        {value}
      </span>
      <span className="text-sm italic tracking-[0.01em] text-gray-500">
        {labelParts.join(" ")}
      </span>
    </span>
  );
}

export default function BiographyCard() {
  const biographyId = useId();
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentStatistic, setCurrentStatistic] = useState(0);
  const [previousStatistic, setPreviousStatistic] = useState<number | null>(null);
  const [isInteractionPaused, setIsInteractionPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const transitionTimer = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const transitionTo = useCallback((getNext: (current: number) => number) => {
    if (transitionTimer.current !== null) {
      window.clearTimeout(transitionTimer.current);
    }

    setCurrentStatistic((current) => {
      setPreviousStatistic(current);
      return getNext(current);
    });

    transitionTimer.current = window.setTimeout(() => {
      setPreviousStatistic(null);
      transitionTimer.current = null;
    }, 350);
  }, []);

  const isPaused = isInteractionPaused;

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;

    const interval = window.setInterval(() => {
      transitionTo((current) => (current + 1) % statistics.length);
    }, 1500);

    return () => window.clearInterval(interval);
  }, [isPaused, prefersReducedMotion, transitionTo]);

  useEffect(() => {
    return () => {
      if (transitionTimer.current !== null) {
        window.clearTimeout(transitionTimer.current);
      }
    };
  }, []);

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsInteractionPaused(false);
    }
  };

  return (
    <section className="w-full rounded-md bg-black p-6 text-white shadow-xl sm:p-8 md:p-10">
      <h1 className="text-lg font-medium leading-relaxed text-white">
        Shabbir Khan
      </h1>

      <div className="mt-5 space-y-4 text-[14px] leading-[1.65] text-gray-300">
        <p className="text-[14px] font-normal leading-[1.65] text-gray-200">
          I started writing about institutional finance when I was 14.
        </p>
        <p className="text-[14px] leading-[1.65] text-gray-300">
          We were living in Kuwait around the 2008 financial crisis. We were directly hit, and my dad and the rest of us moved to Dubai around that time. I didn’t understand all of it then, but I became quite consumed by what was happening underneath the headlines. How did banks work? Where did liquidity go? How do they size their bets?
        </p>
        <p className="text-[14px] leading-[1.65] text-gray-300">
          I remember reading Al Jazeera’s paper on Bear Stearns, JPMorgan and Lehman, trying to make sense of how one event led to another. Somewhere along the way, reading the news became a habit of researching whatever the news didn’t explain.
        </p>
      </div>

      <div
        id={biographyId}
        aria-hidden={!isExpanded}
        className={`grid overflow-hidden ${
          prefersReducedMotion
            ? ""
            : "transition-[grid-template-rows,opacity] duration-500 ease-out"
        } ${
          isExpanded
            ? "mt-4 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="space-y-4 text-[14px] leading-[1.65] text-gray-300">
            <p className="text-[14px] leading-[1.65] text-gray-300">
              That eventually took me to State Street. My work sat between writing and research, within a small team of seven working on digital assets. I was getting close to the institutions I had spent years reading about, this time with work to deliver and people who would question it. A useful education.
            </p>
            <p className="text-[14px] leading-[1.65] text-gray-300">
              At CoinSwitch Ventures, I moved closer to investing. As an investment lead, I spent my time evaluating founders, writing theses and helping teams work towards their first institutional capital. Eventually, I wanted to take more responsibility for the decisions themselves. We raised our first fund at EAK Ventures, then went on to a second.
            </p>
            <p className="text-[14px] leading-[1.65] text-gray-300">
              One of our first anchor LPs was the family office I now advise. We delivered good returns for them, got to know each other well, and the relationship grew. What began as a fund commitment became an ongoing conversation about where to invest, who to back and, occasionally, when to leave things alone.
            </p>
            <p className="text-[14px] leading-[1.65] text-gray-300">
              Through the funds and the private office, I worked with GPs, helped set up SPVs, took private and angel positions, and facilitated secondary transactions. Each taught me something different about patience and judgment.
            </p>
            <p className="text-[14px] leading-[1.65] text-gray-300">
              Some of the work I value most started with a founder asking for a second opinion. Since 2022, I’ve helped 20+ teams secure their first institutional checks, often simply because I liked what they were building and thought I could be useful. Along the way, I’ve written 60+ investment memos, evolved our investment theses and worked through the less visible parts between diligence and execution.
            </p>
            <p className="text-[14px] leading-[1.65] text-gray-300">
              Lately, I started Recallr AI. After spending years asking founders questions, I now get to answer a few myself. I’m working on a problem I’ve repeatedly encountered: how to turn years of proprietary data, research and institutional knowledge into something people can actually use. It has got me working across research, product and distribution in the same day.
            </p>
            <p className="text-[14px] leading-[1.65] text-gray-300">
              Looking back, one thing led to the next. I’m still curious about how institutions work, how people make decisions and what earns their trust. I just get to participate a little more now.
            </p>
          </div>
        </div>
      </div>

      {!isExpanded && (
        <button
          type="button"
          aria-expanded="false"
          aria-controls={biographyId}
          onClick={() => setIsExpanded(true)}
          className="mt-4 rounded-sm text-sm text-[#c8875b] underline decoration-[#c8875b]/50 underline-offset-4 transition-colors hover:text-[#dda078] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8875b] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          A little more about me
        </button>
      )}

      <div
        className="mt-7 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
        tabIndex={0}
        aria-label="Rotating investment statistics. Hover or focus to pause."
        onMouseEnter={() => setIsInteractionPaused(true)}
        onMouseLeave={() => setIsInteractionPaused(false)}
        onFocusCapture={() => setIsInteractionPaused(true)}
        onBlurCapture={handleBlur}
      >
        {prefersReducedMotion ? (
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {statistics.map((statistic, index) => (
              <StatisticLine key={statistic} index={index} />
            ))}
          </div>
        ) : (
          <div
            className="relative min-h-[2rem] overflow-hidden"
            aria-live={isPaused ? "polite" : "off"}
            aria-atomic="true"
          >
            {previousStatistic !== null && (
              <div
                className="biography-statistic-exit absolute inset-0"
                aria-hidden="true"
              >
                <StatisticLine index={previousStatistic} />
              </div>
            )}
            <div
              key={currentStatistic}
              className="biography-statistic-enter absolute inset-0"
            >
              <StatisticLine index={currentStatistic} />
            </div>
          </div>
        )}

        <p className="mt-2 text-xs leading-5 text-gray-400">
          CFA charterholder <span aria-hidden="true">·</span> Kauffman Fellow <span aria-hidden="true">·</span> VC Lab graduate
        </p>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
        <MapPin className="h-4 w-4 text-white" aria-hidden="true" />
        <span className="text-sm text-gray-400">Abu Dhabi / San Fran</span>
      </div>
    </section>
  );
}
