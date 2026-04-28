import type { Metadata } from "next";
import { BookingCTASection } from "@/components/whale-shark/BookingCTASection";
import { HeroSection } from "@/components/whale-shark/HeroSection";
import { MarineHighlightsSection } from "@/components/whale-shark/MarineHighlightsSection";
import { PhilosophySection } from "@/components/whale-shark/PhilosophySection";
import { ResponsibleTourismSection } from "@/components/whale-shark/ResponsibleTourismSection";
import { ThreePillarsSection } from "@/components/whale-shark/ThreePillarsSection";

export const metadata: Metadata = {
  title: "보홀 고래상어 투어 | EXITour",
  description:
    "자연스러운 만남, 적절한 거리, 경이로움을 중심에 둔 EXITour 보홀 고래상어 투어."
};

type WhaleSharkPageProps = {
  searchParams?: Promise<{
    booking?: string;
  }>;
};

export default async function WhaleSharkLandingPage({
  searchParams
}: WhaleSharkPageProps) {
  const params = await searchParams;

  return (
    <main>
      <HeroSection />
      <PhilosophySection />
      <MarineHighlightsSection />
      <ThreePillarsSection />
      <ResponsibleTourismSection />
      <BookingCTASection bookingStatus={params?.booking} />
    </main>
  );
}
