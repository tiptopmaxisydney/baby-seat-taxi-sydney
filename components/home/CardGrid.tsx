type CardGridProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  cards: { title: string; description: string }[];
  footnote?: string;
};

export default function CardGrid({ eyebrow, title, intro, cards, footnote }: CardGridProps) {
  return (
    <section className="wt-section on-dark">
      <div className="container">
        {eyebrow && <span className="wt-eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {intro && <p style={{ maxWidth: 820 }}>{intro}</p>}
        <div className="wt-grid-3">
          {cards.map((card) => (
            <div className="wt-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
        {footnote && <p style={{ maxWidth: 820, marginTop: 24 }}>{footnote}</p>}
      </div>
    </section>
  );
}
