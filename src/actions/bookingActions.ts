"use server";

import { redirect } from "next/navigation";
import { boholTourTypes } from "@/data/boholTours";
import {
  createBookingRequest,
  updateBookingRequestStatus
} from "@/lib/bookingRequests";
import type { BookingStatus } from "@/models/tour";

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function readOptionalString(formData: FormData, key: string) {
  const value = readString(formData, key);
  return value.length > 0 ? value : null;
}

function readNumber(formData: FormData, key: string, fallback: number) {
  const rawValue = readString(formData, key);
  const parsed = Number(rawValue);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

export async function createBookingRequestAction(formData: FormData) {
  const tourTypeId = readString(formData, "tourTypeId");
  const tour = boholTourTypes.find((tourType) => tourType.id === tourTypeId);

  if (!tour) {
    redirect("/bohol/whale-shark?booking=invalid#booking");
  }

  const customerName = readString(formData, "customerName");
  const contact = readString(formData, "contact");
  const travelDate = readString(formData, "travelDate");

  if (!customerName || !contact || !travelDate) {
    redirect("/bohol/whale-shark?booking=missing#booking");
  }

  createBookingRequest({
    tourTypeId,
    packageId: readOptionalString(formData, "packageId"),
    customerName,
    contact,
    email: readOptionalString(formData, "email"),
    kakaoId: readOptionalString(formData, "kakaoId"),
    travelDate,
    paxAdult: readNumber(formData, "paxAdult", 1),
    paxChild: readNumber(formData, "paxChild", 0),
    message: readString(formData, "message")
  });

  redirect("/bohol/whale-shark?booking=received#booking");
}

export async function updateBookingStatusAction(formData: FormData) {
  const id = readString(formData, "id");
  const status = readString(formData, "status") as BookingStatus;
  const allowed: BookingStatus[] = [
    "pending",
    "contacted",
    "confirmed",
    "closed",
    "cancelled"
  ];

  if (id && allowed.includes(status)) {
    updateBookingRequestStatus(id, status);
  }

  redirect(`/admin/booking-requests/${id}`);
}
