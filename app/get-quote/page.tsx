import type { Metadata } from "next";
import ServiceHero from "@/components/service/ServiceHero";
import BookingForm from "@/components/home/BookingForm";
import Faq from "@/components/home/Faq";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Get a Quote | Baby Seat Taxi Sydney",
  description: "Get an instant quote for a baby capsule, child seat or booster seat taxi in Sydney. Tell us your trip details and we'll confirm pricing and availability.",
};

export default function GetQuotePage() {
  return (
    <>
      <ServiceHero
        eyebrow="Get a Quote"
        title="Get a Baby Seat Taxi Quote"
        description="Tell us your pickup, destination and your child's age, and we'll confirm pricing and the right seat for your trip."
        breadcrumbLabel="Get a Quote"
      />

      <section className="wt-section on-dark">
        <div className="container">
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
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
