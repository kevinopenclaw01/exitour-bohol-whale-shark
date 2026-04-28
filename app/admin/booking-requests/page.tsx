import Link from "next/link";
import { boholTourTypes } from "@/data/boholTours";
import { getBookingRequests } from "@/lib/bookingRequests";
import type { BookingStatus } from "@/models/tour";

type BookingRequestsAdminPageProps = {
  searchParams?: Promise<{
    tourTypeId?: string;
    date?: string;
    status?: BookingStatus;
  }>;
};

export default async function BookingRequestsAdminPage({
  searchParams
}: BookingRequestsAdminPageProps) {
  const params = await searchParams;
  const requests = getBookingRequests({
    tourTypeId: params?.tourTypeId,
    date: params?.date,
    status: params?.status
  });

  return (
    <main className="min-h-screen bg-[#020811] px-6 py-10 text-slate-100 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/70">
              EXITour Admin
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-white">
              Booking Requests
            </h1>
          </div>
          <Link
            href="/bohol/whale-shark"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
          >
            View landing page
          </Link>
        </div>

        <form className="mt-8 grid gap-4 rounded-[8px] border border-white/10 bg-white/[0.045] p-4 md:grid-cols-[1fr_220px_180px_auto]">
          <label className="grid gap-2 text-sm text-slate-300">
            Tour type
            <select
              name="tourTypeId"
              defaultValue={params?.tourTypeId ?? ""}
              className="rounded-[8px] border border-white/12 bg-slate-950/60 px-4 py-3 text-white"
            >
              <option value="">All tours</option>
              {boholTourTypes.map((tour) => (
                <option key={tour.id} value={tour.id}>
                  {tour.name}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm text-slate-300">
            Date
            <input
              name="date"
              type="date"
              defaultValue={params?.date ?? ""}
              className="rounded-[8px] border border-white/12 bg-slate-950/60 px-4 py-3 text-white"
            />
          </label>
          <label className="grid gap-2 text-sm text-slate-300">
            Status
            <select
              name="status"
              defaultValue={params?.status ?? ""}
              className="rounded-[8px] border border-white/12 bg-slate-950/60 px-4 py-3 text-white"
            >
              <option value="">All</option>
              <option value="pending">Pending</option>
              <option value="contacted">Contacted</option>
              <option value="confirmed">Confirmed</option>
              <option value="closed">Closed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </label>
          <button
            type="submit"
            className="self-end rounded-full bg-cyan-100 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950"
          >
            Filter
          </button>
        </form>

        <div className="mt-8 overflow-hidden rounded-[8px] border border-white/10">
          <div className="grid grid-cols-[1fr_150px_130px_120px] gap-4 bg-white/[0.06] px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80 max-md:hidden">
            <span>Customer</span>
            <span>Date</span>
            <span>Status</span>
            <span>Details</span>
          </div>
          {requests.length > 0 ? (
            requests.map((request) => {
              const tour = boholTourTypes.find(
                (tourType) => tourType.id === request.tourTypeId
              );

              return (
                <div
                  key={request.id}
                  className="grid gap-4 border-t border-white/10 px-4 py-4 md:grid-cols-[1fr_150px_130px_120px] md:items-center"
                >
                  <div>
                    <p className="font-semibold text-white">
                      {request.customerName}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      {tour?.name ?? request.tourTypeId} · {request.contact}
                    </p>
                  </div>
                  <p className="text-sm text-slate-300">{request.travelDate}</p>
                  <span className="w-fit rounded-full border border-cyan-100/25 px-3 py-1 text-xs uppercase tracking-[0.14em] text-cyan-50">
                    {request.status}
                  </span>
                  <Link
                    href={`/admin/booking-requests/${request.id}`}
                    className="text-sm font-semibold text-cyan-100 hover:text-white"
                  >
                    Open
                  </Link>
                </div>
              );
            })
          ) : (
            <p className="border-t border-white/10 px-4 py-10 text-center text-slate-400">
              No booking requests yet.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
