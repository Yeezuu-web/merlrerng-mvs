/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

redirects = async () => {
    return [
      {
        source: '/login',
        destination: '/auth/login',
        permanent: true,
      },
      {
        source: '/register',
        destination: '/auth/register',
        permanent: true,
      },
      {
        source: '/dashboard',
        destination: '/admin/dashboard',
        permanent: true,
      },
    ]
},
  
module.exports = {
  nextConfig,
  redirects
}
