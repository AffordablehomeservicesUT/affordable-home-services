export default function CommercialCallout() {
  return (
    <section className="commercial-callout" aria-labelledby="commercial-heading">
      <div className="container commercial-callout__row">
        <div>
          <h2 id="commercial-heading" className="commercial-callout__heading">
            Lighting for Your Business
          </h2>
          <p className="commercial-callout__copy">
            Holiday and permanent lighting for storefronts, offices, and
            commercial properties.
          </p>
        </div>
        <a href="/commercial-lighting" className="btn btn--outline-dark">
          Explore Commercial Lighting
        </a>
      </div>
    </section>
  );
}
