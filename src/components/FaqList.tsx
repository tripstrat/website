"use client";

import { useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqList({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-beige border-y border-beige">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
              aria-expanded={open}
            >
              <span className="font-serif text-xl text-ink md:text-2xl">
                {item.question}
              </span>
              <span
                className={`mt-1 shrink-0 text-teal transition-transform duration-300 ease-out ${
                  open ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 max-w-3xl text-base font-light leading-8 text-muted md:text-lg">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
