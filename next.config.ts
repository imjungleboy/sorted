import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The app used to build accountant share links on this domain, which
      // has no share page. Send them to the dashboard that serves them.
      {
        source: "/share/:token",
        destination: "https://app.mysorted.app/share/:token",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
