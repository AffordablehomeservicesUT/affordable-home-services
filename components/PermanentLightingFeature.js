import PhotoPlaceholder from "./PhotoPlaceholder";

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
          <PhotoPlaceholder
            label="Full-home dusk photo — blue/purple/white permanent lighting gradient (primary image)"
            aspect="16 / 11"
          />
          <div className="permanent-feature__media-secondary">
            <PhotoPlaceholder
              label="Daytime soffit close-up — shows discreet installation"
              aspect="4 / 3"
            />
            <PhotoPlaceholder
              label="Underside/track detail — long run of permanent lighting"
              aspect="4 / 3"
            />
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
