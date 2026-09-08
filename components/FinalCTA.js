import RooflineDivider from "./RooflineDivider";

export default function FinalCTA() {
  return (
    <section className="final-cta section section--dark" aria-labelledby="final-cta-heading">
      <RooflineDivider tone="dark" />
      <div className="container final-cta__inner">
        <h2 id="final-cta-heading" className="final-cta__heading">
          Ready to Get Started?
        </h2>
        <p className="final-cta__copy">Get a free, no-pressure quote in minutes.</p>
        <a href="/request-quote" className="btn btn--gold">
          Get a Free Quote
        </a>
      </div>
    </section>
  );
}
