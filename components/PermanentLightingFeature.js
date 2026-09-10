import Image from "next/image";

const USE_CASES = [
  "Christmas",
  "Halloween",
  "Fourth of July",
  "Game Days",
  "Birthdays",
  "Special Occasions",
  "Accent Lighting",
  "Everyday Lighting",
  "Security Lighting",
];

export default function PermanentLightingFeature() {
  return (
    <section className="permanent-feature section section--dark" aria-labelledby="permanent-heading">
      <div className="container permanent-feature__layout">
        <div className="permanent-feature__media">
          <div className="permanent-feature__media-primary">
            <Image
              src="/images/permanent/dusk-full-home.jpg"
              alt="Full home at dusk showing permanent lighting in a blue, purple, and white color gradient"
              fill
              sizes="(max-width: 960px) 100vw, 60vw"
              style={{ objectFit: "cover", borderRadius: "var(--radius-md)" }}
            />
          </div>
          <div className="permanent-feature__media-secondary">
            <div className="permanent-feature__media-secondary-item">
              <Image
                src="/images/permanent/soffit-closeup.jpg"
                alt="Daytime close-up of permanent lighting fixtures installed discreetly under the soffit"
                fill
                sizes="(max-width: 960px) 50vw, 30vw"
                style={{ objectFit: "cover", borderRadius: "var(--radius-md)" }}
              />
            </div>
            <div className="permanent-feature__media-secondary-item">
              <Image
                src="/images/permanent/track-detail.jpg"
                alt="Close-up detail of a long run of permanent architectural lighting track"
                fill
                sizes="(max-width: 960px) 50vw, 30vw"
                style={{ objectFit: "cover", borderRadius: "var(--radius-md)" }}
              />
            </div>
          </div>
        </div>

        <div className="permanent-feature__content">
          <p className="eyebrow">Permanent Lighting</p>
          <h2 id="permanent-heading" className="section-heading">
            One Installation. Endless Possibilities.
          </h2>
          <p className="section-copy">
            One professionally installed system, endless flexibility.
            App-controlled colors and scenes let the same lighting mark every
            occasion throughout the year — no new hardware, no reinstallation,
            just a new look whenever you want one.
          </p>

          <ul className="permanent-feature__tags" aria-label="Use cases">
            {USE_CASES.map((useCase) => (
              <li key={useCase}>{useCase}</li>
            ))}
          </ul>

          <p className="permanent-feature__note">
            Installed underneath the roofline and soffit, the fixtures stay
            out of sight — so what you see is the light, not the hardware.
          </p>

          <a href="/permanent-lighting" className="btn btn--gold permanent-feature__cta">
            Explore Permanent Lighting
          </a>
        </div>
      </div>
    </section>
  );
}
