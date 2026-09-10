import Image from "next/image";

/**
 * HERO PHOTO — TWO APPROVED FINALISTS
 * Change HERO_IMAGE to "IMG_1015" or "PREMIUM_4" to test either option.
 * No other code changes are needed to swap between them.
 */
const HERO_IMAGE = "IMG_1015";

const HERO_IMAGE_SRC = {
  IMG_1015: "/images/hero/img-1015.jpg",
  PREMIUM_4: "/images/hero/premium-4.jpg",
};

const HERO_IMAGE_ALT = {
  IMG_1015:
    "Upscale dark modern Utah home at blue hour with warm-white architectural roofline lighting",
  PREMIUM_4:
    "Premium white Utah home with mountain backdrop and warm-white roofline lighting",
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
          <Image
            src={HERO_IMAGE_SRC[HERO_IMAGE]}
            alt={HERO_IMAGE_ALT[HERO_IMAGE]}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover", borderRadius: "var(--radius-md)" }}
          />
        </div>
      </div>
    </section>
  );
}
