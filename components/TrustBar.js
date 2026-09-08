const STATS = [
  { label: "15+ Years Experience" },
  { label: "Hundreds of Homes Served Each Holiday Season" },
  { label: "Locally Owned" },
  { label: "Licensed & Insured" },
];

export default function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Company credentials">
      <div className="container trust-bar__grid">
        {STATS.map((stat) => (
          <p key={stat.label} className="trust-bar__item">
            {stat.label}
          </p>
        ))}
      </div>
    </section>
  );
}
