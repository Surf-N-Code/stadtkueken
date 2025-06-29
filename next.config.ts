import type { NextConfig } from "next";

const config: NextConfig = {
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
