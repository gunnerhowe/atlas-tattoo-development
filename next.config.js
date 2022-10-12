/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['openailabsprodscus.blob.core.windows.net'],
  },
  experimental: { 
    images: { allowFutureImage: true } 
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}

module.exports = nextConfig
