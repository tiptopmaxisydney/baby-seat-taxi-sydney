import type { Metadata } from "next";
import ServiceHero from "@/components/service/ServiceHero";
import Faq from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";
import { faqColumns as homeFaqColumns } from "@/lib/homeData";

const title = "Baby Seat Taxi Sydney FAQs | Child Seat Taxi Questions";
const description = "Frequently asked questions about booking a baby seat taxi in Sydney, including baby capsules, child seats and service areas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faqs" },
  openGraph: { title, description, url: "/faqs" },
  twitter: { card: "summary_large_image", title, description },
};

const faqColumns = [
  [
    ...homeFaqColumns[0],
    {
      question: "What's the difference between taxi and rideshare child-restraint rules?",
      answer:
        "In NSW, children under 12 months must travel in a suitable approved child restraint in a taxi. Children over 12 months may use a properly fastened and adjusted seatbelt in a taxi, although a child restraint is strongly recommended, while hire and rideshare vehicles follow the private-vehicle rules. See our NSW taxi baby seat laws guide for details and official links.",
    },
    {
      question: "How do I book a baby seat taxi?",
      answer: "Bookings can be made online or by phone.",
    },
  ],
  [
    ...homeFaqColumns[1],
    {
      question: "Which vehicle should I book with four suitcases?",
      answer:
        "Tell us the number of adults, children, restraints, suitcases, carry-ons and prams when booking. Child restraints reduce usable seating, so a larger family with four suitcases will often need an SUV, 7-seat vehicle or minibus - we'll confirm the right vehicle.",
    },
    {
      question: "What happens if my flight is delayed?",
      answer:
        "Add your flight number when booking so the booking is associated with the correct arrival, and contact us if your plans change so we can adjust the pickup.",
    },
    {
      question: "Do you provide booster seats?",
      answer:
        "No. We arrange baby capsules and child seats only. If your child uses a booster seat, please bring your own approved booster.",
    },
    {
      question: "What areas do you service?",
      answer: "We provide family transport services throughout Sydney and surrounding areas.",
    },
  ],
];

export default function FaqsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="FAQ's"
        title="FAQ's"
        description="Frequently Asked Questions"
        breadcrumbLabel="FAQ's"
        image={{ src: "/images/child-safety-information-real.png", alt: "Child safety information for baby seat taxi bookings" }}
      />

      <Faq columns={faqColumns} title="Frequently Asked Questions" eyebrow="Questions" />
      <FinalCta />
    </>
  );
}
