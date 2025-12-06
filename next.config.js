/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com', 'cdn.pixabay.com', 'picsum.photos'],
    unoptimized: true,
  },
}

module.exports = nextConfig
