/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['picsum.photos', 'm.media-amazon.com', 'placeimg.com', 'imageio.forbes.com', 'loremflickr.com'],
  },
}

module.exports = nextConfig
