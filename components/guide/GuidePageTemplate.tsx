import Link from "next/link";
import ServiceHero from "@/components/service/ServiceHero";
import Faq from "@/components/home/Faq";
import FamilyVehicleCalculator from "@/components/home/FamilyVehicleCalculator";
import { guideImages, type GuidePage, type GuideSection } from "@/lib/guides/types";
import { siteConfig } from "@/lib/siteConfig";

function Section({ section }: { section: GuideSection }) {
  return (
    <section className="wt-section on-dark">
      <div className="container">
        {section.eyebrow && <span className="wt-eyebrow">{section.eyebrow}</span>}
        <h2>{section.heading}</h2>
        <div style={{ maxWidth: 820 }}>
          {section.paragraphs?.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {section.list && (
            <>
              {section.listIntro && <p>{section.listIntro}</p>}
              <ul>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
          {section.links && (
            <ul>
              {section.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        {section.table && (
          <div className="wt-table-wrap">
            <table className="wt-table">
              <thead>
                <tr>
                  <th scope="col">{section.table.head[0]}</th>
                  <th scope="col">{section.table.head[1]}</th>
                </tr>
              </thead>
              <tbody>
                {section.table.rows.map(([label, detail]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    <td>{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {section.cards && (
          <div className="wt-grid-3">
            {section.cards.map((card) => (
              <div className="wt-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        )}
        {section.calculator && <FamilyVehicleCalculator />}
      </div>
    </section>
  );
}

export default function GuidePageTemplate({ page }: { page: GuidePage }) {
  const url = `${siteConfig.url}/${page.slug}/`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
        { "@type": "ListItem", position: 2, name: page.navLabel, item: url },
      ],
    },
    ...(page.faq.length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: page.faq.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ]
      : []),
  ];
  const half = Math.ceil(page.faq.length / 2);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServiceHero
        eyebrow={page.eyebrow}
        title={page.h1}
        description={page.heroDescription}
        breadcrumbLabel={page.navLabel}
        image={{ src: guideImages[page.image], alt: page.h1 }}
      />

      {page.sections.map((section) => (
        <Section key={section.heading} section={section} />
      ))}

      <section className="wt-section on-dark">
        <div className="container">
          <h2>Ready to Book?</h2>
          <p style={{ maxWidth: 820 }}>
            Tell us each child&apos;s age and approximate size, the number of adults, your luggage and any pram, and
            we&apos;ll arrange the child restraints and a vehicle for your family.
          </p>
          <div className="wt-hero-actions">
            <Link href="/#wcb-booking-form" className="wt-btn wt-btn-primary">
              Book Your Family Transfer
            </Link>
            <a href={`tel:${siteConfig.phoneIntl}`} className="wt-btn wt-btn-outline-inverted">
              Call {siteConfig.phoneLocalDisplay}
            </a>
          </div>
        </div>
      </section>

      {page.faq.length > 0 && (
        <Faq columns={[page.faq.slice(0, half), page.faq.slice(half)]} title="Frequently Asked Questions" eyebrow="Questions" />
      )}

      {page.related.length > 0 && (
        <section className="wt-section on-dark">
          <div className="container">
            <span className="wt-eyebrow">Related</span>
            <h2>Related Guides</h2>
            <nav className="wt-related" aria-label="Related guides">
              {page.related.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </section>
      )}
    </>
  );
}
