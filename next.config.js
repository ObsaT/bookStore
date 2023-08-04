/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    swcMinify: true,
    optimizeFonts: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images-na.ssl-images-amazon.com",
            },
            {
                protocol: "https",
                hostname: "img.freepik.com",
            },
        ],
        minimumCacheTTL: 15000000,
    },
};

module.exports = nextConfig
