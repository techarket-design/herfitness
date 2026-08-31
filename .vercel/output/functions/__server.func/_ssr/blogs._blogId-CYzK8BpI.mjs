import { R as notFound, g as createFileRoute, h as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as fetchSanityBlogs, r as fetchSanityBlogBySlug } from "./sanity-clmAvCgk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blogs._blogId-CYzK8BpI.js
var $$splitComponentImporter = () => import("./blogs._blogId-DTGIGxO3.mjs");
var Route = createFileRoute("/blogs/$blogId")({
	loader: async ({ params }) => {
		const { post, source } = await fetchSanityBlogBySlug(params.blogId);
		if (!post) throw notFound();
		const { posts: allPosts } = await fetchSanityBlogs();
		return {
			post,
			source,
			related: allPosts.filter((p) => p.id !== post.id && p.slug !== post.slug).slice(0, 3)
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Article Not Found — Her Fitness" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { post } = loaderData;
		return {
			meta: [
				{ title: `${post.title} | Her Fitness Journal` },
				{
					name: "description",
					content: post.excerpt
				},
				{
					property: "og:title",
					content: post.title
				},
				{
					property: "og:description",
					content: post.excerpt
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:url",
					content: `/blogs/${post.slug}`
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				}
			],
			links: [{
				rel: "canonical",
				href: `/blogs/${post.slug}`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BlogPosting",
					headline: post.title,
					description: post.excerpt,
					author: {
						"@type": "Person",
						name: post.author.name,
						jobTitle: post.author.role
					},
					datePublished: post.date,
					publisher: {
						"@type": "Organization",
						name: "Her Fitness"
					}
				})
			}]
		};
	}
});
//#endregion
export { Route as t };
