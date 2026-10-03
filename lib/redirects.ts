// Pages consolidated into stronger equivalents. Shared by next.config.ts (the redirects) and
// app/sitemap.ts (so redirected CMS pages aren't listed).
export const consolidatedPages: { from: string; to: string }[] = [
  // URL restructure (2026-08): transport-solutions-sydney (tiptopmaxisydney.com.au) is the
  // canonical brand for this keyword - this site's duplicate page permanently redirects there.
  { from: "baby-seat-taxi-western-sydney-airport", to: "https://tiptopmaxisydney.com.au/western-sydney-airport-baby-seat-taxi/" },
  // CMS blog post whose slug is a 2018 WordPress leftover and whose body is generic RPA history.
  { from: "what-the-martian-can-teach-sales", to: "/rpa-hospital-newborn-taxi/" },
  // Duplicated the search intent of the main Sydney Airport hub.
  { from: "baby-seat-taxi-sydney-airport", to: "/sydney-airport-transfers-with-baby-seats/" },
  // 2026-10: booster seats are not a service we provide - the booster page goes to the child seat
  // page, and the seat guide moved to a slug without "booster" in it.
  { from: "booster-seat-taxi-sydney", to: "/child-seat-taxi-sydney/" },
  { from: "baby-child-booster-seat-guide", to: "/which-child-seat-to-request/" },
];
