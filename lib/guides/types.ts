import type { Faq } from "@/lib/homeData";

export type GuideCard = { title: string; description: string };

export type GuideSection = {
  heading: string;
  eyebrow?: string;
  paragraphs?: string[];
  list?: string[];
  listIntro?: string;
  cards?: GuideCard[];
  // External links (e.g. official guidance), opened in a new tab.
  links?: { label: string; href: string }[];
  // Two-column "label / detail" table, e.g. child age -> what to tell us.
  table?: { head: [string, string]; rows: [string, string][] };
  // Renders the interactive family vehicle calculator in this section.
  calculator?: boolean;
};

export type GuidePillar = "Child Seats" | "Sydney Airport" | "Newborn & Hospital" | "Locations";

export const guideImages = {
  capsule: "/images/baby-capsule-taxi-sydney-real.png",
  childSeat: "/images/child-seat-taxi-sydney-real.png",
  airport: "/images/sydney-airport-transfers-with-baby-seats-real.png",
  hospital: "/images/hospital-transfers-with-baby-seats-real.png",
  family: "/images/family-transport-across-sydney-real.png",
  safety: "/images/child-safety-information-real.png",
} as const;

export type GuidePage = {
  slug: string;
  pillar: GuidePillar;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroDescription: string;
  image: keyof typeof guideImages;
  sections: GuideSection[];
  // Shows the official NSW sources and "Last reviewed" date under the hero - set on every page
  // that summarises the child-restraint rules.
  officialSources?: boolean;
  faq: Faq[];
  // Slugs of related pages (guides or CMS pages) shown as internal links at the bottom.
  related: { label: string; href: string }[];
};
