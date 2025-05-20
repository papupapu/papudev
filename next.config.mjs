/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL('https://res.cloudinary.com/dia4050i1/**')],
    formats: ['image/webp'],
  },
};

export default nextConfig;
