/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.edmunds.com",
      },
    ],
  },
};

module.exports = nextConfig;
