import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How TripStrat collects and uses customer information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-ivory">
      <article className="mx-auto w-full max-w-3xl px-6 py-20 md:px-10 md:py-28">
        <h1 className="font-serif text-5xl leading-[1.08] text-ink">Privacy</h1>
        <p className="mt-6 text-sm font-light text-muted">
          Last updated: August 2026
        </p>

        <div className="mt-12 space-y-10 text-base font-light leading-8 text-muted">
          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Who we are</h2>
            <p>
              TripStrat (“we”, “us”) provides custom travel planning. For privacy
              questions, contact{" "}
              <a
                href="mailto:plan@tripstrat.com"
                className="text-teal underline-offset-4 hover:underline"
              >
                plan@tripstrat.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">What we collect</h2>
            <p>
              We collect information you submit through the planning questionnaire,
              contact forms, email, and related communications. This may include:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Name, email, phone number, and preferred contact method</li>
              <li>Destination, travel dates, travelers, and budget range</li>
              <li>
                Travel style, pace, interests, must-dos, constraints, and preferences
              </li>
              <li>
                Accommodation, transportation, food, accessibility, and visa-related notes
              </li>
              <li>Payment-related details needed to match your order (for example, email)</li>
              <li>Any other planning details you choose to share</li>
            </ul>
            <p>
              We may also collect basic technical data needed to operate the website
              (such as IP address, device/browser type, and pages visited) if hosting or
              analytics tools provide it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">How we use information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Create and deliver your custom travel plan</li>
              <li>Process refinements and answer questions about your order</li>
              <li>Match questionnaire submissions with payments</li>
              <li>Communicate about your plan and service-related updates</li>
              <li>Operate, secure, and improve the website and service</li>
              <li>Comply with legal obligations where applicable</li>
            </ul>
            <p>
              We do not sell your personal information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Legal bases (EEA/UK)</h2>
            <p>
              If you are in the European Economic Area or United Kingdom, we process
              personal data where needed to perform a contract with you (providing the
              Complete Plan), where we have a legitimate interest in operating and
              improving the service, where you consent (when required), or where we must
              comply with law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Payments</h2>
            <p>
              Payments are processed by Stripe. TripStrat does not store full credit or
              debit card numbers. Stripe processes payment data under its own terms and
              privacy policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Service providers</h2>
            <p>
              We may use trusted providers to help run the business, such as:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Payment processing (Stripe)</li>
              <li>Questionnaire / form tools</li>
              <li>Website hosting</li>
              <li>Email or communication tools</li>
            </ul>
            <p>
              These providers only receive what they need to perform their services for
              us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Cookies and analytics</h2>
            <p>
              The site may use essential cookies or similar technologies needed for the
              website to function. If analytics tools, advertising pixels, or non-essential
              cookies are added later, this Privacy Policy will be updated and, where
              required, consent will be requested.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Retention</h2>
            <p>
              We keep customer planning information for as long as needed to deliver the
              plan, handle refinements, maintain records of the order, and meet legal or
              accounting requirements. When information is no longer needed, we delete or
              anonymize it where practical.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Your rights</h2>
            <p>
              Depending on where you live, you may have rights to access, correct, delete,
              or restrict use of your personal information, to object to certain
              processing, and to data portability. You may also have the right to lodge a
              complaint with a data protection authority.
            </p>
            <p>
              To exercise privacy rights, email{" "}
              <a
                href="mailto:plan@tripstrat.com"
                className="text-teal underline-offset-4 hover:underline"
              >
                plan@tripstrat.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Security</h2>
            <p>
              We take reasonable steps to protect personal information. No method of
              transmission or storage is completely secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Children</h2>
            <p>
              TripStrat is intended for adults purchasing travel planning services. We do
              not knowingly collect personal information from children for the purpose of
              selling them services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">International transfers</h2>
            <p>
              If providers process data in other countries, that data may be transferred
              internationally. Where required, we rely on appropriate safeguards used by
              those providers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Changes</h2>
            <p>
              We may update this Privacy Policy from time to time. The “Last updated” date
              will change when updates are posted.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-ink">Contact</h2>
            <p>
              Privacy questions:{" "}
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
