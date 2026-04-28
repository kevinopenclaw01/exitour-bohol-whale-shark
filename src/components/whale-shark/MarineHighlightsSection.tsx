const highlights = [
  {
    point: "엘버 포인트",
    title: "고래상어",
    image: "/images/bohol/whale-shark.png",
    alt: "엘버 포인트의 맑은 바다를 헤엄치는 고래상어",
    note: "고래상어의 자연스러운 움직임을 존중하며, 충분한 거리와 차분한 관찰로 만나는 오픈워터 경험입니다."
  },
  {
    point: "나팔린 포인트",
    title: "정어리떼",
    image: "/images/bohol/napaling-sardines.png",
    alt: "나팔린 포인트의 푸른 바다를 가득 채운 정어리떼",
    note: "팡라오 리프 월을 따라 은빛 정어리떼가 햇살과 함께 움직이는 장면을 가까이에서 느낄 수 있습니다."
  },
  {
    point: "발리카삭",
    title: "바다거북",
    image: "/images/bohol/balicasag-turtle.png",
    alt: "발리카삭 섬 산호 위를 유영하는 바다거북",
    note: "보호구역의 산호 정원 위로 바다거북이 천천히 지나가는 평온한 순간을 만납니다."
  }
];

export function MarineHighlightsSection() {
  return (
    <section className="bg-[#020811] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold text-cyan-200/70">
            해양 하이라이트
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
            각기 다른 리듬을 가진 세 가지 대표 해양 경험.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {highlights.map((highlight) => (
            <article
              key={highlight.point}
              className="overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.055]"
            >
              <div
                aria-label={highlight.alt}
                className="h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${highlight.image})` }}
              />
              <div className="p-6">
                <p className="text-xs font-semibold text-cyan-200/70">
                  {highlight.point}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {highlight.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {highlight.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
