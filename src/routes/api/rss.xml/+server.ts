// TODO: types
import type Post from '$lib/types/post'
import { fetchPosts } from '$lib/assets/js/utils'

// export const prerender = true

export const GET = async () => {
	const data = await fetchPosts({ limit: -1 })

	const body: string = render(data)
	const headers = {
		'Cache-Control': `max-age=0, s-maxage=3600`,
		'Content-Type': 'application/xml',
	}
	return new Response(
		body,
		{
			status: 200,
			headers,
		}
	)
}

const render = (posts: Post[]): string => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>Random Brandles</title>
<description>Brandon Touchet's art in science</description>
<link>https://randombrandles.com</link>
<atom:link href="https://randombrandles.com/api/rss.xml" rel="self" type="application/rss+xml"/>
${posts
	.map(
		(post) => `<item>
<guid isPermaLink="true">https://randombrandles.com/blog/${post.slug}</guid>
<title>${post.title}</title>
<link>https://randombrandles.com/blog/${post.slug}</link>
<description>${post.excerpt}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
	)
	.join('')}
</channel>
</rss>
`
