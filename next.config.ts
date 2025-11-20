import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'effective-system-4pwgq7w25r4p-3000.app.github.dev', // your Codespace URL
      ],
    },
  },
};

export default nextConfig;
