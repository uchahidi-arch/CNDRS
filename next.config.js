/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cndrs.km' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'secure.gravatar.com' },
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
