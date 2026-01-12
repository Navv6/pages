/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pages',
  assetPrefix: '/pages/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig