/**
 * PhotoPlaceholder
 * ------------------------------------------------------------------
 * Stands in for a real project photo until the actual file is added to
 * /public/images. Clearly labels which approved photo belongs in this
 * exact spot, per the Stage 4 photography plan.
 *
 * HOW TO REPLACE WITH A REAL PHOTO LATER:
 * 1. Add the real image file to the matching folder in /public/images
 *    (e.g. /public/images/hero/img-1015.jpg).
 * 2. Swap this <PhotoPlaceholder /> for Next.js's built-in <Image />
 *    component, e.g.:
 *
 *      import Image from "next/image";
 *      <Image
 *        src="/images/hero/img-1015.jpg"
 *        alt="Upscale modern Utah home with warm-white architectural
 *             roofline lighting at blue hour"
 *        fill
 *        style={{ objectFit: "cover" }}
 *        priority
 *      />
 *
 * That's it — no other code changes are needed.
 * ------------------------------------------------------------------
 */
export default function PhotoPlaceholder({ label, aspect = "4 / 3" }) {
  return (
    <div className="photo-placeholder" style={{ aspectRatio: aspect }}>
      <span className="photo-placeholder__label">
        <strong>Photo goes here</strong>
        {label}
      </span>
    </div>
  );
}
