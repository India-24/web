/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'cloud-9m0tx168g-hack-club-bot.vercel.app'],
    },
    output: "export",
    basePath: process.env.NODE_ENV === "production" ? "/catalyst": undefined,
}

module.exports = nextConfig
