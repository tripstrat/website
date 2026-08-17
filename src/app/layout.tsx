import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import SiteShell from "@/components/SiteShell";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const outfit = Outfit({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "TripStrat — Custom Travel Planning",
    template: "%s · TripStrat",
  },
  description:
    "TripStrat turns your preferences, budget, pace and priorities into a clear, structured travel plan that actually fits your life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
