/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'www.google.co.in',
              pathname: '**',
            },
        ],
    },
};

export default nextConfig;