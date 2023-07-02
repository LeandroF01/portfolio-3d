/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: "/Blog/:slug",
				destination: "/Blog/page",
			},
		];
	},
};

module.exports = nextConfig;
