/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		// Elimina la siguiente línea, ya que `appDir` no es necesario
		// appDir: true,
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
