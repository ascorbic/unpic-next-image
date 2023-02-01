/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cultivatedemo.files.wordpress.com', 'res.cloudinary.com', 'bunnyoptimizerdemo.b-cdn.net'],
  },
}

module.exports = nextConfig
