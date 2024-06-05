/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: () => [
        {
            source: '/board',
            headers:[
                {
                    key: 'Cache-Control',
                    value: 'no-store'
                }
            ]
        }
    ]
};

export default nextConfig;
