import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import SplitSection from "@/components/home/SplitSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import FleetShowcase from "@/components/home/FleetShowcase";
import ServiceAreas from "@/components/home/ServiceAreas";
import Faq from "@/components/home/Faq";
import AppSection from "@/components/home/AppSection";
import FinalCta from "@/components/home/FinalCta";
import {
  fleetIncludes,
  childSafetyInfoPoints,
  bookingSteps,
  driverAssistance,
  familiesWeAssist,
  popularDestinations,
  hospitalsServed,
  airportServices,
  safetyFeatures,
  faqColumns,
} from "@/lib/homeData";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Baby Seat Taxi Sydney | Safe Family Transport with Child Seats",
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

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <link
        rel="preload"
        href="/images/baby-seat-taxi-sydney-logo.png"
        as="image"
        fetchPriority="high"
      />

      <Hero />
      <AboutSection />

      <SplitSection
        eyebrow="Our Service"
        title="Professional Baby Seat Taxi Service Sydney"
        paragraphs={[
          "A baby seat taxi requires careful planning to ensure children can travel safely and comfortably. At Baby Seat Taxi Sydney, we provide professionally fitted baby capsules and child seats designed around the needs of each family.",
          "When you make a booking, our team confirms your requirements, including your child's age, the seat type needed and travel details, so we can prepare the most suitable vehicle for your journey.",
        ]}
        itemsIntro="Our service includes:"
        items={fleetIncludes}
        image={{ src: "/images/baby-capsule-taxi-sydney.png", alt: "Baby capsule fitted in a Baby Seat Taxi Sydney vehicle", width: 700, height: 467 }}
      />

      <WhyChooseUs />
      <HowItWorks />
      <FleetShowcase />

      <SplitSection
        title="Baby Capsule Taxi (Newborn to Approximately 1 Year)"
        eyebrow="Our Baby Seat Options"
        paragraphs={[
          "Our baby capsule taxis are ideal for newborn babies and young infants. All capsules are professionally installed and used in a rear-facing position in accordance with Australian safety standards.",
        ]}
        itemsIntro="Suitable for:"
        items={["Hospital discharge transport", "Airport transfers", "Family travel", "Everyday transport"]}
        image={{ src: "/images/baby-capsule-taxi-sydney.png", alt: "Baby capsule taxi Sydney for newborns and infants", width: 700, height: 467 }}
        imageFirst
      />

      <SplitSection
        title="Child Seat Taxi (6 Months to 4 Years)"
        eyebrow="Our Baby Seat Options"
        paragraphs={["Children under four years of age require an approved child restraint suitable for their age and size."]}
        itemsIntro="Our child seat taxis provide:"
        items={["Safe and secure travel", "Professionally fitted restraints", "Comfortable family transport throughout Sydney"]}
        image={{ src: "/images/child-seat-taxi-sydney.png", alt: "Child seat taxi Sydney for toddlers and young children", width: 700, height: 467 }}
        background="light"
      />

      <SplitSection
        title="Sydney Airport Transfers with Baby Seats"
        eyebrow="Airport Transfers"
        paragraphs={[
          "Travelling with children can be stressful. Our airport transfer service makes family travel easier by providing the correct child restraint before pickup, with services including Sydney Domestic and International Airport transfers, and popular routes across Parramatta, Liverpool, Blacktown, Bondi and Chatswood.",
        ]}
        itemsIntro="Services include:"
        items={airportServices}
        image={{ src: "/images/sydney-airport-transfers-with-baby-seats.png", alt: "Sydney Airport transfers with baby seats", width: 800, height: 533 }}
        imageFirst
      />

      <SplitSection
        title="Hospital Transfers with Baby Seats"
        eyebrow="Hospital Transfers"
        paragraphs={[
          "Travelling to or from a hospital with a newborn or young child requires extra care and planning. Our hospital transfer service provides safe, comfortable and reliable transport with baby capsules and child seats available for children of all ages.",
        ]}
        itemsIntro="We provide hospital pickup services from major Sydney hospitals including:"
        items={hospitalsServed}
        image={{ src: "/images/hospital-transfers-with-baby-seats.png", alt: "Hospital transfers with baby seats in Sydney", width: 800, height: 533 }}
        background="light"
      />

      <SplitSection
        title="Family Transport Across Sydney"
        eyebrow="Family Transport"
        paragraphs={[
          "Whether you're travelling to a medical appointment, family gathering, shopping centre, airport, cruise terminal, school event, or one of Sydney's many popular attractions, Baby Seat Taxi Sydney provides safe, reliable and family-friendly transport with baby capsules and child seats available on request.",
        ]}
        itemsIntro="Popular family destinations in Sydney:"
        items={popularDestinations}
        image={{ src: "/images/family-transport-across-sydney.png", alt: "Family transport across Sydney with baby seats", width: 800, height: 533 }}
        imageFirst
      />

      <SplitSection
        title="Child Safety Information"
        eyebrow="Child Safety"
        paragraphs={[
          "Australian road safety laws require children to travel in approved child restraints appropriate for their age and size. We recommend booking the correct baby seat when making your reservation so our team can prepare the most suitable restraint for your child.",
        ]}
        itemsIntro="Safety features:"
        items={safetyFeatures}
        image={{ src: "/images/child-safety-information.png", alt: "Child safety information for baby seat taxi bookings", width: 740, height: 603 }}
        background="light"
      />

      <SplitSection
        eyebrow="Details That Help Us Prepare"
        title="Providing your child's details when booking allows us to prepare the correct seat"
        itemsIntro="Helpful information includes:"
        items={childSafetyInfoPoints}
        image={{ src: "/images/child-safety-information.png", alt: "Details to provide when booking a baby seat taxi", width: 740, height: 603 }}
        imageFirst
      />

      <SplitSection
        title="Simple Booking Process"
        paragraphs={["Booking your baby seat taxi is straightforward."]}
        numbered
        items={bookingSteps}
        image={{ src: "/images/baby-capsule-taxi-sydney.png", alt: "Booking a baby seat taxi in Sydney", width: 700, height: 467 }}
        background="light"
      />

      <SplitSection
        title="Professional Drivers Focused on Family Travel"
        paragraphs={[
          "Our drivers understand that every family has different needs. They aim to provide a calm, respectful experience while helping children travel comfortably and safely.",
        ]}
        itemsIntro="Depending on your requirements, assistance may include:"
        items={driverAssistance}
        image={{ src: "/images/child-seat-taxi-sydney.png", alt: "Driver assistance for family baby seat taxi trips", width: 700, height: 467 }}
        imageFirst
      />

      <SplitSection
        title="Families and Customers We Assist"
        paragraphs={["We proudly provide transport for a wide range of customers across Sydney, including:"]}
        items={familiesWeAssist}
        image={{ src: "/images/family-transport-across-sydney.png", alt: "Families and customers Baby Seat Taxi Sydney assists", width: 800, height: 533 }}
        background="light"
      />

      <ServiceAreas />
      <Faq />
      <AppSection />
      <FinalCta />
    </>
  );
}
