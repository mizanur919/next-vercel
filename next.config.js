/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/maintenance",
        permanent: true,
      },
    ];
  },
  swcMinify: true,
};

module.exports = nextConfig;
