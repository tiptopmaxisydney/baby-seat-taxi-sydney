import { lastReviewed, officialSources } from "@/lib/homeData";

// Visible near the top of every page that summarises the NSW child-restraint rules, so readers and
// search engines see the authoritative source and review date up front rather than at the bottom.
export default function OfficialSources() {
  return (
    <section className="wt-section on-dark">
      <div className="container">
        <div className="wt-card" style={{ maxWidth: 820 }}>
          <h2 style={{ fontSize: "1.15rem", marginBottom: 8 }}>Official Information</h2>
          <ul style={{ marginBottom: 8 }}>
            {officialSources.map((source) => (
              <li key={source.href}>
                <a href={source.href} target="_blank" rel="noreferrer">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
          <p style={{ margin: 0, fontSize: ".9em" }}>
            <strong>Last reviewed: {lastReviewed}.</strong> This is a summary of the NSW rules, not legal advice - rules
            can change, so always check the official sources.
          </p>
        </div>
      </div>
    </section>
  );
}
