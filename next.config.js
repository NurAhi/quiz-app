/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactRequire: true,
  swcMinify: true,
  pageExtensions: ['jsx', 'js', 'tsx', 'ts', 'scss', 'css'],
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
};

module.exports = nextConfig;
