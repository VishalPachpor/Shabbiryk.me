"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  lifeTimelineMilestones,
  type LifeTimelineMilestone,
} from "@/data/lifeTimeline";

// Wheel release and responsive layout are adapted from Evil Rabbit's
// Lifeline embedded mode (MIT). See THIRD_PARTY_NOTICES.md.

const CARD_WIDTH = 304;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function MilestoneContent({
  milestone,
  compact = false,
  active = false,
}: {
  milestone: LifeTimelineMilestone;
  compact?: boolean;
  active?: boolean;
}) {
  const organization = milestone.href ? (
    <a
      href={milestone.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-medium underline decoration-transparent underline-offset-4 transition-colors hover:text-gray-950 hover:decoration-gray-300 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 ${
        active ? "text-gray-950" : "text-gray-500 group-hover:text-gray-950 group-focus-within:text-gray-950"
      }`}
    >
      {milestone.organization}
    </a>
  ) : (
    milestone.organization
  );

  return (
    <div className={compact ? "pr-2" : "pr-8"}>
      <p className="text-[11px] font-medium uppercase leading-4 tracking-[0.08em] text-gray-400 transition-colors group-hover:text-gray-600 group-focus-within:text-gray-600">
        {milestone.dateLabel}
      </p>
      <h3 className={`mt-2 text-base font-medium leading-6 transition-colors ${active ? "text-gray-950" : "text-gray-500 group-hover:text-gray-950 group-focus-within:text-gray-950"}`}>
        {organization}
      </h3>
      {milestone.role && (
        <p className="mt-0.5 text-[13px] leading-5 text-gray-500">
          {milestone.role}
        </p>
      )}
      <p className={`mt-3 text-sm leading-[1.6] transition-colors ${active ? "text-gray-700" : "text-gray-400 group-hover:text-gray-600 group-focus-within:text-gray-600"}`}>
        {milestone.description}
      </p>
      {milestone.secondary && (
        <p className="mt-2 text-[13px] leading-[1.55] text-gray-500">
          {milestone.secondary}
        </p>
      )}
    </div>
  );
}

export default function LifeTimeline() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const desktopCardsRef = useRef<(HTMLLIElement | null)[]>([]);
  const mobileScrollerRef = useRef<HTMLDivElement>(null);
  const mobileCardsRef = useRef<(HTMLLIElement | null)[]>([]);
  const offsetRef = useRef(0);
  const maxOffsetRef = useRef(0);
  const dragRef = useRef<{
    pointerId: number;
    x: number;
    offset: number;
  } | null>(null);
  const [offset, setOffset] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  const updateActiveFromOffset = useCallback((nextOffset: number) => {
    const cards = desktopCardsRef.current;
    if (!viewportRef.current || cards.length === 0) return;

    if (nextOffset <= 1) {
      setActiveIndex(0);
      return;
    }

    if (nextOffset >= maxOffsetRef.current - 1) {
      setActiveIndex(lifeTimelineMilestones.length - 1);
      return;
    }

    const readingPoint = nextOffset + 48;
    let current = 0;

    cards.forEach((card, index) => {
      if (!card) return;
      if (card.offsetLeft <= readingPoint) current = index;
    });

    setActiveIndex(current);
  }, []);

  const applyOffset = useCallback(
    (value: number) => {
      const next = clamp(value, 0, maxOffsetRef.current);
      offsetRef.current = next;
      setOffset(next);
      updateActiveFromOffset(next);
      return next;
    },
    [updateActiveFromOffset],
  );

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    maxOffsetRef.current = Math.max(0, track.scrollWidth - viewport.clientWidth);
    applyOffset(offsetRef.current);
  }, [applyOffset]);

  useLayoutEffect(() => {
    measure();
    const observer = new ResizeObserver(measure);
    if (viewportRef.current) observer.observe(viewportRef.current);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreferences = () => {
      setIsMobile(mobileQuery.matches);
      setPrefersReducedMotion(motionQuery.matches);
    };

    updatePreferences();
    mobileQuery.addEventListener("change", updatePreferences);
    motionQuery.addEventListener("change", updatePreferences);

    return () => {
      mobileQuery.removeEventListener("change", updatePreferences);
      motionQuery.removeEventListener("change", updatePreferences);
    };
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const onWheel = (event: WheelEvent) => {
      const delta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;
      const current = offsetRef.current;
      const next = clamp(current + delta, 0, maxOffsetRef.current);
      const pushingPastStart = next === current && delta < 0;
      const pushingPastEnd = next === current && delta > 0;

      if (pushingPastStart || pushingPastEnd || delta === 0) return;

      event.preventDefault();
      event.stopPropagation();
      applyOffset(next);
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => viewport.removeEventListener("wheel", onWheel);
  }, [applyOffset]);

  const goTo = useCallback(
    (index: number) => {
      const nextIndex = clamp(
        index,
        0,
        lifeTimelineMilestones.length - 1,
      );
      setActiveIndex(nextIndex);
      setAnnouncement(
        `${lifeTimelineMilestones[nextIndex].dateLabel}: ${lifeTimelineMilestones[nextIndex].organization}`,
      );

      if (isMobile) {
        const scroller = mobileScrollerRef.current;
        const card = mobileCardsRef.current[nextIndex];
        if (!scroller || !card) return;
        scroller.scrollTo({
          top: Math.max(0, card.offsetTop - 20),
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
        return;
      }

      const card = desktopCardsRef.current[nextIndex];
      if (!card) return;
      applyOffset(card.offsetLeft);
    },
    [applyOffset, isMobile, prefersReducedMotion],
  );

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      goTo(activeIndex - 1);
    }
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      goTo(activeIndex + 1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      goTo(lifeTimelineMilestones.length - 1);
    }
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if ((event.target as Element).closest("a, button")) return;
    dragRef.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      offset: offsetRef.current,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    applyOffset(drag.offset - (event.clientX - drag.x));
  };

  const handlePointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.pointerId !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    dragRef.current = null;
  };

  const handleMobileScroll = () => {
    const scroller = mobileScrollerRef.current;
    if (!scroller) return;
    const readingPoint = scroller.scrollTop + 80;
    let nearest = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    mobileCardsRef.current.forEach((card, index) => {
      if (!card) return;
      const distance = Math.abs(card.offsetTop - readingPoint);
      if (distance < nearestDistance) {
        nearest = index;
        nearestDistance = distance;
      }
    });
    setActiveIndex(nearest);
  };

  return (
    <section className="w-full px-2 pb-20 pt-10 sm:px-4 md:px-0 md:pb-28 md:pt-14">
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </p>

      <div
        ref={viewportRef}
        role="region"
        aria-label="Life and career timeline"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        className="relative hidden h-[500px] w-full cursor-grab touch-pan-y select-none overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 md:block"
        style={{
          WebkitMaskImage:
            offset > 24
              ? "linear-gradient(to right, transparent 0, black 72px, black calc(100% - 88px), transparent 100%)"
              : "linear-gradient(to right, black 0, black calc(100% - 88px), transparent 100%)",
          maskImage:
            offset > 24
              ? "linear-gradient(to right, transparent 0, black 72px, black calc(100% - 88px), transparent 100%)"
              : "linear-gradient(to right, black 0, black calc(100% - 88px), transparent 100%)",
        }}
      >
        <div
          ref={trackRef}
          className="life-timeline-track relative flex h-full w-max will-change-transform"
          style={{ transform: `translate3d(${-offset}px, 0, 0)` }}
        >
          <div
            className="pointer-events-none absolute left-0 right-0 top-[86px] border-t border-dashed border-gray-300"
            aria-hidden="true"
          />
          <ol className="life-timeline-list relative flex h-full">
            {lifeTimelineMilestones.map((milestone, index) => {
              const isActive = index === activeIndex;
              const nextYear = lifeTimelineMilestones[index + 1]?.year;
              const yearGap = nextYear ? nextYear - milestone.year : 0;
              const width =
                yearGap > 5 ? 410 : yearGap > 1 ? 340 : CARD_WIDTH;

              return (
                <li
                  key={milestone.id}
                  ref={(node) => {
                    desktopCardsRef.current[index] = node;
                  }}
                  aria-current={isActive ? "step" : undefined}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocusCapture={() => setActiveIndex(index)}
                  className={`life-timeline-milestone group relative shrink-0 pl-1 pr-8 pt-[122px] ${isActive ? "is-active" : ""}`}
                  style={{ width }}
                >
                  {yearGap > 1 &&
                    Array.from({ length: yearGap - 1 }, (_, tickIndex) => {
                      const yearOffset = tickIndex + 1;

                      return (
                        <span
                          key={`${milestone.id}-year-${milestone.year + yearOffset}`}
                          className="pointer-events-none absolute top-[86px] h-1.5 w-px -translate-y-1/2 bg-gray-300/80"
                          style={{
                            left: `${(yearOffset / yearGap) * 100}%`,
                          }}
                          aria-hidden="true"
                        />
                      );
                    })}
                  <span
                    className={`absolute left-1 top-9 text-xs tabular-nums transition-colors ${
                      isActive ? "font-medium text-gray-900" : "text-gray-400 group-hover:text-gray-800 group-focus-within:text-gray-800"
                    }`}
                    aria-hidden="true"
                  >
                    {milestone.year}
                  </span>
                  <span
                    className={`absolute left-1 top-[86px] h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-white transition-colors ${
                      isActive ? "bg-[#b97449]" : "bg-gray-300 group-hover:bg-gray-600 group-focus-within:bg-gray-600"
                    }`}
                    aria-hidden="true"
                  />
                  <MilestoneContent milestone={milestone} active={isActive} />
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <div
        ref={mobileScrollerRef}
        role="region"
        aria-label="Life and career timeline"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onScroll={handleMobileScroll}
        className="life-timeline-mobile relative h-[680px] overflow-y-auto overscroll-auto py-7 pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b97449]/60 md:hidden"
      >
        <div
          className="pointer-events-none absolute bottom-7 left-[5px] top-7 w-px bg-gray-200"
          aria-hidden="true"
        />
        <ol className="relative space-y-10">
          {lifeTimelineMilestones.map((milestone, index) => {
            const isActive = index === activeIndex;
            return (
              <li
                key={milestone.id}
                ref={(node) => {
                  mobileCardsRef.current[index] = node;
                }}
                aria-current={isActive ? "step" : undefined}
                className="relative pl-8"
              >
                <span
                  className={`absolute left-0 top-1 h-[11px] w-[11px] rounded-full border-2 border-white ${
                    isActive ? "bg-[#b97449]" : "bg-gray-300"
                  }`}
                  aria-hidden="true"
                />
                <MilestoneContent milestone={milestone} compact active={isActive} />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
