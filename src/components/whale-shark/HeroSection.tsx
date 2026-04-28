import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020811]">
      <video
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/bohol/whale-shark.png"
      >
        <source src="/media/bohol-whale-shark-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,17,0.96)_0%,rgba(2,8,17,0.68)_46%,rgba(2,8,17,0.24)_100%),linear-gradient(180deg,rgba(2,8,17,0.22)_0%,rgba(2,8,17,0.94)_92%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(56,189,248,0.18),transparent_34rem)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-16 pt-28 md:px-10 lg:px-12">
        <p className="text-xs font-semibold text-cyan-100/75">
          EXITour 보홀 해양 여정
        </p>
        <h1 className="mt-6 max-w-5xl text-6xl font-semibold leading-[1.02] text-white md:text-8xl lg:text-9xl">
          <span className="block whitespace-nowrap">자연 그대로의</span>
          <span className="block">보홀</span>
        </h1>
        <p className="mt-5 max-w-4xl text-balance text-3xl font-light leading-tight text-cyan-50 md:text-5xl">
          고래상어의 리듬에 맞춰 만나는 바다.
        </p>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200/86">
          먹이 유인 없이, 자연의 흐름 그대로 만나는 보홀 고래상어 여정입니다.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#booking"
            className="inline-flex items-center justify-center rounded-full bg-[#ffb86b] px-6 py-3 text-sm font-bold text-[#06131d] shadow-[0_0_28px_rgba(255,184,107,0.28)] transition hover:bg-[#ffd29a] focus:outline-none focus:ring-2 focus:ring-[#ffb86b] focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            예약 문의하기
          </Link>
          <Link
            href="#experience"
            className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/16 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            투어 살펴보기
          </Link>
        </div>
      </div>
    </section>
  );
}
