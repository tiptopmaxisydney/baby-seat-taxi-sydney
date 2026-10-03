import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/service/ServiceHero";
import Faq from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";
import { siteConfig } from "@/lib/siteConfig";

const title = "Baby Seat Taxi Company in Sydney | Safety-First Family Cabs";
const description = "About Baby Seat Taxi Sydney - safe family transport across Sydney with baby capsules and child seats available on request.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/baby-seat-taxi-company-in-sydney" },
  openGraph: { title, description, url: "/baby-seat-taxi-company-in-sydney" },
  twitter: { card: "summary_large_image", title, description },
};

const aboutFaq = [
  {
    question: "Do I need to request a baby seat when booking?",
    answer: "Yes. Please advise us during booking so we can arrange the appropriate child restraint.",
  },
  {
    question: "Do you provide airport transfers?",
    answer: "Yes. Sydney Airport transfers are one of our most popular services.",
  },
  {
    question: "Can I request a baby capsule or child seat?",
    answer: "Yes. Tell us each child's age and approximate size and we'll arrange an appropriate restraint.",
  },
  {
    question: "Do you operate across Sydney?",
    answer: "Yes. We provide family transport services throughout Sydney and surrounding suburbs.",
  },
  {
    question: "Can I use my own child seat?",
    answer: "Yes. You're welcome to use your own approved child restraint if preferred.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="About Us"
        title="Baby Seat Taxi Company in Sydney"
        description="About Baby Seat Taxi Sydney - Safe Family Transport Across Sydney"
        breadcrumbLabel="About Us"
        image={{ src: "/images/baby-seat-taxi-sydney-hero.png", alt: "Baby Seat Taxi Sydney family transport" }}
      />

      <section className="wt-section on-dark">
        <div className="container">
          <div style={{ maxWidth: 820 }}>
            <p>
              At Baby Seat Taxi Sydney, we understand that travelling with children requires more than just a
              ride. Parents need safety, reliability, comfort, and peace of mind every time they travel. That&apos;s
              why we specialise in family-friendly transport services with baby capsules and child seats available
              throughout Sydney.
            </p>
            <p>
              Whether you&apos;re travelling to Sydney Airport, a hospital appointment, a family gathering, a
              cruise terminal, or simply heading across the city, our goal is to provide safe and dependable
              transport for families with children of all ages.
            </p>

            <h2>Our Story</h2>
            <p>
              Baby Seat Taxi Sydney was created to solve a common problem faced by parents and caregivers across
              Sydney, finding safe transport equipped with the right child restraints. Many taxis and rideshare
              vehicles do not carry child seats, leaving families with limited options when travelling with
              newborns, toddlers, and young children.
            </p>
            <p>
              We recognised the need for a dedicated transport service focused on family safety, convenience, and
              reliability. Today, we proudly help Sydney families travel confidently by providing baby capsules and
              child seats upon request.
            </p>
            <Link href="/#wcb-booking-form" className="wt-btn wt-btn-primary">
              Book Now
            </Link>

            <h2 style={{ marginTop: 40 }}>Family Transport Planned Around Your Children</h2>
            <p>
              Child restraint requirements, passengers, prams and luggage are recorded before your journey so the
              vehicle can be selected around the needs of your family. Tell us each child&apos;s age and approximate
              size when booking and we&apos;ll arrange an appropriate restraint.
            </p>

            <h2 style={{ marginTop: 40 }}>Who We Are</h2>
            <p>
              Baby Seat Taxi Sydney is operated by <strong>{siteConfig.legalName} Pty Ltd</strong>, based at{" "}
              {siteConfig.address.street}, {siteConfig.address.locality} {siteConfig.address.region}{" "}
              {siteConfig.address.postcode}. We operate as a booking service and may use authorised taxis and
              hire vehicles from other providers to complete your journey.
            </p>
            <p>
              Bookings are available 24/7 online or by phone on{" "}
              <a href={`tel:${siteConfig.phoneIntl}`}>{siteConfig.phoneLocalDisplay}</a>, and by email at{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. For questions or feedback about a
              booking, <Link href="/baby-seat-taxi-sydney-contact-details/">contact our team</Link>.
            </p>

            <h2 style={{ marginTop: 40 }}>How Booking Works</h2>
            <ol>
              <li>Enter your journey - plus your flight number for airport pickups.</li>
              <li>Tell us each child&apos;s age and approximate size.</li>
              <li>Add passengers, luggage and any pram.</li>
              <li>Receive your booking confirmation.</li>
              <li>Your vehicle arrives prepared for the requirements recorded on your booking.</li>
            </ol>

            <h2 style={{ marginTop: 40 }}>Feedback and Complaints</h2>
            <p>
              If something didn&apos;t go to plan, email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or
              call us with your booking details and our team will look into it.
            </p>
          </div>
        </div>
      </section>

      <Faq columns={[aboutFaq]} title="Frequently Asked Questions" eyebrow="Questions" />
      <FinalCta />
    </>
  );
}
