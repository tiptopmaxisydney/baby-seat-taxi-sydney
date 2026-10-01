import type { GuidePage } from "./types";
import { childSeatGuides } from "./childSeat";
import { airportGuides } from "./airport";
import { hospitalGuides } from "./hospital";
import { suburbGuides } from "./suburbs";

// Code-managed guide pages, served by app/[slug] ahead of CMS pages. Slugs must not
// collide with CMS page slugs for the baby-seat site.
export const guidePages: GuidePage[] = [...childSeatGuides, ...airportGuides, ...hospitalGuides, ...suburbGuides];

export function getGuidePage(slug: string): GuidePage | undefined {
  return guidePages.find((p) => p.slug === slug);
}

export { suburbGuides };
