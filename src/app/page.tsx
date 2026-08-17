import Image from "next/image";
import Link from "next/link";
import FaqList from "@/components/FaqList";
import FloatingContact from "@/components/FloatingContact";
import HeroMedia from "@/components/HeroMedia";
import Reveal from "@/components/Reveal";
import { faqPreviewItems } from "@/lib/faq";

const whyCards = [
  "Compare hundreds of hotels",
  "Decode conflicting advice",
  "Optimize routes, timing, and logistics",
  "Still make the trip feel relaxing and fun",
];

const steps = [
  "Complete a detailed planning questionnaire",
  "We analyze your travel style, priorities, and constraints",
  "We design a custom itinerary and travel strategy",
  "You review and request refinements",
  "You travel with clarity and flexibility",
];

const planChecklist = [
  "Day-by-day itinerary structure",
  "Accommodation & transportation strategy",
  "Activity sequencing & timing guidance",
  "Dining & experience suggestions",
  "Two refinement rounds",
  "Additional tailored recommendations",
];

function CheckIcon() {
  return (
    <svg
      className="mt-1 h-4 w-4 shrink-0 text-teal"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 8.5 6.5 11.5 12.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5 text-teal" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6.5h16v11H4v-11Z" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m4.5 7 7.5 6 7.5-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5 text-teal" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.2 4.75h2.1l1.05 3.15-1.35 1.05a10.5 10.5 0 0 0 4.95 4.95l1.05-1.35 3.15 1.05v2.1a1.5 1.5 0 0 1-1.5 1.5A12.75 12.75 0 0 1 4.75 6.25a1.5 1.5 0 0 1 1.5-1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <FloatingContact />

      <section className="relative isolate min-h-[90vh] overflow-hidden">
        <HeroMedia />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(0,24,24,0.88)_0%,rgba(0,32,32,0.78)_38%,rgba(0,36,36,0.55)_68%,rgba(0,40,40,0.4)_100%)]" />

        <div className="relative mx-auto flex min-h-[90vh] w-full max-w-[1600px] items-end px-6 pb-24 pt-32 md:items-center md:px-10 md:pb-28 md:pt-24 lg:px-16">
          <div className="max-w-2xl text-cream">
            <p className="mb-5 text-[0.7rem] font-medium tracking-[0.28em] text-cream/85">
              CUSTOM TRAVEL PLANNING
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] text-cream md:text-6xl lg:text-[4.5rem]">
              Plan less. Explore more.
            </h1>
            <p className="mt-8 max-w-lg text-lg font-light leading-8 text-cream/95">
              Travel should be fun, not stressful. TripStrat turns your preferences,
              budget, pace and priorities into a clear, structured travel plan that
              actually fits your life.
            </p>
            <div className="mt-12">
              <Link href="/complete-plan" className="btn-primary">
                See the Complete Plan — $179
              </Link>
            </div>
            <p className="mt-10 text-sm font-light tracking-wide text-cream/80">
              Trusted by 1000+ travelers planning with more clarity and less stress.
            </p>
          </div>
        </div>
      </section>

      <section id="built-around-you" className="bg-ivory scroll-mt-28">
        <div className="mx-auto w-full max-w-[1600px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-4xl leading-[1.12] text-ink md:text-5xl">
                Built around you
              </h2>
              <p className="mt-6 text-xl font-light leading-8 text-ink md:mt-8 md:text-2xl md:leading-9">
                Every TripStrat plan is built around you — not a fixed package you have
                to squeeze into.
              </p>
              <p className="mt-5 text-base font-light leading-7 text-muted md:mt-6 md:text-lg md:leading-8">
                Your dates, budget, pace, and priorities shape the itinerary.
              </p>
              <div className="mt-10">
                <Link href="/complete-plan" className="btn-secondary">
                  See the Complete Plan
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="complete-plan" className="scroll-mt-28 border-t border-beige bg-ivory">
        <div className="grid w-full md:grid-cols-2">
          <div className="relative min-h-[420px] md:min-h-[720px]">
            <Image
              src="/images/dining.jpg"
              alt="Venice Grand Canal at golden hour"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <Reveal className="flex flex-col justify-center px-6 py-16 md:px-14 md:py-20 lg:px-20 xl:px-24">
            <h2 className="font-serif text-4xl leading-[1.12] text-ink md:text-5xl">
              Custom trip planning
            </h2>
            <p className="mt-7 max-w-xl text-lg font-light leading-8 text-muted">
              One thorough plan for your trip — with two refinement rounds so it lands
              exactly right.
            </p>
            <aside className="mt-10 max-w-xl border border-beige bg-[#fffcf6] p-7 md:p-8">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] text-teal">
                COMPLETE PLAN
              </p>
              <div className="mt-3 flex items-baseline gap-3">
                <p className="font-serif text-5xl text-ink">$179</p>
                <p className="text-sm font-light text-muted">per trip</p>
              </div>
              <p className="mt-5 text-base font-light leading-7 text-muted">
                Ideal for any trip you can imagine. We take care of the planning —
                you take care of the booking.
              </p>
              <ul className="mt-7 space-y-3 border-t border-beige pt-7">
                {planChecklist.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm font-light leading-6 text-ink"
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/start" className="btn-primary mt-8 w-full">
                Get started
              </Link>
            </aside>
          </Reveal>
        </div>
      </section>

      <section id="why" className="bg-ivory scroll-mt-28">
        <div className="grid w-full md:grid-cols-2">
          <Reveal className="flex flex-col justify-center px-6 py-16 md:order-1 md:px-14 md:py-24 lg:px-20 xl:px-24">
            <h2 className="font-serif text-4xl leading-[1.12] text-ink md:text-5xl">
              Why TripStrat exists
            </h2>
            <p className="mt-7 max-w-xl text-lg font-light leading-8 text-muted">
              Planning travel today is overwhelming. You&apos;re expected to:
            </p>
            <ul className="mt-8 max-w-xl space-y-4">
              {whyCards.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-teal/40 pl-5 font-serif text-xl leading-snug text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-10 max-w-xl text-lg font-light leading-8 text-muted">
              TripStrat removes that friction — so your time and money are spent well.
            </p>
          </Reveal>
          <div className="relative min-h-[420px] md:order-2 md:min-h-[640px]">
            <Image
              src="/images/faq-coast.jpg"
              alt="Coastal terrace overlooking calm blue water"
              fill
              className="object-cover object-center"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-teal-deep text-cream scroll-mt-28">
        <Reveal className="mx-auto w-full max-w-[1600px] px-6 py-28 md:px-10 md:py-32 lg:px-16">
          <h2 className="text-center font-serif text-4xl leading-[1.12] md:text-5xl">
            How TripStrat works
          </h2>
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {steps.map((step, index) => (
              <li key={step} className="border-t border-cream/25 pt-7">
                <p className="text-[0.7rem] font-medium tracking-[0.22em] text-cream/45">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-5 font-serif text-xl leading-snug md:text-[1.25rem]">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section id="faq" className="bg-ivory scroll-mt-28">
        <div className="grid w-full md:grid-cols-2 md:items-start">
          <div className="relative order-2 h-[480px] md:order-1 md:h-[820px]">
            <Image
              src="/images/about-interior.jpg"
              alt="Quiet luxury hotel interior with soft natural light"
              fill
              className="object-cover object-center"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <Reveal className="order-1 flex flex-col justify-center px-6 py-16 md:order-2 md:px-10 md:py-20 lg:px-16 xl:px-20">
            <h2 className="font-serif text-4xl leading-[1.12] text-ink md:text-5xl">
              Questions before you start?
            </h2>
            <div className="mt-12">
              <FaqList items={faqPreviewItems} />
            </div>
            <div className="mt-10">
              <Link href="/faq" className="btn-secondary">
                View all FAQs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="bg-ivory scroll-mt-28">
        <Reveal className="mx-auto grid w-full max-w-[1600px] gap-10 border-t border-beige px-6 py-28 md:grid-cols-2 md:gap-16 md:px-10 md:py-32 lg:px-16">
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-4xl leading-[1.12] text-ink md:text-5xl">
              Next steps
            </h2>
            <p className="mt-7 max-w-lg text-lg font-light leading-8 text-muted">
              Whenever you&apos;re ready, start with the questionnaire. Tell us about
              the trip you have in mind, and we&apos;ll take it from there.
            </p>
            <div className="mt-10">
              <Link href="/start" className="btn-primary">
                Start planning
              </Link>
            </div>
          </div>
          <aside className="border border-beige bg-[#fffcf6] p-8 md:p-12">
            <h3 className="font-serif text-3xl text-ink">Questions first?</h3>
            <p className="mt-4 text-base font-light leading-7 text-muted">
              Prefer to talk before you begin? Reach out anytime.
            </p>
            <div className="mt-10 space-y-6">
              <a
                href="mailto:plan@tripstrat.com"
                className="flex items-center gap-4 text-lg font-light text-ink transition-colors hover:text-teal"
              >
                <MailIcon />
                <span>plan@tripstrat.com</span>
              </a>
              <a
                href="tel:+17209362129"
                className="flex items-center gap-4 text-lg font-light text-ink transition-colors hover:text-teal"
              >
                <PhoneIcon />
                <span>+1 (720) 936-2129</span>
              </a>
            </div>
            <p className="mt-10 text-sm font-light leading-7 text-muted">
              Make sure to check your spam folder in case you didn&apos;t receive an
              email.
            </p>
          </aside>
        </Reveal>
      </section>
    </>
  );
}
