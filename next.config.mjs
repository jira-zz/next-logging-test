/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  output: "standalone",
  poweredByHeader: false,
  compiler: {
    removeConsole: false,
  }
};

export default nextConfig;
