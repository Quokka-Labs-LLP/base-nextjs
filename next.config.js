/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        dirs: ['.'],
    },
    poweredByHeader: false,
    trailingSlash: true,
    basePath: '',
}

module.exports = nextConfig
