export function ResponsibleTourismSection() {
  return (
    <section className="bg-[#020811] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 border-y border-white/10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold text-cyan-200/70">
            책임 있는 여행
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-white md:text-5xl">
            더 좋은 경험과 바다를 위해 예약 가능 인원을 제한합니다.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            "브리핑은 지역 보전 가이드라인과 차분한 행동 수칙을 우선합니다.",
            "만남 여부와 진행 방식은 날씨, 시야, 해양 생물의 자연스러운 움직임에 따라 달라질 수 있습니다.",
            "현지 운영 여건이 허용하는 범위에서 그룹 규모를 신중하게 제한합니다.",
            "세부 규정과 법적 기준은 EXITour가 확인한 최신 기준에 맞춰 별도로 안내합니다."
          ].map((item) => (
            <p
              key={item}
              className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5 text-sm leading-7 text-slate-300"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
