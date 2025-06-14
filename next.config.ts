// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static sites on Netlify
  },
  allowedDevOrigins: [
    'http://localhost:3000', // Allow localhost
    'http://172.20.10.3',    // Allow your specific IP
    // Add any other origins you want to allow
  ],
};

module.exports = nextConfig;