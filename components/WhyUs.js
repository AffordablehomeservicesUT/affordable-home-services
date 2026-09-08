import RooflineDivider from "./RooflineDivider";

const REASONS = [
  {
    title: "15 Years of Experience",
    copy: "We've been doing this a long time, and it shows in the details.",
  },
  {
    title: "Quality Workmanship",
    copy: "Every project is done right, the first time.",
  },
  {
    title: "Locally Owned & Operated",
    copy: "Real people, real accountability, right here in Utah.",
  },
  {
    title: "Clear Communication",
    copy: "You'll always know what's happening and when.",
  },
  {
    title: "Year-Round Service",
    copy: "Lighting, solar, and exterior care whenever you need it.",
  },
];

export default function WhyUs() {
  return (
    <section className="why-us section section--dark" aria-labelledby="why-heading">
      <RooflineDivider tone="dark" />
      <div className="container">
        <h2 id="why-heading" className="section-heading">
          Why Utah Homeowners Trust Us
        </h2>

        <div className="why-us__grid">
          {REASONS.map((reason) => (
            <div key={reason.title} className="why-us__item">
              <h3 className="why-us__item-title">{reason.title}</h3>
              <p className="why-us__item-copy">{reason.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
