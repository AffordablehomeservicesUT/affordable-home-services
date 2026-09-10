import Image from "next/image";
import PhotoPlaceholder from "./PhotoPlaceholder";

// Homepage shows a preview of 8-12 strongest photos; the full filterable
// gallery lives at /gallery (built in a later stage). Final photo selection
// should represent every service fairly once solar/exterior photography
// is supplied, per the approved Stage 4 plan.
const PREVIEW_ITEMS = [
  { src: "/images/christmas/img-1523.jpg", alt: "Large upscale Utah home with Christmas roofline lighting" },
  { src: "/images/christmas/img-9306.jpg", alt: "Premium white and stone Utah home with Christmas lighting" },
  { src: "/images/christmas/img-1082.jpg", alt: "Modern luxury Utah home with Christmas roofline lighting" },
  { src: "/images/permanent/dusk-full-home.jpg", alt: "Home at dusk with blue, purple, and white permanent lighting" },
  { src: "/images/permanent/soffit-closeup.jpg", alt: "Daytime close-up of permanent lighting under the soffit" },
  { src: "/images/permanent/track-detail.jpg", alt: "Close-up of a long run of permanent lighting track" },
  { label: "Solar panel cleaning photo — to be supplied" },
  { label: "Exterior cleaning photo — to be supplied" },
];

export default function GalleryPreview() {
  return (
    <section className="gallery-preview section section--light" aria-labelledby="gallery-heading">
      <div className="container">
        <h2 id="gallery-heading" className="section-heading">
          See the Difference for Yourself
        </h2>

        <div className="gallery-preview__grid">
          {PREVIEW_ITEMS.map((item, index) =>
            item.src ? (
              <div key={item.src} className="gallery-preview__item">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 700px) 50vw, (max-width: 1000px) 33vw, 25vw"
                  style={{ objectFit: "cover", borderRadius: "var(--radius-md)" }}
                />
              </div>
            ) : (
              <PhotoPlaceholder key={index} label={item.label} aspect="1 / 1" />
            )
          )}
        </div>

        <a href="/gallery" className="btn btn--outline-light gallery-preview__cta">
          View Our Work
        </a>
      </div>
    </section>
  );
}
