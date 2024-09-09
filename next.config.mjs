/** @type {import('next').NextConfig} */
import removeImports from 'next-remove-imports';

const nextConfig = removeImports()({
  // Your other Next.js config options can go here
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
    ],
  },
});

export default nextConfig;
