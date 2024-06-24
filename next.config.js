/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'xn--o39ap53a48clb577biqbqwgirt.com'
      },
      {
        protocol: 'https',
        hostname: 'd1jcxw8l00g1ws.cloudfront.net'
      }
    ]
  }
};

module.exports = nextConfig;
