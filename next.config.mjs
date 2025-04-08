import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['i.ytimg.com'], // ✅ allow YouTube thumbnails
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
        },
      ],
    },
    // Enable performance optimizations
    // reactStrictMode: true,
    // swcMinify: true,
    // compiler: {
    //   removeConsole: process.env.NODE_ENV === 'production',
    // },
    // experimental: {
    //   optimizeCss: true,
    //   scrollRestoration: true,
    //   // Enable modern optimizations
    //   serverActions: true,
    //   typedRoutes: true,
    // },
    // // Optimize page loading
    poweredByHeader: false,
    compress: true,
    
    // Optimize chunks
    webpack: (config, { dev, isServer }) => {
      // Production optimizations
      if (!dev && !isServer) {
        // Split chunks more aggressively
        config.optimization.splitChunks = {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            framework: {
              name: 'framework',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](react|react-dom|next|framer-motion)[\\/]/,
              priority: 40,
              enforce: true,
            },
            commons: {
              name: 'commons',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]/,
              minChunks: 2,
              priority: 20,
            },
            lib: {
              test(module) {
                return module.size() > 160000 &&
                  /node_modules[/\\]/.test(module.identifier());
              },
              name(module) {
                const hash = crypto.createHash('sha1');
                hash.update(module.identifier());
                return 'lib-' + hash.digest('hex').substring(0, 8);
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
            },
          },
        };
      }
      return config;
    },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);


  