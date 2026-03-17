/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static export for GitHub Pages / Vercel
  trailingSlash: true,
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
