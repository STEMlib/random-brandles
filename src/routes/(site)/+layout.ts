import type { PageData } from './$types';

export const prerender = true;

export const load = async ({ fetch, url }: { fetch: typeof fetch, url: URL }): Promise<PageData> => {
	const path: string = url.pathname;

	// Fetch the RSS feed to ensure the route is prerendered
	await fetch(`/api/rss.xml`);

	// Fetch all posts
	const res = await fetch(`/api/posts/all`);
	const resJSON = await res.json();

	// Filter for popular posts and extract the slug and title
	const popularPosts = resJSON
		.filter(post => post.categories.includes('popular'))
		.map(post => ({ slug: post.slug, title: post.title }));

	// Get all unique categories
	const allCategories = Array.from(new Set(resJSON.flatMap(p => p.categories)));

	return {
		path,
		popularPosts,
		allCategories
	};
};
