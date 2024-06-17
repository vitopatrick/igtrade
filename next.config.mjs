/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // basePath: "/",
        destination: "/sign-in",
        permanent: false,
        source: "/",
      },
    ];
  },
};

export default nextConfig;
