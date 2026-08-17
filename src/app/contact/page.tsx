import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a question about your trip? We’d love to hear from you at plan@tripstrat.com.",
};

export default function ContactPage() {
  return (
    <div className="bg-ivory">
      <section className="mx-auto w-full max-w-[920px] px-6 pb-20 pt-20 md:px-10 md:pb-24 md:pt-24">
        <p className="text-[0.7rem] font-medium tracking-[0.28em] text-teal">
          SAY HELLO
        </p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.08] text-ink md:text-6xl">
          We&apos;d love to hear from you
        </h1>
        <p className="mt-8 text-lg font-light leading-8 text-muted">
          Curious whether TripStrat is right for your trip? Tell us a little about what
          you&apos;re planning — we&apos;re happy to help.
        </p>

        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
