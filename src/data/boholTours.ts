import type { Availability, Package, TourType } from "@/models/tour";

export const boholTourTypes: TourType[] = [
  {
    id: "tour-whale-shark",
    slug: "bohol-whale-shark",
    name: "보홀 고래상어 투어",
    region: "보홀 알버 포인트",
    category: "marine",
    heroImage: "/images/bohol/whale-shark.png",
    themeKeyword: "자연 그대로",
    shortDescription:
      "자연스러운 움직임, 존중하는 거리, 제한된 인원을 바탕으로 준비하는 책임 있는 해양 경험입니다.",
    conservationNote:
      "지역 보전 가이드라인과 책임 있는 만남의 원칙을 중심으로 운영됩니다.",
    isActive: true,
    factCheckNotes: [
      "Verify exact Alburquerque municipal ordinance references before publishing legal claims.",
      "Replace general conservation language with sourced policy text when official documentation is approved."
    ]
  },
  {
    id: "tour-heritage-land",
    slug: "bohol-heritage-land-tour",
    name: "보홀 헤리티지 육상 투어",
    region: "보홀 하이랜드",
    category: "heritage",
    heroImage: "/images/bohol/chocolate-hills.png",
    themeKeyword: "오래된 풍경",
    shortDescription:
      "초콜릿 힐과 안경원숭이, 오랜 세월이 빚어낸 섬의 지질 풍경을 천천히 만납니다.",
    conservationNote:
      "민감한 지역에서 서식지 존중과 낮은 영향을 우선하도록 구성됩니다.",
    isActive: true,
    factCheckNotes: [
      "Confirm all UNESCO Global Geopark wording against official UNESCO and Bohol tourism source text."
    ]
  },
  {
    id: "tour-napaling",
    slug: "napaling-sardine-run",
    name: "나팔링 정어리떼 투어",
    region: "보홀 팡라오",
    category: "marine",
    heroImage: "/images/bohol/napaling-sardines.png",
    themeKeyword: "은빛 물결",
    shortDescription:
      "은빛 햇살을 따라 물결치듯 움직이는 정어리떼. 그 규모와 리듬이 만드는 압도적인 해양 경험입니다.",
    conservationNote:
      "차분한 입수, 리프를 보호하는 움직임, 적절한 거리 유지가 브리핑의 핵심입니다.",
    isActive: true
  },
  {
    id: "tour-balicasag",
    slug: "balicasag-island-sanctuary",
    name: "발리카삭 아일랜드 생츄어리",
    region: "보홀 발리카삭",
    category: "island",
    heroImage: "/images/bohol/balicasag-turtle.png",
    themeKeyword: "바다의 수호자",
    shortDescription:
      "투명한 바다와 산호 정원, 보호 해역을 유유히 유영하는 바다거북과 함께하는 시간입니다.",
    conservationNote:
      "해양 보호구역 가이드라인, 날씨, 현지 수용 가능 인원에 따라 운영됩니다.",
    isActive: true,
    factCheckNotes: [
      "Validate current sanctuary rules, access limits, and guide requirements before adding precise policy claims."
    ]
  }
];

export const boholPackages: Package[] = [
  {
    id: "package-whale-shark-signature",
    tourTypeId: "tour-whale-shark",
    name: "시그니처 책임 만남 프로그램",
    description:
      "오전 일정 조율, 안전 브리핑, 가이드 동행 만남 시간, 투어 후 안내를 포함합니다.",
    priceAdult: null,
    priceChild: null,
    inclusions: ["현지 일정 조율", "안전 브리핑", "해양 가이드 지원"],
    options: ["프라이빗 차량 이동", "사진 기록 요청"],
    isActive: true
  }
];

export const boholAvailability: Availability[] = [
  {
    id: "availability-whale-shark-sample",
    tourTypeId: "tour-whale-shark",
    date: "2026-05-15",
    sessionTime: "06:00",
    capacity: 12,
    bookedCount: 4,
    status: "limited"
  }
];

export function getTourBySlug(slug: string) {
  return boholTourTypes.find((tour) => tour.slug === slug && tour.isActive) ?? null;
}

export function getTourPackages(tourTypeId: string) {
  return boholPackages.filter(
    (tourPackage) => tourPackage.tourTypeId === tourTypeId && tourPackage.isActive
  );
}

export function getAvailability(tourTypeId: string) {
  return boholAvailability.filter(
    (availability) => availability.tourTypeId === tourTypeId
  );
}
