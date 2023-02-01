/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cultivatedemo.files.wordpress.com', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
