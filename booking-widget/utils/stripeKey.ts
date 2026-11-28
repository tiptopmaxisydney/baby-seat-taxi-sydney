// Stripe publishable key for the CURRENT checkout. Wheelchair bookings are charged on a
// separate Stripe account, so the booking API returns the key to use (publishable_key) with
// each payment. It is kept for the 3-D Secure / bank redirect back to the thank-you page.
// Falls back to NEXT_PUBLIC_STRIPE_KEY (main TipTop account).
import { STRIPE_ACCESS_KEY } from "@/booking-widget/utils/api";

const STORE = "tt_stripe_pk";
let current: string | null = null;

export function setStripeKey(key?: string | null) {
  if (!key) return;
  current = key;
  try { sessionStorage.setItem(STORE, key); } catch { /* private mode: keep in memory only */ }
}

export function getStripeKey(): string {
  if (current) return current;
  try {
    const saved = sessionStorage.getItem(STORE);
    if (saved) return saved;
  } catch { /* storage blocked */ }
  return STRIPE_ACCESS_KEY as string;
}
