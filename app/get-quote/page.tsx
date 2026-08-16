import type { Metadata } from "next";
import ServiceHero from "@/components/service/ServiceHero";
import BookingForm from "@/components/home/BookingForm";
import Faq from "@/components/home/Faq";
import { siteConfig } from "@/lib/siteConfig";

const title = "Get a Booking | Baby Seat Taxi Sydney";
const description = "Get an instant booking for a baby capsule, child seat or booster seat taxi in Sydney. Tell us your trip details and we'll confirm pricing and availability.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/get-quote" },
  openGraph: { title, description, url: "/get-quote" },
  twitter: { card: "summary_large_image", title, description },
};

export default function GetBookingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Get a Booking"
        title="Book Your Baby Seat Taxi"
        description="Tell us your pickup, destination and your child's age, and we'll confirm pricing and the right seat for your trip."
        breadcrumbLabel="Get a Booking"
        image={{ src: "/images/baby-capsule-taxi-sydney-real.png", alt: "Baby capsule taxi Sydney for newborns and infants" }}
      />

      <section className="wt-section on-dark">
        <div className="container">
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center" }}>Request Your Booking</h2>
            <BookingForm />
            <p style={{ textAlign: "center", marginTop: 24, color: "rgba(255,255,255,0.65)", fontSize: "0.9rem" }}>
              Prefer to speak with our team? Call{" "}
              <a href={`tel:${siteConfig.phoneIntl}`}>{siteConfig.phoneIntlDisplay}</a> or email{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
