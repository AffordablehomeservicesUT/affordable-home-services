import PhotoPlaceholder from "./PhotoPlaceholder";

// Homepage shows a preview of 8-12 strongest photos; the full filterable
// gallery lives at /gallery (built in a later stage). Final photo selection
// should represent every service fairly once solar/exterior photography
// is supplied, per the approved Stage 4 plan.
const PREVIEW_ITEMS = [
  "IMG_1523 — Christmas Lighting",
  "IMG_9306 — Christmas Lighting",
  "IMG_1082 — Christmas Lighting",
  "Full-home dusk photo — Permanent Lighting",
  "Daytime soffit close-up — Permanent Lighting",
  "Underside/track detail — Permanent Lighting",
  "Solar panel cleaning photo — to be supplied",
  "Exterior cleaning photo — to be supplied",
];

export default function GalleryPreview() {
  return (
    <section className="gallery-preview section section--light" aria-labelledby="gallery-heading">
      <div className="container">
        <h2 id="gallery-heading" className="section-heading">
          See the Difference for Yourself
        </h2>

        <div className="gallery-preview__grid">
          {PREVIEW_ITEMS.map((item) => (
            <PhotoPlaceholder key={item} label={item} aspect="1 / 1" />
          ))}
        </div>

        <a href="/gallery" className="btn btn--outline-light gallery-preview__cta">
          View Our Work
        </a>
      </div>
    </section>
  );
}
