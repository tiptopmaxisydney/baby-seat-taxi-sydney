"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_ACCESS_KEY } from "@/booking-widget/utils/api";
import { siteConfig } from "@/lib/siteConfig";

interface BookingSummary {
  pickup_address?: string;
  drop_address?: string;
  date?: string;
  time?: string;
  is_return_trip?: boolean;
  return_pickup_address?: string;
  return_drop_address?: string;
  return_date?: string;
  return_time?: string;
  vehicle_name?: string;
  passenger?: number;
  booking_id?: string;
  amount?: number;
}

const DetailRow = ({ label, value }: { label: string; value?: React.ReactNode }) =>
  value === undefined || value === null || value === "" ? null : (
    <div className="flex justify-between gap-4 py-1.5 border-b border-black/10 last:border-b-0">
      <span className="text-sm opacity-70">{label}</span>
      <span className="text-sm font-medium text-right">{value}</span>
    </div>
  );

export default function ThankYouContent() {
  // Defaults to "confirmed" for the in-page (non-redirect) success flow, which
  // only ever routes here once Stripe has already reported success. It only
  // flips to "checking"/"failed" when we land here via a redirect-based
  // payment method and need to verify payment_intent_client_secret.
  const [paymentStatus, setPaymentStatus] = useState<"confirmed" | "checking" | "failed">("confirmed");
  const [booking, setBooking] = useState<BookingSummary | null>(null);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("tiptop_last_booking");
      if (stored) setBooking(JSON.parse(stored));
    } catch {
      // ignore — malformed/unavailable sessionStorage, just show the generic message
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    if (!clientSecret) return;

    setPaymentStatus("checking");
    loadStripe(STRIPE_ACCESS_KEY as string).then(async (stripe) => {
      if (!stripe) return;
      const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
      setPaymentStatus(paymentIntent?.status === "succeeded" ? "confirmed" : "failed");
    });
  }, []);

  const bookingRef = booking?.booking_id ? booking.booking_id.slice(-8).toUpperCase() : undefined;
  const isBookingPayment = !!booking; // distinguishes a paid booking from the plain "contact us" thank-you

  return (
    <section className="wt-page-hero" style={{ minHeight: "50vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <div className="wt-page-hero-inner">
          <div className="wt-hero-eyebrow">
            {paymentStatus === "failed" ? "Payment Not Confirmed" : "Request Received"}
          </div>

          {paymentStatus === "failed" ? (
            <>
              <h1>We couldn&apos;t confirm your payment</h1>
              <p>
                Please check your card details and try booking again, or contact us if you believe this is a
                mistake.
              </p>
            </>
          ) : isBookingPayment ? (
            <>
              <h1>Your Transfer Has Been Booked</h1>
              <p>
                Thank you for booking online and completing the payment. Please check your email for confirmation —
                if you don&apos;t receive one, call us at {siteConfig.phoneLocalDisplay}.
              </p>
            </>
          ) : (
            <>
              <h1>Thank You</h1>
              <p>
                Thank you for contacting Baby Seat Taxi Sydney. Our booking team has received your request and will
                be in touch shortly to confirm the details of your trip.
              </p>
            </>
          )}

          {paymentStatus !== "failed" && booking && (
            <div className="max-w-[480px] w-full rounded-xl border border-black/10 bg-white/90 p-4 my-5 text-left mx-auto">
              {bookingRef && <DetailRow label="Booking reference" value={`#${bookingRef}`} />}
              <DetailRow label="Pickup" value={booking.pickup_address} />
              <DetailRow label="Drop-off" value={booking.drop_address} />
              <DetailRow
                label="Pickup date & time"
                value={[booking.date, booking.time].filter(Boolean).join(" ") || undefined}
              />
              {booking.is_return_trip && (
                <>
                  <DetailRow label="Return pickup" value={booking.return_pickup_address} />
                  <DetailRow label="Return drop-off" value={booking.return_drop_address} />
                  <DetailRow
                    label="Return date & time"
                    value={[booking.return_date, booking.return_time].filter(Boolean).join(" ") || undefined}
                  />
                </>
              )}
              <DetailRow label="Vehicle" value={booking.vehicle_name} />
              <DetailRow label="Passengers" value={booking.passenger} />
              <DetailRow
                label="Amount paid"
                value={booking.amount ? `AUD $${Number(booking.amount).toFixed(2)}` : undefined}
              />
            </div>
          )}

          <div className="wt-page-hero-actions">
            <Link href="/" className="wt-btn wt-btn-primary">
              Back to Home
            </Link>
            <a href={`tel:${siteConfig.phoneIntl}`} className="wt-btn wt-btn-outline-inverted">
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
