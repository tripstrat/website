import type { Metadata } from "next";
import Link from "next/link";
import FaqList from "@/components/FaqList";
import { faqItems } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Answers about TripStrat custom travel planning, what’s included, pricing, and how the Complete Plan works.",
};

export default function FaqPage() {
  return (
    <div className="bg-ivory">
      <section className="mx-auto w-full max-w-[1600px] px-6 pb-12 pt-20 md:px-10 md:pb-16 md:pt-28 lg:px-16">
        <h1 className="max-w-3xl font-serif text-5xl leading-[1.08] text-ink md:text-6xl">
          Frequently asked questions
        </h1>
        <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-muted">
          Clear answers before you start planning — including what TripStrat does, what
          you receive, and how the Complete Plan works.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-6 pb-20 md:px-10 md:pb-24 lg:px-16">
        <FaqList items={faqItems} />
      </section>

      <section className="bg-card">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between md:px-10 md:py-24 lg:px-16">
          <div>
            <h2 className="font-serif text-3xl text-ink md:text-4xl">
              Ready to start planning?
            </h2>
            <p className="mt-4 max-w-xl text-base font-light leading-7 text-muted">
              Begin with the questionnaire for the Complete Plan — $179.
            </p>
          </div>
          <Link href="/start" className="btn-primary shrink-0">
            Start planning
          </Link>
        </div>
      </section>
    </div>
  );
}
