/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export', // enables static export for Netlify
  trailingSlash: true, // helps Netlify serve routes correctly
  reactStrictMode: true, // optional but recommended
  images: {
    unoptimized: true, // required for static export if you're using <Image>
  },
};

export default nextConfig;