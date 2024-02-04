
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.discourse-cdn.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
        port: '',
      }
    ],
  },
};

module.exports = nextConfig
