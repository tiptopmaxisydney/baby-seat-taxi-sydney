import type { Metadata } from "next";
import ServiceHero from "@/components/service/ServiceHero";
import Faq from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "FAQ's | Baby Seat Taxi Sydney",
  description: "Frequently asked questions about booking a baby seat taxi in Sydney, including baby capsules, child seats and booster seats.",
};

export default function FaqsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="FAQ's"
        title="Frequently Asked Questions"
        description={`Answers to common questions about booking a baby capsule, child seat or booster seat with ${siteConfig.name}.`}
        breadcrumbLabel="FAQ's"
      />

      <Faq />
      <FinalCta />
    </>
  );
}
