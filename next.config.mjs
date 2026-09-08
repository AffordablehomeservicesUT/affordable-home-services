/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allowed for responsive, optimized images once real photos are added.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
