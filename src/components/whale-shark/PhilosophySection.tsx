import { MediaPanel } from "./MediaPanel";

const principles = [
  "먹이주기 없음",
  "자연스러운 만남",
  "제한된 인원",
  "존중하는 거리",
  "지역 해양 보호"
];

export function PhilosophySection() {
  return (
    <section id="experience" className="bg-[#020811] px-6 py-24 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold text-cyan-200/70">
            책임 있는 만남의 원칙
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
            우리는 고래상어를 길들이지 않습니다. 잠시 그들의 바다에 초대될 뿐입니다.
          </h2>
          <p className="mt-7 text-lg leading-8 text-slate-300">
            알버 포인트에서의 여정은 구경거리가 아니라 잠시 멈추는 시간에 가깝습니다.
            바다의 흐름이 만남의 속도를 정하고, 가이드는 적절한 거리와 조용한 움직임,
            그리고 거대한 생명을 존중하는 태도를 준비합니다.
          </p>
          <p className="mt-5 text-base leading-7 text-slate-400">
            이 경험은 공연이 아닙니다. 자연을 있는 그대로 마주할 수 있는 드문 허락입니다.
            침묵, 거리, 존중, 그리고 경이로움으로 완성되는 여정입니다.
          </p>
        </div>
        <MediaPanel
          image="/images/bohol/whale-shark.png"
          alt="깊고 푸른 바다를 유영하는 고래상어"
          label="연출이 아닌 자연스러운 만남"
        />
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl gap-4 md:grid-cols-5">
        {principles.map((principle) => (
          <div
            key={principle}
            className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur"
          >
            <p className="text-sm font-semibold text-cyan-100">
              {principle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
