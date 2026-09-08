const PLACEHOLDER_COUNT = 3;

export default function ReviewsPlaceholder() {
  return (
    <section className="reviews section section--dark" aria-labelledby="reviews-heading">
      <div className="container">
        <h2 id="reviews-heading" className="section-heading">
          What Our Customers Are Saying
        </h2>

        <div className="reviews__grid">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
            <div key={index} className="reviews__card">
              <p className="reviews__mark" aria-hidden="true">
                &ldquo;
              </p>
              <p className="reviews__placeholder-text">
                Customer review coming soon.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
