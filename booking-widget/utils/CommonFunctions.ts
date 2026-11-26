import dayjs from "dayjs";

// Loads the classic Google Maps JS API (Places + Geometry) the same way
// tiptopnextjs's src/utils/CommonFunctions.ts does — a plain injected <script> tag,
// no @react-google-maps/api or google-map-react wrapper library involved. Reuses this
// site's existing NEXT_PUBLIC_GOOGLE_MAPS_API_KEY (see lib/siteConfig.ts) rather than
// introducing a second Maps key.
export function loadGoogleMapScript(callback: () => void) {
  if (typeof window === "undefined") return;
  const w = window as any;
  // Ready only when the Places library is loaded too - a Maps script loaded
  // elsewhere without "places" would otherwise pass this check and break search.
  if (w.google?.maps?.places) {
    callback();
    return;
  }
  const existing = document.getElementById("wt-google-maps-script");
  if (existing) {
    existing.addEventListener("load", () => callback());
    existing.addEventListener("error", () => callback());
    return;
  }
  if (w.google?.maps?.importLibrary) {
    w.google.maps.importLibrary("places").then(() => callback()).catch(() => callback());
    return;
  }
  const googleMapScript = document.createElement("script");
  googleMapScript.id = "wt-google-maps-script";
  googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
  googleMapScript.async = true;
  googleMapScript.addEventListener("load", () => callback());
  googleMapScript.addEventListener("error", () => callback());
  window.document.body.appendChild(googleMapScript);
}

export const disabledPreviousDate = (current: any) => {
  return current && current < dayjs().startOf("day");
};
