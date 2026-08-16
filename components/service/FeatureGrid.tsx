type Feature = { title: string; description: string };

type FeatureGridProps = {
  eyebrow: string;
  title: string;
  features: Feature[];
  background?: "white" | "light" | "dark";
};

export default function FeatureGrid({ eyebrow, title, features, background = "light" }: FeatureGridProps) {
  const backgroundClass = background === "light" ? " on-light" : background === "dark" ? " on-dark" : "";
  return (
    <section className={`wt-section${backgroundClass}`}>
      <div className="container">
        <span className="wt-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <div className="wt-grid-3">
          {features.map((feature) => (
            <div className="wt-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
