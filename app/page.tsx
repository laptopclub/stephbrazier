import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Steph Brazier's website is coming soon.",
  title: "Steph Brazier"
};

export default function HomePage() {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-balance text-5xl font-semibold tracking-[-0.06em] text-ink-base sm:text-7xl">
          Steph Brazier
        </h1>
        <p className="mt-6 max-w-xl text-xl leading-8 text-ink-muted sm:text-2xl">
          A new website is on its way.
        </p>
      </div>
    </section>
  );
}
