/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //reactStrictMode: false,
  //webpack5: true,
  images: {
    domains: ['openailabsprodscus.blob.core.windows.net'],
    //domains: ['oaidalleapiprodscus.blob.core.windows.net'],
  },
  experimental: { 
    images: { allowFutureImage: true } ,
    largePageDataBytes: 999 * 1000
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    //config.resolve.fallback = {fs: false};

    return config;
  },
}

module.exports = nextConfig
