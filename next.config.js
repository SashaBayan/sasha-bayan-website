/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  images: {
    domains: [
      "d1h180s7hmcb7i.cloudfront.net",
      "sasha-bayan-website.s3.us-west-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
