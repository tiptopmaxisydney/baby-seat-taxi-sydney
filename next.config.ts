import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // superagent (used by booking-widget/utils/api.ts, ported from tiptopnextjs) pulls in
  // formidable for its Node build, which uses a dynamic require() Turbopack can't bundle
  // for the "use client" component's SSR pass. Treat it as an external runtime require.
  serverExternalPackages: ["superagent", "superagent-promise", "formidable"],
  images: {
    minimumCacheTTL: 31536000,
    qualities: [65, 75],
    // Local placeholder graphics are SVGs until real photography is supplied.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // content-hub CMS media (Payload uploads) - dev hub runs on :3001, prod at cms.babyseattaxisydney.com.au.
    remotePatterns: [
      { protocol: "http", hostname: "localhost", port: "3001" },
      { protocol: "https", hostname: "cms.babyseattaxisydney.com.au" },
    ],
  },
  // No custom long-lived "immutable" Cache-Control on /images/* while these
  // are still placeholder graphics being iterated on — `immutable` tells
  // browsers to never revalidate a given URL again, so swapping a file's
  // content at the same path (as happens repeatedly during this phase)
  // would leave visitors' browsers permanently stuck on the old version.
  // Re-add a long-lived immutable header once real, final assets are in
  // place (ideally with content-hashed filenames instead of stable ones).

  // URL restructure (2026-08): transport-solutions-sydney (tiptopmaxisydney.com.au) is the
  // canonical brand for this keyword - this site's duplicate page permanently redirects there.
  async redirects() {
    return [
      {
        source: "/baby-seat-taxi-western-sydney-airport/",
        destination: "https://tiptopmaxisydney.com.au/western-sydney-airport-baby-seat-taxi/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
