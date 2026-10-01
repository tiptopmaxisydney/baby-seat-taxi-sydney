import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/service/ServiceHero";
import CardGrid from "@/components/home/CardGrid";
import Faq from "@/components/home/Faq";
import {
  nswTaxiRules,
  nswPrivateVehicleRules,
  nswChildRestraintUrl,
  pointToPointChildRestraintUrl,
  restraintOptions,
  restraintBookingNote,
} from "@/lib/homeData";

const title = "NSW Taxi Baby Seat Laws | Child Restraint Rules for Taxis";
const description =
  "Child restraint rules for taxis in NSW explained - how they differ from rideshare and private vehicles, with links to official NSW Government guidance.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/nsw-taxi-baby-seat-laws" },
  openGraph: { title, description, url: "/nsw-taxi-baby-seat-laws" },
  twitter: { card: "summary_large_image", title, description },
};

const lawFaq = [
  [
    {
      question: "Do taxis need baby seats in NSW?",
      answer:
        "Children up to 12 months must travel in a suitable child restraint in a taxi - rear-facing up to 6 months, and rear-facing or forward-facing with an inbuilt harness from 6 to 12 months. Children over 12 months may use a booster seat or a properly adjusted and fastened seatbelt.",
    },
    {
      question: "Are the rules for rideshare the same as taxis?",
      answer:
        "No. Booked hire vehicles, including rideshare, are treated differently from taxis and generally follow the private-vehicle rules. Check the Point to Point Transport Commissioner's guidance for the current rules.",
    },
  ],
  [
    {
      question: "Is a seatbelt the safest option for a toddler in a taxi?",
      answer:
        "The taxi rules allow children over 12 months to use a properly adjusted seatbelt, but that is a legal minimum. Many parents prefer the restraint their child would use in the family car - you can request one when booking.",
    },
    {
      question: "Can I bring my own child restraint?",
      answer: "Yes. You're welcome to use your own approved child restraint if you prefer.",
    },
  ],
];

function RulesTable({ rows }: { rows: { age: string; rule: string }[] }) {
  return (
    <div className="wt-grid-3">
      {rows.map((r) => (
        <div className="wt-card" key={r.age}>
          <h3>{r.age}</h3>
          <p>{r.rule}</p>
        </div>
      ))}
    </div>
  );
}

export default function NswTaxiBabySeatLawsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="NSW Child Restraint Rules"
        title="Baby Seat & Child Restraint Rules for Taxis in NSW"
        description="How the rules differ between taxis, rideshare and private vehicles - with links to official guidance."
        breadcrumbLabel="NSW Taxi Baby Seat Laws"
        image={{ src: "/images/child-safety-information-real.png", alt: "Child restraint information for NSW taxis" }}
      />

      <section className="wt-section on-dark">
        <div className="container">
          <div style={{ maxWidth: 820 }}>
            <p>
              NSW has different child restraint rules depending on the type of vehicle. This page summarises the
              NSW Government rules as at October 2026. Rules can change - always check the{" "}
              <a href={nswChildRestraintUrl} target="_blank" rel="noreferrer">
                NSW Government child car seat page
              </a>{" "}
              and the{" "}
              <a href={pointToPointChildRestraintUrl} target="_blank" rel="noreferrer">
                Point to Point Transport Commissioner
              </a>{" "}
              for the current position. This is general information, not legal advice.
            </p>
          </div>
        </div>
      </section>

      <section className="wt-section on-dark">
        <div className="container">
          <span className="wt-eyebrow">Taxis</span>
          <h2>Child Restraint Rules in NSW Taxis</h2>
          <RulesTable rows={nswTaxiRules} />
        </div>
      </section>

      <section className="wt-section on-dark">
        <div className="container">
          <span className="wt-eyebrow">Rideshare &amp; Booked Hire</span>
          <h2>Rideshare and Booked Hire Vehicles</h2>
          <div style={{ maxWidth: 820 }}>
            <p>
              Booked hire vehicles - including rideshare - are not taxis, and the taxi rules above do not apply to
              them in the same way. Children under 12 months must use a suitable child restraint in both taxis and
              booked hire vehicles, and for older children booked hire vehicles generally follow the private-vehicle
              rules below. See the{" "}
              <a href={pointToPointChildRestraintUrl} target="_blank" rel="noreferrer">
                Point to Point Transport Commissioner&apos;s child restraint guidance
              </a>{" "}
              for the current rules.
            </p>
          </div>
        </div>
      </section>

      <section className="wt-section on-dark">
        <div className="container">
          <span className="wt-eyebrow">Private Vehicles</span>
          <h2>Child Restraint Rules in Private Vehicles</h2>
          <p style={{ maxWidth: 820 }}>For comparison, these are the NSW rules for private cars:</p>
          <RulesTable rows={nswPrivateVehicleRules} />
        </div>
      </section>

      <CardGrid
        eyebrow="Booking With Us"
        title="Requesting a Child Restraint for Your Taxi"
        intro="The taxi rules set a legal minimum. If you'd prefer your child to travel in an age- and size-appropriate restraint, request one when you book."
        cards={restraintOptions}
        footnote={restraintBookingNote}
      />

      <section className="wt-section on-dark">
        <div className="container">
          <Link href="/#wcb-booking-form" className="wt-btn wt-btn-primary">
            Pre-Book Your Family Transfer
          </Link>
        </div>
      </section>

      <Faq columns={lawFaq} title="NSW Child Restraint FAQs" eyebrow="Questions" />
    </>
  );
}
