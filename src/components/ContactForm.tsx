"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const firstName = String(form.get("firstName") || "").trim();
    const lastName = String(form.get("lastName") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    const subject = encodeURIComponent(`TripStrat note from ${firstName} ${lastName}`);
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    setStatus("ready");
    window.location.href = `mailto:plan@tripstrat.com?subject=${subject}&body=${body}`;
  }

  const fieldClass =
    "mt-2 w-full rounded-sm border border-beige bg-ivory px-4 py-3 text-base font-light text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-teal";

  return (
    <form onSubmit={handleSubmit} className="surface rounded-sm p-7 md:px-10 md:py-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          First name
          <input
            required
            name="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="Jane"
            className={fieldClass}
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Last name
          <input
            required
            name="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Smith"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-ink">
        Email
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@email.com"
          className={fieldClass}
        />
      </label>

      <label className="mt-5 block text-sm font-medium text-ink">
        Message
        <textarea
          required
          name="message"
          rows={4}
          placeholder="Where you’re headed, or what’s on your mind…"
          className={`${fieldClass} resize-y`}
        />
      </label>

      <div className="mt-6 flex justify-center">
        <button type="submit" className="btn-primary min-w-[12rem]">
          Send a note
        </button>
      </div>

      <p className="mt-5 text-center text-sm font-light leading-7 text-muted">
        If you don&apos;t hear back, take a quick look in your spam folder — we always
        reply.
      </p>

      {status === "ready" ? (
        <p className="mt-3 text-center text-sm font-light text-muted">
          Opening your email app…
        </p>
      ) : null}
    </form>
  );
}
