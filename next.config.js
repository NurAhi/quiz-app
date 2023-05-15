/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['jsx', 'js', 'tsx', 'ts', 'scss', 'css'],
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  styledComponents: {
    displayName: true,
    ssr: true,
  },
};

module.exports = nextConfig;
