/** @type {import('next').NextConfig} */

const nextConfig = {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack", "url-loader"],
		});

		return config;
	},
	reactStrictMode: true,
	transpilePackages: ["next-mdx-remote"],
    images: {
        remotePatterns: [new URL("https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Sanzio_01_Plato_Aristotle.jpg/500px-Sanzio_01_Plato_Aristotle.jpg")]
    }
};

export default nextConfig;
