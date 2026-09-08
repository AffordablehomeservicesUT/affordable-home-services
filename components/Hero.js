import PhotoPlaceholder from "./PhotoPlaceholder";

/**
 * HERO PHOTO — TWO APPROVED FINALISTS
 * Change HERO_IMAGE to "IMG_1015" or "PREMIUM_4" to test either option.
 * No other code changes are needed to swap between them.
 */
const HERO_IMAGE = "IMG_1015";

const HERO_IMAGE_LABELS = {
  IMG_1015:
    "IMG_1015 — upscale dark modern home at blue hour, warm-white architectural roofline lighting (Finalist A)",
  PREMIUM_4:
    "Premium-4 — premium white home with mountain backdrop, warm-white roofline lighting (Finalist B)",
};

export default function Hero() {
  return (
    <section className="hero section--dark" aria-labelledby="hero-heading">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">Utah's Exterior Home Service Experts</p>
          <h1 id="hero-heading" className="hero__headline">
            Beautiful Homes. Brighter Seasons.
          </h1>
          <p className="hero__copy">
            Christmas lighting, permanent architectural lighting, solar care,
            and exterior cleaning — all from one Utah team with 15 years of
            experience.
          </p>
          <div className="hero__actions">
            <a href="/request-quote" className="btn btn--gold">
              Get a Free Quote
            </a>
            <a href="#services" className="btn btn--outline-dark">
              Explore Our Services
            </a>
          </div>
          <p className="hero__trust">
            15+ Years in Business &nbsp;·&nbsp; Locally Owned &nbsp;·&nbsp;
            Licensed &amp; Insured
          </p>
        </div>

        <div className="hero__media">
          <PhotoPlaceholder label={HERO_IMAGE_LABELS[HERO_IMAGE]} aspect="4 / 5" />
        </div>
      </div>
    </section>
  );
}
