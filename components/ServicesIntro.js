import Image from "next/image";
import PhotoPlaceholder from "./PhotoPlaceholder";

const SERVICES = [
  {
    title: "Christmas Lighting",
    copy: "Custom holiday lighting, professionally installed, maintained, and stored.",
    href: "/christmas-lighting",
    photoSrc: "/images/christmas/img-9306.jpg",
    photoAlt: "Premium white and stone Utah home with warm-white roofline Christmas lighting",
  },
  {
    title: "Permanent Lighting",
    copy: "App-controlled architectural lighting for every season and occasion.",
    href: "/permanent-lighting",
    photoSrc: "/images/permanent/dusk-full-home.jpg",
    photoAlt: "Home at dusk showing permanent lighting in a blue, purple, and white gradient",
  },
  {
    title: "Solar Services",
    copy: "Solar panel cleaning and bird barrier protection.",
    href: "/solar-services",
    photoLabel: "Solar panel cleaning photo — to be supplied",
  },
  {
    title: "Exterior Cleaning",
    copy: "Professional exterior and window cleaning.",
    href: "/exterior-cleaning",
    photoLabel: "Exterior/window cleaning photo — to be supplied",
  },
];

export default function ServicesIntro() {
  return (
    <section id="services" className="services-intro section section--light" aria-labelledby="services-heading">
      <div className="container">
        <h2 id="services-heading" className="section-heading">
          Everything Your Home Needs, From One Trusted Team
        </h2>

        <div className="services-intro__grid">
          {SERVICES.map((service) => (
            <a key={service.title} href={service.href} className="service-card">
              <div className="service-card__media">
                {service.photoSrc ? (
                  <Image
                    src={service.photoSrc}
                    alt={service.photoAlt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                    style={{ objectFit: "cover", borderRadius: "var(--radius-md)" }}
                  />
                ) : (
                  <PhotoPlaceholder label={service.photoLabel} aspect="4 / 3" />
                )}
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__copy">{service.copy}</p>
              <span className="service-card__link">Learn More →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
