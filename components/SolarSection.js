import PhotoPlaceholder from "./PhotoPlaceholder";

export default function SolarSection() {
  return (
    <section className="solar-section section section--light" aria-labelledby="solar-heading">
      <div className="container solar-section__layout">
        <div className="solar-section__content">
          <p className="eyebrow">Solar Care</p>
          <h2 id="solar-heading" className="section-heading">
            Clean Panels. Protected Solar. No Room for Pests.
          </h2>
          <p className="section-copy">
            We provide professional solar panel cleaning, including clearing
            debris and nesting material from underneath panels where
            applicable, along with bird and pigeon barrier installation —
            helping keep birds from accessing and nesting under your array.
          </p>
          <a href="/solar-services" className="btn btn--gold">
            Explore Solar Services
          </a>
        </div>
        <div className="solar-section__media">
          <PhotoPlaceholder label="Solar panel cleaning / bird barrier photo — to be supplied" aspect="4 / 3" />
        </div>
      </div>
    </section>
  );
}
