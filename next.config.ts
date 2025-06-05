/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Required for static HTML export
  images: {
    unoptimized: true, // ✅ Required if using <Image> component with 'export'
  },
  reactStrictMode: true,
};

export default nextConfig;
