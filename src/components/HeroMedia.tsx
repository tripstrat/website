"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/** Quiet hero image drift on scroll. Remove this component to restore a static hero. */
export default function HeroMedia() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = imageRef.current;
        if (!el) return;
        const y = Math.min(window.scrollY * 0.18, 120);
        el.style.transform = `scale(1.08) translate3d(0, ${y}px, 0)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={imageRef}
      className="absolute inset-0 scale-[1.08] will-change-transform"
    >
      <Image
        src="/images/hero-road.jpg"
        alt="Cliffside luxury resort overlooking the ocean"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
    </div>
  );
}
