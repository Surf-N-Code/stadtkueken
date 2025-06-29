import type { NextConfig } from "next";

const config: NextConfig = {
  // Disable ESLint during build (uncomment if you want to ignore all ESLint errors)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  async redirects() {
    return [
      {
        source: '/kita-lohbekpark',
        destination: '/kita/lohbekpark',
        permanent: true,
      },
    ];
  },
};

export default config;
