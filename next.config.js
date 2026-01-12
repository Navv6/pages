/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  output: isGithubPages ? 'export' : undefined,
  images: {
    unoptimized: isGithubPages
  },
  basePath: isGithubPages ? '/repository-name' : '',
  assetPrefix: isGithubPages ? '/repository-name/' : ''
}

module.exports = nextConfig