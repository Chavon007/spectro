/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "static.zara.net" },
      { protocol: "https", hostname: "encrypted-tbn2.gstatic.com" },
      { protocol: "https", hostname: "encrypted-tbn1.gstatic.com" },
      { protocol: "https", hostname: "i.ebayimg.com" },
      { protocol: "https", hostname: "image.hm.com" },
      { protocol: "https", hostname: "img.kwcdn.com" },      // <- add this
      { protocol: "https", hostname: "img-1.kwcdn.com" },    // <- add this
      { protocol: "https", hostname: "images.jackjones.com" },
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "www.edmunds.com" },
    ],
  },
};

export default nextConfig;
