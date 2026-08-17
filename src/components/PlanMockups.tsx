"use client";

import { useState, useTransition } from "react";

const pages = [
  {
    id: "includes",
    label: "What your plan includes",
    description:
      "Everything you need to understand the trip before you book — and use it while you travel.",
    items: [
      ["Route strategy", "Best order and pacing for your dates and destinations."],
      ["Daily travel plan", "A clear structure for each day, with room to adjust."],
      ["Activities & timing", "What to do, in what order, and when."],
      ["Stay guidance", "Where to base yourself for route, budget, and vibe."],
      ["Transport & booking", "How to get around, and what to lock in early."],
      ["Food & experiences", "Dining and experience ideas that fit your pace."],
    ],
  },
  {
    id: "route",
    label: "Route strategy",
    description:
      "How the trip should flow from place to place — intentional, not rushed.",
    items: [
      ["Best route order", "The most efficient sequence based on geography, time, and cost."],
      ["What fits", "Cities, stops, or day trips that suit your timeline."],
      ["What to skip", "Anything that would feel packed or unrealistic."],
      ["Why it works", "Less backtracking, better pacing, a smoother trip."],
    ],
  },
  {
    id: "daily",
    label: "Daily travel plan",
    description:
      "A realistic day-by-day structure — clear enough to follow, flexible enough to change.",
    items: [
      ["Morning", "The main priority, timed when energy is usually highest."],
      ["Afternoon", "A natural next step — sights, food, or walks by area."],
      ["Evening", "Dinner and lighter plans that match the day’s pace."],
      ["Flexibility", "Room to slow down or add something nearby."],
    ],
  },
  {
    id: "stay",
    label: "Stay, transport & booking",
    description:
      "Where to stay, how to move, and what to lock in — without the logistics stress.",
    items: [
      ["Stay guidance", "Recommended areas for route, budget, safety, and vibe."],
      ["Transport strategy", "How to move between places and around cities."],
      ["Booking considerations", "What to book early, and what can stay flexible."],
      ["Timing notes", "Simple cues so logistics stay calm."],
    ],
  },
] as const;

export default function PlanMockups({
  showIntro = true,
}: {
  showIntro?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [, startTransition] = useTransition();
  const active = pages[index];

  function goTo(next: number) {
    startTransition(() => {
      setIndex((next + pages.length) % pages.length);
    });
  }

  return (
    <div>
      {showIntro ? (
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl leading-[1.12] text-ink md:text-5xl">
            What&apos;s inside
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-muted">
            A clear look at how your Complete Plan is structured — so you know what
            you&apos;re getting before you start.
          </p>
        </div>
      ) : null}

      <div
        className={`grid w-full gap-10 md:grid-cols-[minmax(200px,240px)_minmax(0,1fr)] md:gap-14 lg:gap-20 ${
          showIntro ? "mt-14 md:mt-16" : ""
        }`}
      >
        <nav aria-label="Plan sections">
          <ol>
            {pages.map((page, i) => {
              const selected = i === index;
              return (
                <li key={page.id}>
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    className={`w-full border-l-2 py-3.5 pl-4 text-left transition-colors ${
                      selected
                        ? "border-teal"
                        : "border-beige/70 hover:border-teal/40"
                    }`}
                    aria-current={selected ? "true" : undefined}
                  >
                    <span className="block text-[0.65rem] font-medium tracking-[0.18em] text-muted uppercase">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`mt-1 block font-serif text-lg leading-snug ${
                        selected ? "text-ink" : "text-muted"
                      }`}
                    >
                      {page.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="min-w-0">
          <h3 className="font-serif text-3xl leading-[1.12] text-ink md:text-4xl">
            {active.label}
          </h3>
          <p className="mt-3 max-w-xl text-base font-light leading-7 text-muted md:text-lg md:leading-8">
            {active.description}
          </p>

          <ul className="mt-8 border-t border-beige">
            {active.items.map(([title, body]) => (
              <li
                key={title}
                className="grid gap-1 border-b border-beige py-4 md:grid-cols-[minmax(160px,220px)_minmax(0,1fr)] md:items-baseline md:gap-10"
              >
                <p className="font-serif text-xl leading-snug text-teal">{title}</p>
                <p className="text-[0.95rem] font-light leading-7 text-muted">{body}</p>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm font-light text-muted">
            Exact structure may vary by destination and preferences.
          </p>
        </div>
      </div>
    </div>
  );
}
