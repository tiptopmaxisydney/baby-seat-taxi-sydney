import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/service/ServiceHero";
import Faq from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";

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
    question: "Can I request a baby capsule, child seat, or booster seat?",
    answer: "Absolutely. We provide all three options depending on your child's age and requirements.",
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

            <h2 style={{ marginTop: 40 }}>Our Mission</h2>
            <p>
              Our mission is simple: to provide safe, reliable, and family-friendly transport across Sydney with
              appropriate child restraints available for every journey.
            </p>
            <p>We believe parents should never have to compromise on safety when travelling with their children.</p>
            <p>
              Every booking is managed with care to ensure families receive the right vehicle, the appropriate
              child restraint, and professional service from pickup to drop-off.
            </p>
          </div>
        </div>
      </section>

      <Faq columns={[aboutFaq]} title="Frequently Asked Questions" eyebrow="Questions" />
      <FinalCta />
    </>
  );
}
