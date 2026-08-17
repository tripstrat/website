import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You’re all set",
  description: "Thank you. We’ve received your information and will be in touch.",
};

export default function ThankYouPage() {
  return (
    <div className="bg-ivory">
      <section className="mx-auto flex w-full max-w-[1600px] flex-col items-center px-6 py-28 text-center md:px-10 md:py-40">
        <h1 className="font-serif text-5xl leading-[1.08] text-ink md:text-6xl">
          You&apos;re all set
        </h1>
        <p className="mt-10 max-w-lg font-serif text-2xl leading-snug text-ink md:text-3xl">
          Plan less. Explore more — we&apos;ll take care of the rest.
        </p>
        <p className="mt-8 max-w-md text-lg font-light leading-8 text-muted">
          Thank you. We&apos;ve received your information and will be in touch using your
          preferred communication method.
        </p>
        <p className="mt-8 text-sm font-light leading-7 text-muted">
          For any inquiries, reach out to{" "}
          <a
            href="mailto:plan@tripstrat.com"
            className="text-teal underline-offset-4 hover:underline"
          >
            plan@tripstrat.com
          </a>
          .
        </p>
        <Link href="/" className="btn-primary mt-14">
          Back to TripStrat
        </Link>
      </section>
    </div>
  );
}
