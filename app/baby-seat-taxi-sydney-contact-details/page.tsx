import type { Metadata } from "next";
import Link from "next/link";
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import ServiceHero from "@/components/service/ServiceHero";
import Faq from "@/components/home/Faq";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact Baby Seat Taxi Sydney | Book Family Transport",
  description: "Contact Baby Seat Taxi Sydney by phone or email to book a baby capsule or child seat taxi, or ask a question. Available 24/7 across Sydney.",
};

const contactFaq = [
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking as early as possible, especially for airport transfers.",
  },
  {
    question: "Do you provide baby capsules?",
    answer: "Yes, baby capsules can be arranged during booking.",
  },
  {
    question: "Do you provide child seats?",
    answer: "Yes, child seats are available for toddlers and young children.",
  },
  {
    question: "Can I book an airport transfer?",
    answer: "Yes, we provide airport transfers throughout Sydney.",
  },
];

const areasWeService = [
  "Sydney CBD",
  "Parramatta",
  "Blacktown",
  "Liverpool",
  "Penrith",
  "Campbelltown",
  "Chatswood",
  "Bondi",
  "North Sydney",
  "Western Sydney",
];

export default function ContactUsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Get in Touch"
        title="Book a Baby Seat Taxi in Sydney"
        description="Contact Sydney's Baby Seat Taxi Specialists"
        breadcrumbLabel="Contact Us"
        image={{ src: "/images/family-transport-across-sydney-real.png", alt: "Family transport across Sydney with baby seats" }}
      />

      <section className="wt-section on-dark">
        <div className="container">
          <p style={{ maxWidth: 800 }}>
            Need a taxi with a baby capsule or child seat in Sydney? Our team is available to assist with airport
            transfers, hospital transport, family travel, and pre-booked baby seat taxi services across Sydney. We
            provide transport throughout Sydney including Parramatta, Blacktown, Liverpool, Penrith, Campbelltown,
            Chatswood, Bondi and surrounding suburbs. Whether you require a baby capsule for a newborn or a child
            seat for a toddler, our team can help arrange the right vehicle for your journey.
          </p>

          <div className="wt-grid-3" style={{ marginTop: 32 }}>
            <div className="wt-card">
              <h3>
                <FaMapMarkerAlt aria-hidden="true" style={{ marginRight: 8, color: "var(--wt-blue)" }} /> Address
              </h3>
              <p>
                {siteConfig.address.street}, {siteConfig.address.locality} {siteConfig.address.region}{" "}
                {siteConfig.address.postcode}, {siteConfig.address.country}
              </p>
            </div>
            <div className="wt-card">
              <h3>
                <FaPhoneAlt aria-hidden="true" style={{ marginRight: 8, color: "var(--wt-blue)" }} /> Call Us
              </h3>
              <p>
                <a href={`tel:${siteConfig.phoneLocal}`}>{siteConfig.phoneLocalDisplay}</a> (Locals)
                <br />
                <a href={`tel:${siteConfig.phoneIntl}`}>{siteConfig.phoneIntlDisplay}</a> (International)
              </p>
            </div>
            <div className="wt-card">
              <h3>
                <FaRegEnvelope aria-hidden="true" style={{ marginRight: 8, color: "var(--wt-blue)" }} /> Email Us
              </h3>
              <p>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </p>
            </div>
            <div className="wt-card">
              <h3>
                <FaClock aria-hidden="true" style={{ marginRight: 8, color: "var(--wt-blue)" }} /> Service Hours
              </h3>
              <p>24/7</p>
            </div>
          </div>

          <div style={{ marginTop: 48 }}>
            <span className="wt-eyebrow">Areas We Service</span>
            <h2>Areas We Service</h2>
            <ul style={{ columns: 2, maxWidth: 500, color: "rgba(255,255,255,0.78)" }}>
              {areasWeService.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <Link href="/#wcb-booking-form" className="wt-btn wt-btn-primary" style={{ marginTop: 16 }}>
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <Faq columns={[contactFaq]} title="Frequently Asked Questions" eyebrow="Questions" />
    </>
  );
}
