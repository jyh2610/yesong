/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'xn--o39ap53a48clb577biqbqwgirt.com'
      }
    ]
  }
};

module.exports = nextConfig;
