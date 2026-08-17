import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-ivory">
      <section className="mx-auto flex w-full max-w-[1600px] flex-col items-start px-6 py-28 md:px-10 md:py-36 lg:px-16">
        <p className="text-[0.7rem] font-medium tracking-[0.28em] text-teal">404</p>
        <h1 className="mt-6 max-w-2xl font-serif text-5xl leading-[1.08] text-ink md:text-6xl">
          Page not found
        </h1>
        <p className="mt-8 max-w-xl text-lg font-light leading-8 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/start" className="btn-secondary">
            Start planning
          </Link>
        </div>
      </section>
    </div>
  );
}
