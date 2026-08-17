import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[70] focus:rounded-md focus:bg-teal focus:px-4 focus:py-2 focus:text-sm focus:text-cream"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
