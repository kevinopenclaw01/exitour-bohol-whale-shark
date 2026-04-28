import { createBookingRequestAction } from "@/actions/bookingActions";
import { boholTourTypes } from "@/data/boholTours";

type BookingFormProps = {
  bookingStatus?: string;
};

export function BookingForm({ bookingStatus }: BookingFormProps) {
  return (
    <form action={createBookingRequestAction} className="grid gap-5">
      {bookingStatus === "received" ? (
        <p className="rounded-[8px] border border-cyan-200/25 bg-cyan-100/10 p-4 text-sm text-cyan-50">
          요청이 접수되었습니다. 가능 여부 확인 후 EXITour가 연락드리겠습니다.
        </p>
      ) : null}
      {bookingStatus === "missing" || bookingStatus === "invalid" ? (
        <p className="rounded-[8px] border border-red-200/25 bg-red-100/10 p-4 text-sm text-red-50">
          필수 항목을 확인한 뒤 다시 요청해 주세요.
        </p>
      ) : null}

      <label className="grid gap-2 text-sm text-slate-300">
        투어 종류
        <select
          name="tourTypeId"
          defaultValue="tour-whale-shark"
          className="rounded-[8px] border border-white/12 bg-slate-950/60 px-4 py-3 text-white outline-none focus:border-cyan-200"
        >
          {boholTourTypes.map((tour) => (
            <option key={tour.id} value={tour.id}>
              {tour.name}
            </option>
          ))}
        </select>
      </label>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-300">
          희망 날짜
          <input
            name="travelDate"
            type="date"
            required
            className="rounded-[8px] border border-white/12 bg-slate-950/60 px-4 py-3 text-white outline-none focus:border-cyan-200"
          />
        </label>
        <div className="grid grid-cols-2 gap-4">
          <label className="grid gap-2 text-sm text-slate-300">
            성인
            <input
              name="paxAdult"
              type="number"
              min="1"
              defaultValue="2"
              required
              className="rounded-[8px] border border-white/12 bg-slate-950/60 px-4 py-3 text-white outline-none focus:border-cyan-200"
            />
          </label>
          <label className="grid gap-2 text-sm text-slate-300">
            아동
            <input
              name="paxChild"
              type="number"
              min="0"
              defaultValue="0"
              className="rounded-[8px] border border-white/12 bg-slate-950/60 px-4 py-3 text-white outline-none focus:border-cyan-200"
            />
          </label>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-300">
          이름
          <input
            name="customerName"
            required
            autoComplete="name"
            className="rounded-[8px] border border-white/12 bg-slate-950/60 px-4 py-3 text-white outline-none focus:border-cyan-200"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          연락처
          <input
            name="contact"
            required
            autoComplete="tel"
            className="rounded-[8px] border border-white/12 bg-slate-950/60 px-4 py-3 text-white outline-none focus:border-cyan-200"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-300">
          이메일
          <input
            name="email"
            type="email"
            autoComplete="email"
            className="rounded-[8px] border border-white/12 bg-slate-950/60 px-4 py-3 text-white outline-none focus:border-cyan-200"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          카카오톡 ID
          <input
            name="kakaoId"
            className="rounded-[8px] border border-white/12 bg-slate-950/60 px-4 py-3 text-white outline-none focus:border-cyan-200"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm text-slate-300">
        요청 사항
        <textarea
          name="message"
          rows={5}
          className="resize-y rounded-[8px] border border-white/12 bg-slate-950/60 px-4 py-3 text-white outline-none focus:border-cyan-200"
        />
      </label>

      <button
        type="submit"
        className="rounded-full bg-cyan-100 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
      >
        예약 가능 여부 문의하기
      </button>
    </form>
  );
}
