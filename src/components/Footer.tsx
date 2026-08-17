import Link from "next/link";

const footerLinks = [
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/refund-policy", label: "Refund Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-teal-deep text-cream">
      <div className="mx-auto w-full max-w-[1600px] px-6 py-10 md:px-10 md:py-12 lg:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
          <p className="font-serif text-xl leading-none tracking-tight sm:whitespace-nowrap md:text-2xl">
            Plan less. Explore more — we&apos;ll take care of the rest.
          </p>
          <p className="shrink-0 text-sm font-light tracking-wide text-cream/70 md:text-right">
            For any inquiries:{" "}
            <a
              href="mailto:plan@tripstrat.com"
              className="text-cream underline-offset-4 hover:underline"
            >
              plan@tripstrat.com
            </a>
          </p>
        </div>
        <nav
          aria-label="Footer"
          className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-cream/15 pt-6 text-sm font-light tracking-wide text-cream/75"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
