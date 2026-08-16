import type { Metadata } from "next";
import { FaPhoneAlt, FaApple, FaGooglePlay, FaFileAlt } from "react-icons/fa";
import ServiceHero from "@/components/service/ServiceHero";
import BookingForm from "@/components/home/BookingForm";
import { siteConfig } from "@/lib/siteConfig";

const title = "Bookings | Baby Seat Taxi Sydney";
const description = "Book a baby capsule, child seat or booster seat taxi in Sydney by phone, app or online booking form.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/babyseattaxisydney-bookings" },
  openGraph: { title, description, url: "/babyseattaxisydney-bookings" },
  twitter: { card: "summary_large_image", title, description },
};

export default function BookingsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Bookings"
        title="Book Your Baby Seat Taxi"
        description="Three easy ways to book — by phone, through our app, or with an online booking request."
        breadcrumbLabel="Bookings"
        image={{ src: "/images/sydney-airport-transfers-with-baby-seats-real.png", alt: "Sydney Airport transfers with baby seats" }}
      />

      <section className="wt-section on-dark">
        <div className="container">
          <span className="wt-eyebrow">Bookings</span>
          <h2>Choose How to Book</h2>
          <div className="wt-grid-3">
            <div className="wt-card">
              <h3>
                <FaPhoneAlt aria-hidden="true" style={{ marginRight: 8, color: "var(--wt-blue)" }} /> Call Us
              </h3>
              <p>
                Speak directly with our booking team on <a href={`tel:${siteConfig.phoneIntl}`}>{siteConfig.phoneIntlDisplay}</a>,
                available 24 hours a day, 7 days a week.
              </p>
            </div>
            <div className="wt-card">
              <h3>
                <FaApple aria-hidden="true" style={{ marginRight: 6, color: "var(--wt-blue)" }} />
                <FaGooglePlay aria-hidden="true" style={{ marginRight: 8, color: "var(--wt-blue)" }} /> Book by App
              </h3>
              <p>
                Download the TipTop Ride app to book, track your driver and manage bookings from your phone on{" "}
                <a href={siteConfig.apps.appStore} target="_blank" rel="noreferrer">iOS</a> or{" "}
                <a href={siteConfig.apps.playStore} target="_blank" rel="noreferrer">Android</a>.
              </p>
            </div>
            <div className="wt-card">
              <h3>
                <FaFileAlt aria-hidden="true" style={{ marginRight: 8, color: "var(--wt-blue)" }} /> Request a Booking
              </h3>
              <p>
                Fill in the form below with your trip details and your child&apos;s age, and our team will confirm pricing and the
                correct seat for your journey.
              </p>
            </div>
          </div>

          <div style={{ maxWidth: 640, margin: "48px auto 0" }}>
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
