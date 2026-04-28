export type TourCategory = "marine" | "heritage" | "island";

export type TourType = {
  id: string;
  slug: string;
  name: string;
  region: string;
  category: TourCategory;
  heroImage: string;
  themeKeyword: string;
  shortDescription: string;
  conservationNote: string;
  isActive: boolean;
  factCheckNotes?: string[];
};

export type Package = {
  id: string;
  tourTypeId: string;
  name: string;
  description: string;
  priceAdult: number | null;
  priceChild: number | null;
  inclusions: string[];
  options: string[];
  isActive: boolean;
};

export type Availability = {
  id: string;
  tourTypeId: string;
  date: string;
  sessionTime: string;
  capacity: number;
  bookedCount: number;
  status: "open" | "limited" | "full" | "closed";
};

export type BookingStatus =
  | "pending"
  | "contacted"
  | "confirmed"
  | "closed"
  | "cancelled";

export type BookingRequest = {
  id: string;
  tourTypeId: string;
  packageId: string | null;
  customerName: string;
  contact: string;
  email: string | null;
  kakaoId: string | null;
  travelDate: string;
  paxAdult: number;
  paxChild: number;
  message: string;
  status: BookingStatus;
  createdAt: string;
};

export type BookingRequestInput = Omit<
  BookingRequest,
  "id" | "status" | "createdAt"
>;
