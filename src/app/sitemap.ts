// import { getBlogPosts } from 'app/blog/utils'

export const BASE_URL = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

export default async function sitemap() {
	// let blogs = getBlogPosts().map((post) => ({
	//   url: `${baseUrl}/blog/${post.slug}`,
	//   lastModified: post.metadata.publishedAt,
	// }))
	//
	// let routes = ['', '/blog'].map((route) => ({
	//   url: `${baseUrl}${route}`,
	//   lastModified: new Date().toISOString().split('T')[0],
	// }))
	//
	// return [...routes, ...blogs]
	return [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
	];
}
