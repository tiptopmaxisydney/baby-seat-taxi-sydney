import type { Metadata } from "next";
import ServiceHero from "@/components/service/ServiceHero";
import Faq from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";

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
    {
      question: "Are baby seats mandatory in Sydney taxis?",
      answer: "Parents should ensure children travel in an appropriate child restraint whenever possible.",
    },
    {
      question: "Can I travel with a newborn baby?",
      answer: "Yes, newborn transport is available with baby capsules.",
    },
    {
      question: "Can I use my own child seat?",
      answer: "Yes, customers are welcome to bring their own approved restraint.",
    },
  ],
  [
    {
      question: "How do I book a baby seat taxi?",
      answer: "Bookings can be made online or by phone.",
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
