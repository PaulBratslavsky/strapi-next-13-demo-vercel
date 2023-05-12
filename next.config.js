/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'rigid-spicy-smash.media.strapiapp.com',
  //       port: '',
  //       pathname: '/',
  //     },
  //   ],
  // },
  images: {
    domains: ['rigid-spicy-smash.media.strapiapp.com'],
  },
}

module.exports = nextConfig
