import { BookingForm } from "./BookingForm";

type BookingCTASectionProps = {
  bookingStatus?: string;
};

export function BookingCTASection({ bookingStatus }: BookingCTASectionProps) {
  return (
    <section id="booking" className="bg-[#031421] px-6 py-24 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold text-cyan-200/70">
            예약 가능 여부 문의
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
            조용한 바다의 한 자리를 미리 문의하세요.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            경험의 질과 바다를 지키기 위해 예약 가능 인원은 제한됩니다.
            모든 요청은 현지 상황, 가능 인원, 가이드 배정 확인 후 확정됩니다.
          </p>
        </div>
        <div className="rounded-[8px] border border-white/10 bg-white/[0.055] p-5 backdrop-blur md:p-8">
          <BookingForm bookingStatus={bookingStatus} />
        </div>
      </div>
    </section>
  );
}
