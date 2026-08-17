import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "TripStrat terms of service for custom travel planning.",
};

export default function TermsPage() {
  return (
    <div className="bg-ivory">
      <article className="mx-auto w-full max-w-3xl px-6 py-20 md:px-10 md:py-28">
        <h1 className="font-serif text-5xl leading-[1.08] text-ink">Terms</h1>
        <p className="mt-6 text-sm font-light text-muted">
          Last updated: August 2026
        </p>

        <div className="mt-12 space-y-10 text-base font-light leading-8 text-muted">
          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Agreement</h2>
            <p>
              These Terms apply when you browse TripStrat, purchase a Complete Plan, or
              otherwise use TripStrat&apos;s services. By purchasing or using the
              service, you agree to these Terms and to the Refund Policy and Privacy
              Policy.
            </p>
            <p>
              If you do not agree, do not purchase or use the service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">What TripStrat provides</h2>
            <p>
              TripStrat provides custom travel planning and itinerary strategy. When you
              purchase a TripStrat Complete Plan, you are purchasing planning and
              strategy work tailored to your trip — not a travel booking service, travel
              agency package, or guided tour.
            </p>
            <p>
              The Complete Plan typically includes route strategy, day-by-day structure,
              activity sequencing and timing guidance, stay-area guidance,
              transportation strategy, dining and experience suggestions, and two
              refinement rounds. Exact structure may vary by destination and
              preferences.
            </p>
            <p>
              The $179 fee is for planning and strategy only. It does not include
              payment for flights, hotels, transportation, food, activities,
              experiences, insurance, visas, or any other trip costs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">What TripStrat does not do</h2>
            <p>
              TripStrat does not book flights, hotels, activities, restaurants,
              transportation, tours, insurance, or other travel services on your behalf.
            </p>
            <p>
              TripStrat does not provide emergency travel support, visa approval,
              guaranteed prices, guaranteed availability, or guaranteed outcomes for
              your trip.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Your responsibilities</h2>
            <p>You are responsible for:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Providing accurate information in the questionnaire and communications</li>
              <li>Making and confirming your own bookings</li>
              <li>
                Verifying passport, visa, health, safety, entry, insurance, and
                destination requirements
              </li>
              <li>
                Checking current prices, availability, opening hours, schedules, and
                travel rules before booking or traveling
              </li>
              <li>Using the same email for questionnaire and payment when requested</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Delivery and refinements</h2>
            <p>
              TripStrat aims to deliver your itinerary within a reasonable timeframe after
              receiving complete questionnaire information and confirmed payment. Timing
              estimates shared on the website are targets, not guaranteed delivery dates.
            </p>
            <p>
              The Complete Plan includes two refinement rounds. Additional revisions may
              require an additional fee, which TripStrat will confirm before starting
              extra work.
            </p>
            <p>
              If you do not provide enough information to begin planning, TripStrat may
              pause the order until the needed information is received.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Payments</h2>
            <p>
              Payments are processed by Stripe or another payment provider. Prices are
              stated before purchase. By completing checkout, you authorize payment of the
              planning fee.
            </p>
            <p>
              Refunds are governed by the{" "}
              <a href="/refund-policy" className="text-teal underline-offset-4 hover:underline">
                Refund Policy
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Limitation of liability</h2>
            <p>
              TripStrat provides planning guidance based on information available during
              planning. Travel information can change. TripStrat is not responsible for
              third-party changes, cancellations, delays, price changes, closures,
              weather, strikes, government rules, visa issues, airline issues, hotel
              issues, tour operator issues, transportation failures, or customer booking
              errors.
            </p>
            <p>
              To the fullest extent permitted by applicable law, TripStrat&apos;s total
              liability arising out of or relating to a Complete Plan purchase is limited
              to the planning fee you paid for that order.
            </p>
            <p>
              Nothing in these Terms limits liability that cannot be limited under
              applicable law (including liability for fraud or for death or personal
              injury caused by negligence, where such limitation is not allowed).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Intellectual property</h2>
            <p>
              The TripStrat website, branding, and planning deliverables are owned by
              TripStrat or its licensors. Your plan is for your personal trip use. You
              may not resell, republish, or commercially redistribute TripStrat plans or
              website content without permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Changes</h2>
            <p>
              TripStrat may update these Terms from time to time. The “Last updated” date
              will change when updates are posted. Continued use after updates means you
              accept the revised Terms for future purchases.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Governing law</h2>
            <p>
              These Terms are governed by the laws of the country or state where TripStrat
              is established, without regard to conflict-of-law rules, except where
              mandatory consumer protections in your country of residence apply and cannot
              be waived.
            </p>
            <p>
              If a dispute arises, contact{" "}
              <a
                href="mailto:plan@tripstrat.com"
                className="text-teal underline-offset-4 hover:underline"
              >
                plan@tripstrat.com
              </a>{" "}
              first so we can try to resolve it informally.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Contact</h2>
            <p>
              Questions about these Terms:{" "}
              <a
                href="mailto:plan@tripstrat.com"
                className="text-teal underline-offset-4 hover:underline"
              >
                plan@tripstrat.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
