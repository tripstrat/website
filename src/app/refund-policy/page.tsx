import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "TripStrat refund policy for custom travel planning.",
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-ivory">
      <article className="mx-auto w-full max-w-3xl px-6 py-20 md:px-10 md:py-28">
        <h1 className="font-serif text-5xl leading-[1.08] text-ink">
          Refund Policy
        </h1>
        <p className="mt-6 text-sm font-light text-muted">
          Last updated: August 2026
        </p>

        <div className="mt-12 space-y-10 text-base font-light leading-8 text-muted">
          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Overview</h2>
            <p>
              TripStrat creates custom travel planning work for each customer. Because
              the work is personalized, refunds are limited as described below.
            </p>
            <p>
              This Refund Policy is part of your agreement with TripStrat, together with
              the Terms and Privacy Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">When refunds are not available</h2>
            <p>
              Payments are generally non-refundable once planning has started. Planning
              has started when TripStrat begins reviewing your questionnaire, researching
              your trip, or drafting your plan.
            </p>
            <p>
              Dissatisfaction with trip ideas, destination recommendations, or subjective
              preferences after delivery does not automatically entitle you to a refund,
              provided TripStrat has delivered planning work consistent with the Complete
              Plan service and the information you provided.
            </p>
            <p>
              Refunds do not apply to third-party travel costs. TripStrat does not book
              or collect payment for flights, hotels, activities, transportation, food, or
              other travel services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">When a refund may be issued</h2>
            <p>TripStrat may issue a full or partial refund if:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                You paid but TripStrat cannot complete the plan for reasons within
                TripStrat&apos;s control
              </li>
              <li>
                A duplicate payment was made in error
              </li>
              <li>
                Applicable consumer law requires a refund
              </li>
            </ul>
            <p>
              If you purchase but do not provide enough information to begin planning,
              TripStrat may pause the order until the needed information is received.
              Extended non-response after reasonable follow-up may result in order closure
              without refund if planning capacity was reserved, unless otherwise required
              by law or agreed in writing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Refinements</h2>
            <p>
              The Complete Plan includes two refinement rounds. Using refinement rounds —
              or choosing not to use them — does not create a refund right by itself.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">How to request a refund</h2>
            <p>
              Contact{" "}
              <a
                href="mailto:plan@tripstrat.com"
                className="text-teal underline-offset-4 hover:underline"
              >
                plan@tripstrat.com
              </a>{" "}
              with your name, order email, and reason for the request. TripStrat will
              review requests in good faith and respond within a reasonable time.
            </p>
            <p>
              Approved refunds are typically returned to the original payment method
              through Stripe. Timing may depend on your bank or card provider.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Chargebacks</h2>
            <p>
              Please contact TripStrat before filing a payment dispute so we can try to
              resolve the issue directly. Filing a chargeback does not automatically
              cancel your obligations if planning work was delivered as described.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Contact</h2>
            <p>
              Refund questions:{" "}
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
