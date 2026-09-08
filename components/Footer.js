const SERVICE_LINKS = [
  { label: "Christmas Lighting", href: "/christmas-lighting" },
  { label: "Permanent Lighting", href: "/permanent-lighting" },
  { label: "Solar Services", href: "/solar-services" },
  { label: "Bird Barrier", href: "/solar-services#bird-barrier" },
  { label: "Exterior Cleaning", href: "/exterior-cleaning" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Get a Free Quote", href: "/request-quote" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="site-footer__logo">
            Affordable <span>Home Services</span>
          </p>
          <p className="site-footer__domain">AffordableServicesUT.com</p>
          <p className="site-footer__placeholder">
            [Service area — placeholder]
          </p>
        </div>

        <div>
          <h3 className="site-footer__heading">Services</h3>
          <ul>
            {SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="site-footer__heading">Company</h3>
          <ul>
            {COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="site-footer__heading">Contact</h3>
          <p className="site-footer__placeholder">[Phone number — placeholder]</p>
          <p className="site-footer__placeholder">[Email address — placeholder]</p>
          <p className="site-footer__placeholder">[Mailing address — placeholder]</p>
          <p className="site-footer__placeholder">[Social media links — placeholder]</p>
        </div>
      </div>

      <div className="container site-footer__legal">
        <p>© {year} Affordable Home Services. All rights reserved.</p>
        <div className="site-footer__legal-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
