/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ytimg.com'], // ✅ YouTube thumbnails
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // ✅ Cloudinary images
      },
    ],
  },
};

export default nextConfig;
