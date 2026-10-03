import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/service/ServiceHero";
import CardGrid from "@/components/home/CardGrid";
import Faq from "@/components/home/Faq";
import OfficialSources from "@/components/OfficialSources";
import {
  nswTaxiRules,
  nswTaxiNotes,
  nswRideshareRule,
  nswPrivateVehicleRules,
  noBoosterNote,
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
        "Yes, for babies. Children under 12 months must not travel in a NSW taxi unless they are secured in a suitable approved child restraint - rear-facing up to 6 months, and rear-facing or forward-facing with an inbuilt harness from 6 to 12 months. Children over 12 months may use a properly fastened and adjusted seatbelt, although a child restraint is strongly recommended.",
    },
    {
      question: "Are the rules for rideshare the same as taxis?",
      answer:
        "No. Hire and rideshare vehicles follow the same rules as private vehicles, so children under 7 must use an approved child restraint suitable for their age and size. The taxi rules do not apply to them.",
    },
  ],
  [
    {
      question: "Is a seatbelt the safest option for a toddler in a taxi?",
      answer:
        "The taxi rules allow children over 12 months to use a properly fastened and adjusted seatbelt, but that is a legal minimum - the NSW Government strongly recommends a suitable approved child restraint. You can request a child seat when booking.",
    },
    {
      question: "Can I bring my own child restraint?",
      answer: "Yes. You're welcome to use your own approved child restraint if you prefer.",
    },
    {
      question: "Do you provide booster seats?",
      answer: "No. We arrange baby capsules and child seats only. If your child uses a booster seat, please bring your own approved booster.",
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

      <OfficialSources />

      <section className="wt-section on-dark">
        <div className="container">
          <div style={{ maxWidth: 820 }}>
            <p>
              NSW has different child restraint rules for taxis, for hire and rideshare vehicles, and for private
              vehicles. Each is summarised separately below - don&apos;t assume the rule for one applies to the
              others.
            </p>
          </div>
        </div>
      </section>

      <section className="wt-section on-dark">
        <div className="container">
          <span className="wt-eyebrow">Taxis</span>
          <h2>Child Restraint Rules in NSW Taxis</h2>
          <RulesTable rows={nswTaxiRules} />
          <ul style={{ maxWidth: 820, marginTop: 24 }}>
            {nswTaxiNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wt-section on-dark">
        <div className="container">
          <span className="wt-eyebrow">Rideshare &amp; Booked Hire</span>
          <h2>Rideshare and Booked Hire Vehicles</h2>
          <div style={{ maxWidth: 820 }}>
            <p>{nswRideshareRule}</p>
            <p>
              Standard taxi, hire and rideshare vehicles don&apos;t have to carry a child restraint, and a hire or
              rideshare driver may refuse the trip if a child under 7 has no suitable restraint - so arrange one
              before you travel.
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
        footnote={`${restraintBookingNote} ${noBoosterNote}`}
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
