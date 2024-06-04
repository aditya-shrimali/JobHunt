/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "c2wsnjfkia4bkgjy.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
