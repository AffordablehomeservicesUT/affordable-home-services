import Image from "next/image";
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
            <Image
              src="/images/christmas/img-1523.jpg"
              alt="Large upscale Utah home with extensive warm-white roofline Christmas lighting"
              fill
              sizes="(max-width: 960px) 100vw, 60vw"
              style={{ objectFit: "cover", borderRadius: "var(--radius-md)" }}
            />
          </div>
          <div className="christmas-feature__media-secondary">
            <div className="christmas-feature__media-secondary-item">
              <Image
                src="/images/christmas/img-9306.jpg"
                alt="Premium white and stone Utah home with clean architectural Christmas lighting"
                fill
                sizes="(max-width: 960px) 50vw, 30vw"
                style={{ objectFit: "cover", borderRadius: "var(--radius-md)" }}
              />
            </div>
            <div className="christmas-feature__media-secondary-item">
              <Image
                src="/images/christmas/img-1082.jpg"
                alt="Modern luxury Utah home with bright architectural roofline Christmas lighting"
                fill
                sizes="(max-width: 960px) 50vw, 30vw"
                style={{ objectFit: "cover", borderRadius: "var(--radius-md)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
