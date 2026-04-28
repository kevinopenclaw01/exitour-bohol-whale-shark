import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EXITour | 보홀 고래상어 투어",
  description:
    "자연스러운 만남과 책임 있는 운영을 바탕으로 준비하는 EXITour 보홀 고래상어 투어."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
