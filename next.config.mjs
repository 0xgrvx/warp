/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/warp' : '',
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
