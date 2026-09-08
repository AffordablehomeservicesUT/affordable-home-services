/**
 * A quiet, abstract mountain/roofline silhouette used as a recurring
 * brand motif — the "tasteful Utah influence" called for in the brand
 * direction. Deliberately subtle: a single thin line, not a literal
 * mountain illustration, so it reads as premium rather than novelty.
 */
export default function RooflineDivider({ tone = "dark" }) {
  const strokeColor = tone === "dark" ? "rgba(184, 144, 90, 0.55)" : "rgba(21, 24, 27, 0.35)";

  return (
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ width: "100%", height: "40px", display: "block" }}
    >
      <polyline
        points="0,50 140,50 210,15 260,38 340,10 420,44 520,20 600,46 720,12 820,42 940,18 1040,46 1120,24 1200,50"
        fill="none"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
