"use client";

import Script from "next/script";

type TallyEmbedProps = {
  formId: string;
  title?: string;
};

export default function TallyEmbed({
  formId,
  title = "TripStrat planning questionnaire",
}: TallyEmbedProps) {
  return (
    <>
      <iframe
        data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
        loading="lazy"
        width="100%"
        height="600"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title={title}
        className="min-h-[28rem] w-full border-0 md:min-h-[32rem]"
      />
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && "Tally" in window) {
            (
              window as Window & {
                Tally: { loadEmbeds: () => void };
              }
            ).Tally.loadEmbeds();
          }
        }}
      />
    </>
  );
}
