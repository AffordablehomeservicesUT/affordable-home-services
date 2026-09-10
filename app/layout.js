import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import "./component-styles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyQuoteBar from "@/components/StickyQuoteBar";

// Two deliberately-chosen typefaces for the "Modern Premium" brand:
// Space Grotesk carries headlines (confident, geometric, distinctive).
// Manrope carries body text (clean, warm, highly legible at small sizes).
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://affordableservicesut.com"),
  icons: {
    icon: [
      { url: "/images/logo/AHS-Favicon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/images/logo/AHS-Favicon-64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: "/images/logo/AHS-Favicon-512.png",
  },
  title: {
    default: "Affordable Home Services | Utah Christmas Lighting, Permanent Lighting, Solar & Exterior Cleaning",
    template: "%s | Affordable Home Services",
  },
  description:
    "Affordable Home Services provides professional Christmas lighting, permanent architectural lighting, solar panel cleaning, bird barrier protection, and exterior cleaning for Utah homeowners. 15 years of experience. Get a free quote.",
  openGraph: {
    title: "Affordable Home Services | Utah Exterior Home Service Experts",
    description:
      "Christmas lighting, permanent lighting, solar care, and exterior cleaning for Utah homes. 15 years of experience. Get a free quote.",
    url: "https://affordableservicesut.com",
    siteName: "Affordable Home Services",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyQuoteBar />
      </body>
    </html>
  );
}
