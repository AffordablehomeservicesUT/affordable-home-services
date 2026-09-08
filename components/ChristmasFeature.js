import PhotoPlaceholder from "./PhotoPlaceholder";
import RooflineDivider from "./RooflineDivider";

const EMPHASIS_POINTS = [
  "Professional custom installation",
  "Commercial-grade lighting",
  "Seasonal maintenance & takedown",
  "Off-season storage",
  "Hundreds of homes served every holiday season",
];

export default function ChristmasFeature() {
  return (
    <section className="christmas-feature section section--dark" aria-labelledby="christmas-heading">
      <RooflineDivider tone="dark" />
      <div className="container christmas-feature__layout">
        <div className="christmas-feature__content">
          <p className="eyebrow">Affordable Christmas Lighting</p>
          <h2 id="christmas-heading" className="section-heading">
            15 Years of Making Utah Homes Shine
          </h2>
          <p className="section-copy">
            Affordable Christmas Lighting has served hundreds of Utah homes
            each holiday season for 15 years, using commercial-grade lighting
            and professional installation. We handle setup, seasonal
            maintenance, takedown, and storage — so the only thing you have
            to do is enjoy it.
          </p>
          <ul className="christmas-feature__list">
            {EMPHASIS_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <a href="/christmas-lighting" className="btn btn--gold christmas-feature__cta">
            Explore Christmas Lighting
          </a>
        </div>

        <div className="christmas-feature__media">
          <div className="christmas-feature__media-primary">
            <PhotoPlaceholder
              label="IMG_1523 — large upscale home, extensive warm-white roofline lighting (primary image)"
              aspect="16 / 11"
            />
          </div>
          <div className="christmas-feature__media-secondary">
            <PhotoPlaceholder
              label="IMG_9306 — premium white/stone home, clean architectural lighting"
              aspect="4 / 3"
            />
            <PhotoPlaceholder
              label="IMG_1082 — modern luxury home, bright architectural roofline lighting"
              aspect="4 / 3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
