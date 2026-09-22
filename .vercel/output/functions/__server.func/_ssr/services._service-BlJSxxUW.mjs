import { R as notFound, g as createFileRoute, h as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as findService, t as SERVICES } from "./services-wsfFpgJp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._service-BlJSxxUW.js
var $$splitComponentImporter = () => import("./services._service-D0lqSPZj.mjs");
var Route = createFileRoute("/services/$service")({
	loader: ({ params }) => {
		const svc = findService(params.service);
		if (!svc) throw notFound();
		return { svc };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Service not found — Her Fitness" }, {
			name: "robots",
			content: "noindex"
		}] };
		const s = loaderData.svc;
		return {
			meta: [
				{ title: `${s.title} for Women in Delhi | Her Fitness` },
				{
					name: "description",
					content: `${s.title} at Her Fitness — ${s.short} Coached by certified female trainers across 8 Delhi studios.`
				},
				{
					property: "og:title",
					content: `${s.title} — Her Fitness`
				},
				{
					property: "og:description",
					content: s.short
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:url",
					content: `/services/${s.slug}`
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				}
			],
			links: [{
				rel: "canonical",
				href: `/services/${s.slug}`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Service",
					name: `${s.title} — Her Fitness`,
					description: s.intro,
					provider: {
						"@type": "HealthClub",
						name: "Her Fitness"
					},
					areaServed: "Delhi NCR"
				})
			}]
		};
	},
	staticData: { prerender: SERVICES.map((s) => ({ service: s.slug })) }
});
//#endregion
export { Route as t };
