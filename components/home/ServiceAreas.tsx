import Link from "next/link";
import { serviceAreas } from "@/lib/homeData";

export default function ServiceAreas() {
  return (
    <section className="wt-section on-dark">
      <div className="container">
        <span className="wt-eyebrow">Where We Drive</span>
        <h2>Areas We Service Across Sydney</h2>
        <p style={{ maxWidth: 900 }}>
          Baby Seat Taxi Sydney provides family transport throughout Sydney, including Sydney CBD, Eastern Suburbs,
          Western Sydney, Northern Sydney, Southern Sydney, Inner West, Parramatta, Blacktown, Liverpool, Penrith,
          Campbelltown, Chatswood, Bondi and surrounding Sydney suburbs. We also provide longer-distance family
          transport depending on passenger requirements and vehicle availability.
        </p>
        <div className="wt-areas-grid">
          {serviceAreas.map((area) => (
            <Link href={area.href} className="wt-area-card" key={area.title} style={{ display: "block" }}>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </Link>
          ))}
        </div>
        <p style={{ marginTop: 24 }}>
          <Link href="/baby-seat-taxi-sydney-areas/">See all Sydney areas we cover</Link>
        </p>
      </div>
    </section>
  );
}
