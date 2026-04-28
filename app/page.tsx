import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#020811] px-6 py-16 text-slate-100">
      <div className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center">
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-200/70">
          EXITour
        </p>
        <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
          Premium journeys through Bohol&apos;s living ocean.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Start with the new Bohol Whale Shark Journey, shaped around silence,
          distance, respect, and wonder.
        </p>
        <Link
          href="/bohol/whale-shark"
          className="mt-10 inline-flex w-fit items-center rounded-full border border-cyan-200/35 bg-cyan-100 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-white"
        >
          Open Whale Shark Journey
        </Link>
      </div>
    </main>
  );
}
