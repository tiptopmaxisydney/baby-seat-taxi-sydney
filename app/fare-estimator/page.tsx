import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/service/ServiceHero";
import FeatureGrid from "@/components/service/FeatureGrid";
import FinalCta from "@/components/home/FinalCta";

const title = "Fare Estimator | Baby Seat Taxi Sydney";
const description = "See what affects the price of a baby seat taxi in Sydney, and request an instant, accurate booking for your trip.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/fare-estimator" },
  openGraph: { title, description, url: "/fare-estimator" },
  twitter: { card: "summary_large_image", title, description },
};

export default function FareEstimatorPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Fare Estimator"
        title="What Affects Your Fare?"
        description="Baby seat taxi pricing depends on a few key factors. Request a booking below for an exact, no-obligation price for your trip."
        breadcrumbLabel="Fare Estimator"
        image={{ src: "/images/child-seat-taxi-sydney-real.png", alt: "Child seat taxi Sydney for toddlers and young children" }}
      />

      <FeatureGrid
        eyebrow="Pricing Factors"
        title="What Goes Into Your Fare"
        background="dark"
        features={[
          {
            title: "Distance & Route",
            description: "The distance between your pickup and destination, and current traffic conditions, are the biggest factors in your fare.",
          },
          {
            title: "Trip Time & Day",
            description: "Pickup time, day of the week and any applicable tolls (including airport tolls) can affect the final price.",
          },
          {
            title: "Seat Type & Number of Children",
            description: "Let us know how many children are travelling and which seat type each one needs so your booking reflects the correct vehicle.",
          },
          {
            title: "One Way or Return",
            description: "Booking a return trip at the same time can simplify planning around appointments and events.",
          },
          {
            title: "Luggage & Prams",
            description: "Extra luggage, prams or additional passengers may affect which vehicle is best suited to your trip.",
          },
          {
            title: "Advance vs Last-Minute Booking",
            description: "We recommend booking ahead to guarantee the correct baby capsule, child seat or booster seat is available.",
          },
        ]}
      />

      <section className="wt-section on-dark">
        <div className="container">
          <span className="wt-eyebrow">Get an Exact Price</span>
          <h2>Request a Booking for Your Exact Trip</h2>
          <p style={{ maxWidth: 700 }}>
            Rather than a rough estimate, our booking form gives you a real, priced booking based on your actual pickup, destination,
            trip time and seat requirements — with no obligation to book.
          </p>
          <Link href="/get-quote/" className="wt-btn wt-btn-primary" style={{ marginTop: 8 }}>
            Request a Booking
          </Link>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
