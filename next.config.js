/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //reactStrictMode: false,
  images: {
    //domains: ['openailabsprodscus.blob.core.windows.net'],
    domains: ['oaidalleapiprodscus.blob.core.windows.net', 'atlastattoo.s3.amazonaws.com'],
  },
  experimental: { 
    images: { allowFutureImage: true } ,
    largePageDataBytes: 128 * 100000,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config;
  },
}

module.exports = nextConfig
