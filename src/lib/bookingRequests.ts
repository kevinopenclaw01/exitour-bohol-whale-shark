import { revalidatePath } from "next/cache";
import type {
  BookingRequest,
  BookingRequestInput,
  BookingStatus
} from "@/models/tour";

const bookingRequests = new Map<string, BookingRequest>();

export function getBookingRequests(filters?: {
  tourTypeId?: string;
  date?: string;
  status?: BookingStatus;
}) {
  return Array.from(bookingRequests.values())
    .filter((request) => {
      if (filters?.tourTypeId && request.tourTypeId !== filters.tourTypeId) {
        return false;
      }

      if (filters?.date && request.travelDate !== filters.date) {
        return false;
      }

      if (filters?.status && request.status !== filters.status) {
        return false;
      }

      return true;
    })
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function getBookingRequestById(id: string) {
  return bookingRequests.get(id) ?? null;
}

export function createBookingRequest(input: BookingRequestInput) {
  const id = `br_${Date.now().toString(36)}_${Math.random()
    .toString(36)
    .slice(2, 8)}`;

  const request: BookingRequest = {
    ...input,
    id,
    status: "pending",
    createdAt: new Date().toISOString()
  };

  bookingRequests.set(id, request);
  revalidatePath("/admin/booking-requests");
  return request;
}

export function updateBookingRequestStatus(id: string, status: BookingStatus) {
  const request = bookingRequests.get(id);

  if (!request) {
    return null;
  }

  const updated = { ...request, status };
  bookingRequests.set(id, updated);
  revalidatePath("/admin/booking-requests");
  revalidatePath(`/admin/booking-requests/${id}`);
  return updated;
}
