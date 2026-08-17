import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Start planning",
  description:
    "Tell us about your trip, travel style, priorities and preferences so we can begin shaping your Complete Plan.",
};

export default function StartPage() {
  return (
    <div className="bg-ivory">
      <section className="mx-auto w-full max-w-[1600px] px-6 pb-10 pt-20 md:px-10 md:pb-14 md:pt-28 lg:px-16">
        <p className="text-[0.7rem] font-medium tracking-[0.28em] text-teal">
          COMPLETE PLAN — $179
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.08] text-ink md:text-6xl">
          Start planning your trip
        </h1>
        <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-muted">
          Tell us about your trip, travel style, priorities and preferences so we can
          begin shaping your Complete Plan.
        </p>
        <p className="mt-6 max-w-2xl text-base font-light leading-7 text-muted">
          This takes about 5–8 minutes. After submitting your questionnaire, you&apos;ll
          continue to secure payment for the TripStrat Complete Plan.
        </p>
        <p className="mt-4 max-w-2xl border-l-2 border-teal/40 pl-5 text-sm font-light leading-7 text-muted">
          Please use the same email address at checkout so we can match your
          questionnaire to your payment.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-6 pb-28 md:px-10 md:pb-36 lg:px-16">
        <div className="surface overflow-hidden rounded-sm">
          <div className="border-b border-beige px-6 py-5 md:px-8">
            <p className="text-[0.7rem] font-medium tracking-[0.22em] text-teal">
              QUESTIONNAIRE
            </p>
            <h2 className="mt-3 font-serif text-2xl text-ink md:text-3xl">
              TripStrat planning questionnaire
            </h2>
          </div>

          {/* Paste the external questionnaire embed code here. */}
          <div className="flex min-h-[28rem] flex-col items-center justify-center bg-card px-8 py-20 text-center md:min-h-[32rem]">
            <p className="max-w-md text-lg font-light leading-8 text-muted">
              The questionnaire will appear here.
            </p>
          </div>
        </div>

        <p className="mt-12 text-center">
          <Link
            href="/complete-plan"
            className="text-sm font-medium tracking-wide text-teal underline-offset-4 hover:underline"
          >
            Return to the Complete Plan
          </Link>
        </p>
      </section>
    </div>
  );
}
