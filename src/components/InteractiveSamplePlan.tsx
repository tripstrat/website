"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useTransition } from "react";
import {
  sampleDays,
  sampleFood,
  samplePlanMeta,
  samplePractical,
  sampleStay,
  sampleTabs,
  type SampleTabId,
} from "@/lib/sample-plan";

/** Interactive sample plan booklet. Swap back to <PlanMockups /> to revert. */
export default function InteractiveSamplePlan({
  showIntro = true,
}: {
  showIntro?: boolean;
}) {
  const [tab, setTab] = useState<SampleTabId>("overview");
  const [dayIndex, setDayIndex] = useState(0);
  const [stayIndex, setStayIndex] = useState(0);
  const [openNote, setOpenNote] = useState<"timing" | "transit" | "flex" | null>(
    "timing",
  );
  const [pending, startTransition] = useTransition();

  const tabIndex = sampleTabs.findIndex((t) => t.id === tab);
  const day = sampleDays[dayIndex];
  const stay = sampleStay.areas[stayIndex];

  function goTab(id: SampleTabId) {
    startTransition(() => {
      setTab(id);
      setOpenNote("timing");
    });
  }

  function stepTab(dir: -1 | 1) {
    const next = sampleTabs[tabIndex + dir];
    if (next) goTab(next.id);
  }

  return (
    <div>
      {showIntro ? (
        <>
          <h2 className="text-center font-serif text-4xl leading-[1.12] text-ink md:text-5xl">
            Your TripStrat plan
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg font-light leading-8 text-muted">
            Open a sample Complete Plan and click through it — the way a finished
            plan is meant to be used.
          </p>
        </>
      ) : null}

      <div
        className={`relative mx-auto max-w-5xl ${showIntro ? "mt-12 md:mt-16" : ""}`}
      >
        {/* Booklet chrome */}
        <div className="overflow-hidden bg-[#fffcf6] shadow-[0_30px_80px_rgba(31,42,39,0.1)] ring-1 ring-beige/80">
          {/* Header bar */}
          <div className="flex items-center justify-between gap-4 border-b border-beige/80 px-5 py-4 md:px-8">
            <div>
              <p className="text-[0.65rem] font-medium tracking-[0.22em] text-teal uppercase">
                Sample plan
              </p>
              <p className="mt-1 font-serif text-lg text-ink md:text-xl">
                {samplePlanMeta.title}
              </p>
            </div>
            <p className="hidden text-sm font-light text-muted sm:block">
              {tabIndex + 1} / {sampleTabs.length}
            </p>
          </div>

          {/* Interactive step rail */}
          <div className="flex gap-0 overflow-x-auto border-b border-beige/80">
            {sampleTabs.map((item, index) => {
              const active = item.id === tab;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTab(item.id)}
                  className={`relative min-w-[7.5rem] flex-1 px-3 py-4 text-left transition-colors md:px-5 ${
                    active ? "bg-ivory" : "hover:bg-ivory/60"
                  }`}
                >
                  <span className="block text-[0.65rem] tracking-[0.18em] text-muted uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`mt-1 block font-serif text-base md:text-lg ${
                      active ? "text-ink" : "text-muted"
                    }`}
                  >
                    {item.label}
                  </span>
                  {active ? (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-teal" />
                  ) : null}
                </button>
              );
            })}
          </div>

          {/* Page body */}
          <div
            className={`min-h-[34rem] transition-opacity duration-300 ${
              pending ? "opacity-50" : "opacity-100"
            }`}
          >
            {tab === "overview" ? (
              <div>
                <div className="relative h-56 md:h-80">
                  <Image
                    src={samplePlanMeta.image}
                    alt={samplePlanMeta.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 1024px, 100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(0,24,24,0.72)_0%,rgba(0,32,32,0.35)_55%,rgba(0,32,32,0.15)_100%)]" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                    <p className="text-[0.68rem] tracking-[0.22em] text-cream/75 uppercase">
                      Tokyo · 8 days · Couple · Moderate
                    </p>
                    <h3 className="mt-3 max-w-lg font-serif text-4xl leading-tight text-cream md:text-5xl">
                      Softly Structured
                    </h3>
                  </div>
                </div>

                <div className="grid gap-10 p-6 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:p-10">
                  <div>
                    <p className="text-lg font-light leading-8 text-ink">
                      {samplePlanMeta.subtitle}
                    </p>
                    <p className="mt-6 text-sm font-light leading-7 text-muted">
                      {samplePlanMeta.howToUse}
                    </p>
                  </div>

                  <div>
                    <p className="text-[0.68rem] font-medium tracking-[0.2em] text-teal uppercase">
                      Click a stretch of the route
                    </p>
                    <div className="mt-4 space-y-1">
                      {samplePlanMeta.route.map((item, index) => (
                        <button
                          key={item.days}
                          type="button"
                          onClick={() => {
                            const map = [0, 0, 2, 3, 4, 6, 7];
                            setDayIndex(map[index] ?? 0);
                            goTab("days");
                          }}
                          className="group flex w-full items-baseline justify-between gap-4 border-b border-beige/70 py-3.5 text-left transition-colors hover:border-teal"
                        >
                          <span className="text-sm text-teal">{item.days}</span>
                          <span className="flex-1 font-serif text-lg text-ink group-hover:text-teal">
                            {item.areas}
                          </span>
                          <span className="text-teal opacity-0 transition-opacity group-hover:opacity-100">
                            →
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {tab === "days" ? (
              <div className="grid md:grid-cols-[5.5rem_1fr]">
                <div className="flex gap-1 overflow-x-auto border-b border-beige p-3 md:flex-col md:overflow-visible md:border-r md:border-b-0 md:p-4">
                  {sampleDays.map((item, index) => (
                    <button
                      key={item.day}
                      type="button"
                      onClick={() => setDayIndex(index)}
                      className={`flex h-12 w-12 shrink-0 flex-col items-center justify-center transition-colors md:h-14 md:w-full ${
                        index === dayIndex
                          ? "bg-teal text-cream"
                          : "text-muted hover:bg-ivory hover:text-ink"
                      }`}
                    >
                      <span className="text-[0.6rem] tracking-wider uppercase opacity-70">
                        Day
                      </span>
                      <span className="font-serif text-xl leading-none">
                        {item.day}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="p-6 md:p-10">
                  <p className="text-[0.68rem] tracking-[0.2em] text-teal uppercase">
                    Day {day.day} of 8
                  </p>
                  <h3 className="mt-3 font-serif text-3xl leading-tight text-ink md:text-4xl">
                    {day.title}
                  </h3>
                  <p className="mt-3 text-base font-light text-muted">{day.theme}</p>

                  <div className="mt-10 space-y-8">
                    {(
                      [
                        ["Morning", day.morning],
                        ["Afternoon", day.afternoon],
                        ["Evening", day.evening],
                      ] as const
                    ).map(([label, text]) => (
                      <div key={label} className="grid gap-2 md:grid-cols-[7rem_1fr]">
                        <p className="text-[0.68rem] font-medium tracking-[0.18em] text-teal uppercase md:pt-1">
                          {label}
                        </p>
                        <p className="text-base font-light leading-8 text-ink">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-2">
                    {(
                      [
                        ["timing", "Timing"],
                        ["transit", "Transit"],
                        ["flex", "Flexible"],
                      ] as const
                    ).map(([id, label]) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() =>
                          setOpenNote((current) => (current === id ? null : id))
                        }
                        className={`px-4 py-2 text-[0.72rem] tracking-[0.14em] uppercase transition-colors ${
                          openNote === id
                            ? "bg-teal text-cream"
                            : "bg-ivory text-muted hover:text-ink"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  {openNote ? (
                    <div className="mt-5 border-t border-beige pt-5 text-sm font-light leading-7 text-muted md:text-base md:leading-8">
                      {openNote === "timing" ? day.timing : null}
                      {openNote === "transit" ? day.transit : null}
                      {openNote === "flex" ? (
                        <ul className="space-y-2">
                          {day.flexible.map((item) => (
                            <li key={item}>· {item}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ) : null}

                  <div className="mt-10 flex justify-between">
                    <button
                      type="button"
                      disabled={dayIndex === 0}
                      onClick={() => setDayIndex((i) => Math.max(0, i - 1))}
                      className="text-sm tracking-wide text-teal disabled:opacity-30"
                    >
                      ← Previous day
                    </button>
                    <button
                      type="button"
                      disabled={dayIndex === sampleDays.length - 1}
                      onClick={() =>
                        setDayIndex((i) => Math.min(sampleDays.length - 1, i + 1))
                      }
                      className="text-sm tracking-wide text-teal disabled:opacity-30"
                    >
                      Next day →
                    </button>
                  </div>
                </div>
              </div>
            ) : null}

            {tab === "stay" ? (
              <div className="p-6 md:p-10">
                <h3 className="font-serif text-3xl text-ink md:text-4xl">
                  Stay & Transport
                </h3>
                <p className="mt-5 max-w-2xl text-base font-light leading-8 text-muted">
                  {sampleStay.strategy}
                </p>

                <p className="mt-10 text-[0.68rem] font-medium tracking-[0.2em] text-teal uppercase">
                  Choose a stay area
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {sampleStay.areas.map((area, index) => (
                    <button
                      key={area.name}
                      type="button"
                      onClick={() => setStayIndex(index)}
                      className={`px-4 py-2.5 font-serif text-lg transition-colors ${
                        index === stayIndex
                          ? "bg-teal text-cream"
                          : "bg-ivory text-ink hover:bg-beige/40"
                      }`}
                    >
                      {area.name}
                    </button>
                  ))}
                </div>

                <div className="mt-8 max-w-2xl">
                  <p className="font-serif text-2xl text-ink">{stay.name}</p>
                  <p className="mt-3 text-base font-light leading-8 text-muted">
                    {stay.text}
                  </p>
                  <p className="mt-6 text-sm font-light leading-7 text-muted">
                    <span className="text-teal">Avoid · </span>
                    {sampleStay.avoid}
                  </p>
                </div>

                <div className="mt-12 grid gap-8 border-t border-beige pt-10 md:grid-cols-3">
                  {sampleStay.transport.map((item, index) => (
                    <div key={item.title}>
                      <p className="text-[0.68rem] tracking-[0.18em] text-teal uppercase">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-3 font-serif text-xl text-ink">
                        {item.title}
                      </p>
                      <p className="mt-3 text-sm font-light leading-7 text-muted">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {tab === "food" ? (
              <div className="p-6 md:p-10">
                <h3 className="font-serif text-3xl text-ink md:text-4xl">
                  Food & Experiences
                </h3>
                <p className="mt-5 max-w-2xl text-base font-light leading-8 text-muted">
                  {sampleFood.diningStyle}
                </p>

                <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {sampleFood.rhythm.map((item) => (
                    <div key={item.title}>
                      <p className="font-serif text-2xl text-ink">{item.title}</p>
                      <p className="mt-3 text-sm font-light leading-7 text-muted">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-12 text-[0.68rem] font-medium tracking-[0.2em] text-teal uppercase">
                  Tap a neighborhood
                </p>
                <ExperiencePicker />

                <div className="mt-12 border-t border-beige pt-8">
                  <p className="font-serif text-2xl text-ink">Skip if short on time</p>
                  <ul className="mt-5 columns-1 gap-8 text-sm font-light leading-7 text-muted sm:columns-2">
                    {sampleFood.skip.map((item) => (
                      <li key={item} className="mb-2 break-inside-avoid">
                        · {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}

            {tab === "practical" ? (
              <div className="p-6 md:p-10">
                <h3 className="font-serif text-3xl text-ink md:text-4xl">
                  Practical Notes
                </h3>

                <p className="mt-8 max-w-3xl border-l-2 border-teal pl-5 font-serif text-2xl leading-snug text-ink md:text-3xl md:leading-snug">
                  {samplePractical.refinements}
                </p>

                <div className="mt-12 grid gap-12 md:grid-cols-2">
                  <div>
                    <p className="text-[0.68rem] font-medium tracking-[0.2em] text-teal uppercase">
                      What TripStrat helps with
                    </p>
                    <ul className="mt-5 space-y-3 text-base font-light leading-7 text-ink">
                      {samplePractical.helpsWith.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[0.68rem] font-medium tracking-[0.2em] text-teal uppercase">
                      What TripStrat does not book
                    </p>
                    <ul className="mt-5 space-y-3 text-base font-light leading-7 text-ink">
                      {samplePractical.doesNotBook.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-12 max-w-3xl text-sm font-light leading-7 text-muted md:text-base md:leading-8">
                  {samplePractical.finalNote}
                </p>
              </div>
            ) : null}
          </div>

          {/* Page turn controls */}
          <div className="flex items-center justify-between border-t border-beige/80 px-5 py-4 md:px-8">
            <button
              type="button"
              onClick={() => stepTab(-1)}
              disabled={tabIndex === 0}
              className="text-sm tracking-wide text-teal disabled:opacity-30"
            >
              ← Previous
            </button>
            <p className="text-[0.7rem] tracking-[0.16em] text-muted uppercase">
              {sampleTabs[tabIndex].label}
            </p>
            <button
              type="button"
              onClick={() => stepTab(1)}
              disabled={tabIndex === sampleTabs.length - 1}
              className="text-sm tracking-wide text-teal disabled:opacity-30"
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link href="/start" className="btn-primary">
          Start planning your trip
        </Link>
        <Link href="/complete-plan" className="btn-secondary">
          See the Complete Plan — $179
        </Link>
      </div>
    </div>
  );
}

function ExperiencePicker() {
  const [active, setActive] = useState(0);
  const item = sampleFood.experiences[active];

  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-2">
        {sampleFood.experiences.map((experience, index) => (
          <button
            key={experience.area}
            type="button"
            onClick={() => setActive(index)}
            className={`px-3.5 py-2 text-sm transition-colors ${
              index === active
                ? "bg-teal text-cream"
                : "bg-ivory text-muted hover:text-ink"
            }`}
          >
            {experience.area}
          </button>
        ))}
      </div>
      <p className="mt-5 font-serif text-2xl text-ink">{item.area}</p>
      <p className="mt-2 text-base font-light text-muted">{item.text}</p>
    </div>
  );
}
