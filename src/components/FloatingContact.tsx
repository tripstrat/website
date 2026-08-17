"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="/contact"
      aria-label="Contact TripStrat"
      className={`fixed right-5 bottom-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-beige bg-ivory text-teal shadow-[0_12px_32px_rgba(31,42,39,0.12)] transition-all duration-300 hover:border-teal hover:bg-teal hover:text-cream md:right-8 md:bottom-8 md:h-14 md:w-14 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        className="h-5 w-5 md:h-[1.35rem] md:w-[1.35rem]"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 6.5h16v11H4v-11Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="m4.5 7 7.5 6 7.5-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
