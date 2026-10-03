import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import SplitSection from "@/components/home/SplitSection";
import CardGrid from "@/components/home/CardGrid";
import ServiceAreas from "@/components/home/ServiceAreas";
import Faq from "@/components/home/Faq";
import FamilyVehicleCalculator from "@/components/home/FamilyVehicleCalculator";
import {
  restraintOptions,
  restraintBookingNote,
  familyBenefits,
  bookingChecklist,
  bookingSteps,
  familyVehicles,
  nswTaxiRules,
  nswChildRestraintUrl,
  pointToPointChildRestraintUrl,
  lastReviewed,
  officialGuidance,
  popularDestinations,
  hospitalsServed,
  airportServices,
  faqColumns,
} from "@/lib/homeData";
import { getBlogPosts } from "@/lib/blogPosts";
import { siteConfig } from "@/lib/siteConfig";
import { guideLinks } from "@/lib/navigation";
import { L } from "@/lib/guides/links";

const airportGuideLinks = [L.international, L.domestic, L.airportHotel, L.areas];

export const metadata: Metadata = {
  title: "Baby Seat Taxi Sydney | Taxis with Baby Capsules & Child Seats",
  description: siteConfig.description,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqColumns.flat().map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default async function Home() {
  const blogPosts = await getBlogPosts();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <link rel="preload" href="/images/Baby-Seat-Finall-Logo.webp" as="image" fetchPriority="high" />

      <Hero />

      <section className="wt-section on-dark">
        <div className="container">
          <span className="wt-eyebrow">Plan Your Trip</span>
          <h2>Tell Us About Your Family</h2>
          <p style={{ maxWidth: 820 }}>
            Tell us who&apos;s travelling - each child&apos;s age and approximate size, the adults, your luggage and
            pram - and our team will recommend the vehicle and confirm the child restraints. You don&apos;t need to
            choose the exact restraint yourself.
          </p>
          <FamilyVehicleCalculator />
        </div>
      </section>

      <CardGrid
        eyebrow="Child Restraint Options"
        title="Baby Capsules & Child Seats"
        intro="Tell us your child's age and approximate size - we'll arrange the restraint to suit."
        cards={restraintOptions}
        footnote={restraintBookingNote}
      />

      <CardGrid
        eyebrow="Why Families Pre-Book With Us"
        title="The Right Vehicle. The Requested Child Restraint. Room for the Family."
        intro="Child restraint requirements, passengers, prams and luggage are recorded before your journey so the vehicle can be selected around the needs of your family."
        cards={familyBenefits}
      />

      <section className="wt-section on-dark">
        <div className="container">
          <span className="wt-eyebrow">Before You Book</span>
          <h2>What to Include When Booking</h2>
          <div className="wt-split">
            <div className="wt-split-media">
              <video
                controls
                preload="metadata"
                poster="https://babyseattaxisydney.com.au/wp-content/uploads/2023/03/photo.png"
                style={{ borderRadius: "var(--wt-radius-lg)", width: "100%" }}
              >
                <source src="https://babyseattaxisydney.com.au/wp-content/uploads/2023/03/Baby-seat-Taxi-Sydney.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="wt-split-body">
              <p>
                Travelling with a newborn, toddler or young child shouldn&apos;t mean carrying your own car seat across
                Sydney. Tell us who&apos;s travelling and we&apos;ll help arrange a suitable vehicle for your family.
              </p>
              <p>When booking, include:</p>
              <ul>
                {bookingChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href="/#wcb-booking-form" className="wt-btn wt-btn-primary">
                Book Your Family Transfer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SplitSection
        title="Sydney Airport Transfers with Child Seats"
        eyebrow="Airport Transfers"
        paragraphs={[
          "Flying into or out of Sydney with children? Add your flight number, the number and ages of children, adults, suitcases, carry-on bags, any pram and your destination when booking - and book your return flight transfer at the same time.",
          "Example: 2 adults and 2 children (an 8-month-old and a 4-year-old), 2 large suitcases, 2 carry-ons and 1 folded pram. Enter these details when booking and we'll arrange the appropriate vehicle and child restraints.",
        ]}
        itemsIntro="Services include:"
        items={airportServices}
        image={{ src: "/images/sydney-airport-transfers-with-baby-seats-real.png", alt: "Sydney Airport transfers with baby seats", width: 795, height: 529 }}
        imageFirst
        background="dark"
      />

      <CardGrid
        eyebrow="Prams, Luggage & Family Vehicles"
        title="Travelling with More Than One Child?"
        intro="A baby seat may fit in a sedan, but your full travel setup may not. Two adults, two children, two child restraints, a large pram and four suitcases may need a larger vehicle. Families can request multiple restraints, subject to vehicle configuration and availability."
        cards={familyVehicles}
        footnote="Child restraints change the number of usable seats, so tell us everyone travelling and everything you're bringing - we'll confirm a vehicle that fits."
      />

      <SplitSection
        title="Newborn Hospital-to-Home Transfers"
        eyebrow="Hospital Transfers"
        paragraphs={[
          "Bringing a newborn home is a journey to plan ahead. Tell us your baby's age, how many adults are travelling and what you're bringing - baby bag, pram or hospital luggage - and we'll arrange a rear-facing restraint and a suitable vehicle. If your discharge time changes, contact us to adjust the booking.",
        ]}
        itemsIntro="We provide pickups from Sydney hospitals including:"
        items={hospitalsServed}
        image={{ src: "/images/hospital-transfers-with-baby-seats-real.png", alt: "Hospital transfers with baby seats in Sydney", width: 795, height: 529 }}
        background="dark"
      />

      <section className="wt-section on-dark">
        <div className="container">
          <span className="wt-eyebrow">How Booking Works</span>
          <h2>How Booking Works</h2>
          <div className="wt-steps">
            {bookingSteps.map((step, i) => (
              <div className="wt-step" key={step.title}>
                <div className="wt-step-num">{String(i + 1).padStart(2, "0")}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wt-section on-dark">
        <div className="container">
          <span className="wt-eyebrow">NSW Child Restraint Information</span>
          <h2>NSW Taxi Child Restraint Information</h2>
          <p style={{ maxWidth: 820 }}>
            Children under 12 months require an appropriate approved child restraint when travelling in a taxi.
            Different taxi-specific requirements apply for older children, and hire and rideshare vehicles follow
            the private-vehicle rules instead. If you&apos;d like a child restraint arranged, tell us each
            child&apos;s age and approximate size when booking.
          </p>
          <div className="wt-grid-3">
            {nswTaxiRules.map((r) => (
              <div className="wt-card" key={r.age}>
                <h3>{r.age}</h3>
                <p>{r.rule}</p>
              </div>
            ))}
          </div>
          <p style={{ maxWidth: 820, marginTop: 24 }}>
            Source:{" "}
            <a href={nswChildRestraintUrl} target="_blank" rel="noreferrer">
              NSW Government – Child car seats
            </a>{" "}
            and the{" "}
            <a href={pointToPointChildRestraintUrl} target="_blank" rel="noreferrer">
              NSW Point to Point Transport Commissioner
            </a>
            . Last reviewed: {lastReviewed}. Read our{" "}
            <Link href="/nsw-taxi-baby-seat-laws/">guide to NSW taxi baby seat laws</Link> for the taxi, rideshare
            and private vehicle rules side by side.
          </p>
        </div>
      </section>

      <SplitSection
        title="Family Transport Across Sydney"
        eyebrow="Family Transport"
        paragraphs={[
          "From hotels and cruise terminals to medical appointments, family gatherings and Sydney's attractions, book family transport with child restraints arranged for each child.",
        ]}
        itemsIntro="Popular family destinations in Sydney:"
        items={popularDestinations}
        image={{ src: "/images/family-transport-across-sydney-real.png", alt: "Family transport across Sydney with baby seats", width: 795, height: 529 }}
        imageFirst
        background="dark"
      />

      <ServiceAreas />

      <section className="wt-section on-dark">
        <div className="container">
          <span className="wt-eyebrow">Family Travel Guides</span>
          <h2>Plan Your Family&apos;s Journey</h2>
          <nav className="wt-related" aria-label="Family travel guides">
            {[...guideLinks, ...airportGuideLinks].map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="wt-section on-dark">
        <div className="container">
          <span className="wt-eyebrow">Official Guidance</span>
          <h2>Official Child Restraint Guidance</h2>
          <div className="wt-grid-3">
            {officialGuidance.map((item) => (
              <a href={item.href} key={item.href} target="_blank" rel="noreferrer" className="wt-card" style={{ display: "block" }}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Faq />

      <section className="wt-section on-dark">
        <div className="container">
          <div className="wt-blog-grid">
            {blogPosts.map((post) => (
              <Link href={`/${post.slug}/`} key={post.slug} className="wt-blog-card">
                <Image src={post.image.src} alt={post.image.alt} width={400} height={225} style={{ width: "100%", height: "auto" }} />
                <div className="wt-blog-card-body">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
