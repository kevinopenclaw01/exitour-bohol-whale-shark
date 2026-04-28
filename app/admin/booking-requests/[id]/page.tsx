import Link from "next/link";
import { notFound } from "next/navigation";
import { updateBookingStatusAction } from "@/actions/bookingActions";
import { CopyContactButton } from "@/components/admin/CopyContactButton";
import { boholTourTypes } from "@/data/boholTours";
import { getBookingRequestById } from "@/lib/bookingRequests";

type BookingRequestDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BookingRequestDetailPage({
  params
}: BookingRequestDetailPageProps) {
  const { id } = await params;
  const request = getBookingRequestById(id);

  if (!request) {
    notFound();
  }

  const tour = boholTourTypes.find(
    (tourType) => tourType.id === request.tourTypeId
  );

  return (
    <main className="min-h-screen bg-[#020811] px-6 py-10 text-slate-100 md:px-10">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/admin/booking-requests"
          className="text-sm font-semibold text-cyan-100 hover:text-white"
        >
          Back to requests
        </Link>

        <div className="mt-8 rounded-[8px] border border-white/10 bg-white/[0.045] p-6 md:p-8">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200/70">
                {tour?.name ?? request.tourTypeId}
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-white">
                {request.customerName}
              </h1>
              <p className="mt-2 text-slate-400">
                Created {new Date(request.createdAt).toLocaleString()}
              </p>
            </div>
            <span className="w-fit rounded-full border border-cyan-100/25 px-3 py-1 text-xs uppercase tracking-[0.14em] text-cyan-50">
              {request.status}
            </span>
          </div>

          <dl className="mt-8 grid gap-5 md:grid-cols-2">
            <Detail label="Travel date" value={request.travelDate} />
            <Detail
              label="Guests"
              value={`${request.paxAdult} adult(s), ${request.paxChild} child(ren)`}
            />
            <Detail label="Contact" value={request.contact} copy />
            <Detail label="Email" value={request.email ?? "Not provided"} />
            <Detail label="KakaoTalk ID" value={request.kakaoId ?? "Not provided"} />
            <Detail label="Package" value={request.packageId ?? "Not selected"} />
          </dl>

          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
              Request message
            </p>
            <p className="mt-3 rounded-[8px] border border-white/10 bg-slate-950/40 p-4 leading-7 text-slate-300">
              {request.message || "No additional request."}
            </p>
          </div>

          <form
            action={updateBookingStatusAction}
            className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row"
          >
            <input type="hidden" name="id" value={request.id} />
            <select
              name="status"
              defaultValue={request.status}
              className="rounded-[8px] border border-white/12 bg-slate-950/60 px-4 py-3 text-white"
            >
              <option value="pending">Pending</option>
              <option value="contacted">Contacted</option>
              <option value="confirmed">Confirmed</option>
              <option value="closed">Closed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <button
              type="submit"
              className="rounded-full bg-cyan-100 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950"
            >
              Update status
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

function Detail({
  label,
  value,
  copy = false
}: {
  label: string;
  value: string;
  copy?: boolean;
}) {
  return (
    <div className="rounded-[8px] border border-white/10 bg-slate-950/32 p-4">
      <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/70">
        {label}
      </dt>
      <dd className="mt-2 flex items-center justify-between gap-3 text-slate-100">
        <span className="break-all">{value}</span>
        {copy ? <CopyContactButton value={value} /> : null}
      </dd>
    </div>
  );
}
