/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'axadbleuzltxilusvjgm.supabase.co',
              port: '',
              pathname: '/**',
            },
          ],
        domains: ['placehold.co, axadbleuzltxilusvjgm.supabase.co']
    }
};

export default nextConfig;
