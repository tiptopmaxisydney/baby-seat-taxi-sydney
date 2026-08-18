import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import SplitSection from "@/components/home/SplitSection";
import Faq from "@/components/home/Faq";
import {
  whyChooseUsPoints,
  recentNews,
  popularDestinations,
  hospitalsServed,
  airportServices,
  safetyFeatures,
  faqColumns,
} from "@/lib/homeData";
import { getBlogPosts } from "@/lib/blogPosts";
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

export default async function Home() {
  const blogPosts = await getBlogPosts();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <link rel="preload" href="/images/Baby-Seat-Finall-Logo.webp" as="image" fetchPriority="high" />

      <Hero />

      <section className="wt-section on-dark">
        <div className="container">
          <span className="wt-eyebrow">Why Choose Us</span>
          <h2>Why Choose Baby Seat Taxi Sydney</h2>
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
              <ul>
                {whyChooseUsPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SplitSection
        title="Baby Capsule Taxi (Newborn to Approximately 1 Year)"
        eyebrow="Our Baby Seat Options"
        paragraphs={[
          "Our baby capsule taxis are ideal for newborn babies and young infants. All capsules are professionally installed and used in a rear-facing position in accordance with Australian safety standards.",
        ]}
        itemsIntro="Suitable for:"
        items={["Hospital discharge transport", "Airport transfers", "Family travel", "Everyday transport"]}
        image={{ src: "/images/baby-capsule-taxi-sydney-real.png", alt: "Baby capsule taxi Sydney for newborns and infants", width: 700, height: 467 }}
        imageFirst
        background="dark"
      />

      <SplitSection
        title="Child Seat Taxi (6 Months to 4 Years)"
        eyebrow="Our Baby Seat Options"
        paragraphs={["Children under four years of age require an approved child restraint suitable for their age and size."]}
        itemsIntro="Our child seat taxis provide:"
        items={["Safe and secure travel", "Professionally fitted restraints", "Comfortable family transport throughout Sydney"]}
        image={{ src: "/images/child-seat-taxi-sydney-real.png", alt: "Child seat taxi Sydney for toddlers and young children", width: 700, height: 467 }}
        background="dark"
      />

      <SplitSection
        title="Sydney Airport Transfers with Baby Seats"
        eyebrow="Airport Transfers"
        paragraphs={[
          "Travelling with children can be stressful. Our airport transfer service makes family travel easier by providing the correct child restraint before pickup, with services including Sydney Domestic and International Airport transfers, and popular routes across Parramatta, Liverpool, Blacktown, Bondi and Chatswood.",
        ]}
        itemsIntro="Services include:"
        items={airportServices}
        image={{ src: "/images/sydney-airport-transfers-with-baby-seats-real.png", alt: "Sydney Airport transfers with baby seats", width: 795, height: 529 }}
        imageFirst
        background="dark"
      />

      <SplitSection
        title="Hospital Transfers with Baby Seats"
        eyebrow="Hospital Transfers"
        paragraphs={[
          "Travelling to or from a hospital with a newborn or young child requires extra care and planning. Our hospital transfer service provides safe, comfortable and reliable transport with baby capsules and child seats available for children of all ages.",
        ]}
        itemsIntro="We provide hospital pickup services from major Sydney hospitals including:"
        items={hospitalsServed}
        image={{ src: "/images/hospital-transfers-with-baby-seats-real.png", alt: "Hospital transfers with baby seats in Sydney", width: 795, height: 529 }}
        background="dark"
      />

      <SplitSection
        title="Family Transport Across Sydney"
        eyebrow="Family Transport"
        paragraphs={[
          "Whether you're travelling to a medical appointment, family gathering, shopping centre, airport, cruise terminal, school event, or one of Sydney's many popular attractions, Baby Seat Taxi Sydney provides safe, reliable and family-friendly transport with baby capsules and child seats available on request.",
        ]}
        itemsIntro="Popular family destinations in Sydney:"
        items={popularDestinations}
        image={{ src: "/images/family-transport-across-sydney-real.png", alt: "Family transport across Sydney with baby seats", width: 795, height: 529 }}
        imageFirst
        background="dark"
      />

      <SplitSection
        title="Child Safety Information"
        eyebrow="Child Safety"
        paragraphs={[
          "Australian road safety laws require children to travel in approved child restraints appropriate for their age and size. We recommend booking the correct baby seat when making your reservation so our team can prepare the most suitable restraint for your child.",
        ]}
        itemsIntro="Safety features:"
        items={safetyFeatures}
        image={{ src: "/images/child-safety-information-real.png", alt: "Child safety information for baby seat taxi bookings", width: 738, height: 599 }}
        background="dark"
      />

      <section className="wt-section on-dark">
        <div className="container">
          <span className="wt-eyebrow">Recent News</span>
          <h2>Recent News</h2>
          <div className="wt-grid-3">
            {recentNews.map((item) => (
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
