/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'img.icons8.com',
          'http://localhost:4000',
          'https://upload.wikimedia.org',
          'localhost:4000',
          'localhost',
          'render.fineartamerica.com',
          'images.unsplash.com'
        ]
      },
      typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
      eslint: {
        ignoreDuringBuilds: ['/src']
      },
};

export default nextConfig;