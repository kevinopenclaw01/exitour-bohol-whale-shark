import { boholTourTypes } from "@/data/boholTours";

const imageMap: Record<string, string[]> = {
  "tour-heritage-land": [
    "/images/bohol/chocolate-hills.jpg",
    "/images/bohol/tarsier.jpg"
  ],
  "tour-napaling": ["/images/bohol/napaling-sardines.png"],
  "tour-balicasag": ["/images/bohol/balicasag-turtle.png"]
};

export function ThreePillarsSection() {
  const pillars = boholTourTypes.filter((tour) => tour.id !== "tour-whale-shark");

  return (
    <section className="bg-[#031421] px-6 py-24 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold text-cyan-200/70">
            보홀을 이루는 세 가지 장면
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
            보홀은 단순한 목적지가 아닙니다.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            오래된 지형과 살아 있는 리프, 그리고 움직이는 보호구역이 함께 만드는 섬입니다.
            각각의 여정은 고래상어 투어를 단순한 체크리스트가 아닌 더 넓은 보홀 경험으로 이어줍니다.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.id}
              className="group overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.055] backdrop-blur"
            >
              <div className="grid h-72 grid-cols-2 gap-px bg-white/10">
                {(imageMap[pillar.id] ?? [pillar.heroImage]).map((image, index) => (
                  <div
                    key={`${pillar.id}-${image}`}
                    className={
                      index === 0 && imageMap[pillar.id]?.length === 1
                        ? "col-span-2 bg-cover bg-center"
                        : "bg-cover bg-center"
                    }
                    style={{ backgroundImage: `url(${image})` }}
                    aria-label={`${pillar.name} 이미지 ${index + 1}`}
                  />
                ))}
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold text-cyan-200/70">
                  {pillar.themeKeyword}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {pillar.name}
                </h3>
                <p className="mt-4 min-h-28 text-sm leading-7 text-slate-300">
                  {pillar.shortDescription}
                </p>
                <button
                  type="button"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-cyan-100/30 px-4 py-3 text-xs font-semibold text-cyan-50 transition hover:bg-cyan-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  여정에 추가하기
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
