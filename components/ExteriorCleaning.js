import PhotoPlaceholder from "./PhotoPlaceholder";

export default function ExteriorCleaning() {
  return (
    <section className="exterior-section section section--light" aria-labelledby="exterior-heading">
      <div className="container exterior-section__layout">
        <div className="exterior-section__media">
          <PhotoPlaceholder label="Exterior/window cleaning photo — to be supplied" aspect="4 / 3" />
        </div>
        <div className="exterior-section__content">
          <p className="eyebrow">Exterior Cleaning</p>
          <h2 id="exterior-heading" className="section-heading">
            A Cleaner Home, Inside and Out
          </h2>
          <p className="section-copy">
            Professional window and exterior cleaning to keep your home
            looking its best.
          </p>
          <a href="/exterior-cleaning" className="btn btn--gold">
            Explore Exterior Cleaning
          </a>
        </div>
      </div>
    </section>
  );
}
