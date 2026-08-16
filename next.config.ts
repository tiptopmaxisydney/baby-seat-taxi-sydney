import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 31536000,
    qualities: [65, 75],
    // Local placeholder graphics are SVGs until real photography is supplied.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // No custom long-lived "immutable" Cache-Control on /images/* while these
  // are still placeholder graphics being iterated on — `immutable` tells
  // browsers to never revalidate a given URL again, so swapping a file's
  // content at the same path (as happens repeatedly during this phase)
  // would leave visitors' browsers permanently stuck on the old version.
  // Re-add a long-lived immutable header once real, final assets are in
  // place (ideally with content-hashed filenames instead of stable ones).
};

export default nextConfig;
