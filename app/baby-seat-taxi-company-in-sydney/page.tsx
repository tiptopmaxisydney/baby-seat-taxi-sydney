import type { Metadata } from "next";
import ServiceHero from "@/components/service/ServiceHero";
import SplitSection from "@/components/home/SplitSection";
import FeatureGrid from "@/components/service/FeatureGrid";
import ServiceAreas from "@/components/home/ServiceAreas";
import FinalCta from "@/components/home/FinalCta";
import { familiesWeAssist } from "@/lib/homeData";

export const metadata: Metadata = {
  title: "About Us | Baby Seat Taxi Sydney",
  description:
    "Learn about Baby Seat Taxi Sydney, our approach to family transport, and how we support parents, carers and organisations across Sydney.",
};

export default function AboutUsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="About Us"
        title="Sydney's Dedicated Baby Seat Taxi Specialists"
        description="Family-friendly transport built around the needs of every child, from newborn capsules to booster seats."
        breadcrumbLabel="About Us"
      />

      <SplitSection
        eyebrow="Our Story"
        title="Purpose-Built Family Transport"
        paragraphs={[
          "Baby Seat Taxi Sydney was established to provide dedicated, family-friendly transport across the Sydney metropolitan area. Rather than treating a car seat as an afterthought, our vehicles, booking process and driver training are all built around the needs of families travelling with babies and young children.",
          "We work with private customers, new parents, hospitals, cruise terminal passengers, event organisers and corporate clients, adapting our service to the specific requirements of each booking.",
        ]}
        image={{ src: "/images/baby-capsule-taxi-sydney.png", alt: "Baby Seat Taxi Sydney booking and service overview", width: 700, height: 467 }}
        imageFirst
      />

      <FeatureGrid
        eyebrow="Our Approach"
        title="What Guides Our Service"
        features={[
          {
            title: "Parent-First Planning",
            description:
              "Every booking starts with a conversation about your child's age, the seat type needed and travel details, so we can allocate the right vehicle.",
          },
          {
            title: "Trained, Careful Drivers",
            description:
              "Our drivers are trained in fitting and checking baby capsules, child seats and booster seats before every trip.",
          },
          {
            title: "Clean, Family-Friendly Fleet",
            description:
              "Our vehicles are regularly maintained and set up with room for prams, capsules and extra luggage.",
          },
        ]}
      />

      <SplitSection
        title="Who We Work With"
        paragraphs={["We proudly provide family transport for a wide range of customers and organisations across Sydney, including:"]}
        items={familiesWeAssist}
        image={{ src: "/images/family-transport-across-sydney.png", alt: "Families and customers Baby Seat Taxi Sydney assists", width: 800, height: 533 }}
        background="light"
      />

      <ServiceAreas />
      <FinalCta />
    </>
  );
}
