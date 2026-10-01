import type { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/service/ServiceHero";
import { suburbGuides } from "@/lib/guides";
import { locationsLinks } from "@/lib/navigation";

const title = "Baby Seat Taxi Sydney Areas | Suburbs We Cover";
const description =
  "Baby seat taxi service across Sydney - CBD, Eastern Suburbs, North Shore, Northern Beaches, Inner West, Hills District, Western and South West Sydney.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/baby-seat-taxi-sydney-areas" },
  openGraph: { title, description, url: "/baby-seat-taxi-sydney-areas" },
  twitter: { card: "summary_large_image", title, description },
};

export default function AreasPage() {
  // CMS-managed location pages have no region field, so they're grouped together.
  const byRegion = new Map<string, { label: string; href: string }[]>([["Featured Areas", locationsLinks]]);
  for (const page of suburbGuides) {
    const list = byRegion.get(page.eyebrow) ?? [];
    list.push({ label: page.navLabel, href: `/${page.slug}/` });
    byRegion.set(page.eyebrow, list);
  }

  return (
    <>
      <ServiceHero
        eyebrow="Areas We Cover"
        title="Baby Seat Taxi Across Sydney"
        description="Pre-booked family transport with child restraints arranged at booking, across Sydney's suburbs."
        breadcrumbLabel="Sydney Areas"
        image={{ src: "/images/family-transport-across-sydney-real.png", alt: "Family transport across Sydney" }}
      />
      {[...byRegion.entries()].map(([region, links]) => (
        <section className="wt-section on-dark" key={region}>
          <div className="container">
            <h2>{region}</h2>
            <nav className="wt-related" aria-label={region}>
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </section>
      ))}
    </>
  );
}
