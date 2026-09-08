import PhotoPlaceholder from "./PhotoPlaceholder";

const SERVICES = [
  {
    title: "Christmas Lighting",
    copy: "Custom holiday lighting, professionally installed, maintained, and stored.",
    href: "/christmas-lighting",
    photoLabel: "IMG_9306 or IMG_1082 — premium home with warm-white roofline lighting",
  },
  {
    title: "Permanent Lighting",
    copy: "App-controlled architectural lighting for every season and occasion.",
    href: "/permanent-lighting",
    photoLabel: "Full-home dusk photo — blue/purple/white permanent lighting gradient",
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
                <PhotoPlaceholder label={service.photoLabel} aspect="4 / 3" />
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
