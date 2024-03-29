/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com'
            },
            {
                protocol: 'https',
                hostname: 'unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'daisyui.com'
            },
            {
                protocol: 'https',
                hostname: "cdn2.thecatapi.com"
            }
        ]

    }
};

export default nextConfig;
