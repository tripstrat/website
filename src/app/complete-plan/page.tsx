import type { Metadata } from "next";
import Link from "next/link";
import PlanMockups from "@/components/PlanMockups";

export const metadata: Metadata = {
  title: "Complete Plan — $179",
  description:
    "Ideal for travelers who want a custom plan built around their dates, budget, pace, preferences, and priorities.",
};

const helpfulFor = [
  "One-city trips",
  "One city with multiple neighborhoods or stay areas",
  "Multi-city trips",
  "Multi-country trips",
  "Road trips",
  "Island hopping",
  "Trips with saved places that need organizing",
  "Trips where you need help deciding what to cut",
];

const steps = [
  "You complete a detailed planning questionnaire.",
  "We analyze your travel style, priorities, and constraints.",
  "We design a custom itinerary and travel strategy.",
  "You review and request refinements.",
  "You travel with clarity, confidence, and flexibility.",
];

export default function CompletePlanPage() {
  return (
    <div className="bg-ivory">
      <section className="mx-auto w-full max-w-[1600px] px-6 pb-16 pt-20 md:px-10 md:pb-20 md:pt-28 lg:px-16">
        <p className="text-[0.7rem] font-medium tracking-[0.28em] text-teal">
          CUSTOM TRIP PLANNING
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.08] text-ink md:text-6xl">
          Complete Plan — $179
        </h1>
        <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-muted">
          Ideal for travelers who want a custom plan built around their dates, budget,
          pace, preferences, and priorities.
        </p>
        <div className="mt-10">
          <Link href="/start" className="btn-primary">
            Start planning
          </Link>
        </div>
      </section>

      <section
        id="whats-inside"
        className="scroll-mt-28 border-t border-beige bg-ivory"
      >
        <div className="mx-auto w-full max-w-[1600px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <PlanMockups />
        </div>
      </section>

      <section className="border-t border-beige bg-ivory">
        <div className="mx-auto w-full max-w-[1600px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">Helpful for</h2>
          <p className="mt-4 max-w-xl text-base font-light leading-7 text-muted md:text-lg">
            Built for trips where structure matters — from one city to multi-country.
          </p>
          <ul className="mt-12 grid gap-x-12 gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
            {helpfulFor.map((item) => (
              <li
                key={item}
                className="border-t border-beige py-5 font-serif text-xl leading-snug text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-teal-deep text-cream">
        <div className="mx-auto w-full max-w-[1600px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <h2 className="font-serif text-3xl md:text-4xl">How TripStrat works</h2>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {steps.map((step, index) => (
              <li key={step} className="border-t border-cream/20 pt-6">
                <p className="text-[0.7rem] font-medium tracking-[0.22em] text-cream/45">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-5 font-serif text-xl leading-snug">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto w-full max-w-[1600px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">
            Important to know
          </h2>
          <div className="mt-10 max-w-3xl space-y-6 text-lg font-light leading-8 text-muted">
            <p>
              TripStrat does not book flights, hotels, activities, or transportation on
              your behalf. We provide custom travel planning, itinerary structure,
              stay-area guidance, transportation strategy, and recommendations so you
              can book with clarity and confidence.
            </p>
            <p>
              Prices, availability, schedules, opening hours, and travel requirements
              can change. Customers are responsible for checking current details and
              completing their own bookings.
            </p>
          </div>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/start" className="btn-primary">
              Start planning
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
