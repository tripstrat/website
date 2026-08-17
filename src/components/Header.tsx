"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-ivory transition-shadow duration-300 ${
        scrolled ? "shadow-[0_12px_40px_rgba(31,42,39,0.08)]" : ""
      }`}
    >
      <div className="border-b border-beige/70">
        <div className="mx-auto flex h-20 w-full max-w-[1600px] items-center justify-between px-6 md:h-24 md:px-10 lg:px-16">
          <Link
            href="/"
            className="font-serif text-[1.75rem] tracking-[0.06em] text-ink md:text-[1.9rem]"
          >
            TripStrat
          </Link>
          <Link href="/start" className="btn-primary !px-6 !py-3">
            Start planning
          </Link>
        </div>
      </div>
    </header>
  );
}
