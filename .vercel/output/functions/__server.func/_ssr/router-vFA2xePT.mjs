import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as createRootRouteWithContext, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Route$8 } from "./blogs._blogId-OxJKGqTR.mjs";
import { t as Route$9 } from "./locations._location-Be5zY_QA.mjs";
import { t as Route$10 } from "./services._service-B_jiX5N2.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-vFA2xePT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BmBxrsnN.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Her Fitness — Delhi NCR's Premium Women-Only Fitness Studio" },
			{
				name: "description",
				content: "Since 2009, Her Fitness has been Delhi NCR's most-loved women-only gym chain. 8 studios, expert female coaches, complete sisterhood."
			},
			{
				name: "author",
				content: "Her Fitness"
			},
			{
				property: "og:site_name",
				content: "Her Fitness"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/her-fitness-logo.png"
			},
			{
				rel: "apple-touch-icon",
				href: "/her-fitness-logo.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$6 = () => import("./routes-Deqfv_UD.mjs");
var Route$6 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({
		meta: [
			{ title: "Her Fitness — Delhi NCR's Premium Women-Only Fitness Studio" },
			{
				name: "description",
				content: "Luxury women-only fitness studio in Delhi NCR. Strength, yoga, dance & HIIT led by certified female & male fitness coaches. Book your free 3-day trial today."
			},
			{
				property: "og:title",
				content: "Her Fitness — Delhi NCR's Premium Women-Only Fitness Studio"
			},
			{
				property: "og:description",
				content: "Strength, yoga, dance & HIIT — designed by women, for women. 8 women-only studios across Delhi. Book a free trial."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Her Fitness — Premium Women-Only Fitness Studio"
			},
			{
				name: "twitter:description",
				content: "Book your free trial at Delhi NCR's most loved women-only studio."
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "HealthClub",
				name: "Her Fitness",
				description: "Premium women-only fitness studio in Delhi NCR.",
				areaServed: "Delhi NCR",
				address: {
					"@type": "PostalAddress",
					addressRegion: "Delhi NCR",
					addressCountry: "IN"
				},
				telephone: "+91-98100-00000",
				sameAs: ["https://www.instagram.com/herfitnessindia"],
				aggregateRating: {
					"@type": "AggregateRating",
					ratingValue: "4.9",
					reviewCount: "1240"
				}
			})
		}]
	})
});
var $$splitComponentImporter$5 = () => import("./about-DBIRRDvm.mjs");
var Route$5 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({
		meta: [
			{ title: "About Her Fitness — Delhi NCR's Women-Only Fitness Sanctuary" },
			{
				name: "description",
				content: "Meet Her Fitness — a women-only fitness studio in Delhi NCR built on empathy, expertise and community. Discover our story, mission and values."
			},
			{
				property: "og:title",
				content: "About Her Fitness — Our Story"
			},
			{
				property: "og:description",
				content: "Founded by women, for women. Learn how Her Fitness is redefining strength, sisterhood and wellness across Delhi NCR."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "About Her Fitness"
			},
			{
				name: "twitter:description",
				content: "Our story, mission & values."
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	})
});
var $$splitComponentImporter$4 = () => import("./trainers-CTqORaNK.mjs");
var Route$4 = createFileRoute("/trainers")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({
		meta: [
			{ title: "Meet Our Female Trainers | Her Fitness Delhi" },
			{
				name: "description",
				content: "Every coach at Her Fitness is a certified woman — specialising in strength, yoga, zumba, kickboxing, PCOS-safe training, post-natal recovery and clinical nutrition. Meet the team."
			},
			{
				property: "og:title",
				content: "Her Fitness — Our Trainers"
			},
			{
				property: "og:description",
				content: "Certified female coaches across strength, yoga, dance, combat and nutrition — one team, eight Delhi studios."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/trainers"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/trainers"
		}]
	})
});
var $$splitComponentImporter$3 = () => import("./blogs.index-YCRmnQQj.mjs");
var Route$3 = createFileRoute("/blogs/")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({
		meta: [
			{ title: "Women's Health & Fitness Journal | Her Fitness Blog" },
			{
				name: "description",
				content: "Explore expert insights on women's nutrition, cycle syncing, PCOS management, strength training, and post-natal fitness. Written by certified female coaches."
			},
			{
				property: "og:title",
				content: "Her Fitness Journal — Health & Wellness Insights for Women"
			},
			{
				property: "og:description",
				content: "Evidence-based fitness, nutrition, and wellness guides designed specifically for Indian women."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/blogs"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/blogs"
		}]
	})
});
var $$splitComponentImporter$2 = () => import("./blogs.manage-pg0PBZV_.mjs");
var Route$2 = createFileRoute("/blogs/manage")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Sanity Blog Studio & Publisher | Her Fitness" }, {
		name: "description",
		content: "Manage and publish articles directly to Sanity CMS."
	}] })
});
var $$splitComponentImporter$1 = () => import("./locations.index-Db8SnlI5.mjs");
var Route$1 = createFileRoute("/locations/")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({
		meta: [
			{ title: "Our Women-Only Gyms in Delhi | Her Fitness Locations" },
			{
				name: "description",
				content: "Her Fitness runs 8 premium women-only gyms across West, North-West & South-West Delhi — Punjabi Bagh, Rajouri Garden, Paschim Vihar, Janakpuri, Vikas Puri, Kirti Nagar, Prashant Vihar & Dwarka. Find your studio."
			},
			{
				property: "og:title",
				content: "Her Fitness — All Delhi Locations"
			},
			{
				property: "og:description",
				content: "8 women-only fitness studios across Delhi. Find the one closest to you and book your free 3-day trial."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/locations"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/locations"
		}]
	})
});
var $$splitComponentImporter = () => import("./services.index-BWTOCFH4.mjs");
var Route = createFileRoute("/services/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({
		meta: [
			{ title: "Our Services — Women-Only Gym, Yoga, Zumba & More | Her Fitness" },
			{
				name: "description",
				content: "Seven expert-led programs designed for women: strength training, power yoga & pilates, zumba, kickboxing, boot camp, weight training and nutrition. Explore all Her Fitness services."
			},
			{
				property: "og:title",
				content: "Her Fitness — All Services"
			},
			{
				property: "og:description",
				content: "Strength, yoga, dance, combat & nutrition — 7 programs built by women, for women."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/services"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}]
	})
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$5.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var TrainersRoute = Route$4.update({
	id: "/trainers",
	path: "/trainers",
	getParentRoute: () => Route$7
});
var BlogsIndexRoute = Route$3.update({
	id: "/blogs/",
	path: "/blogs/",
	getParentRoute: () => Route$7
});
var BlogsBlogIdRoute = Route$8.update({
	id: "/blogs/$blogId",
	path: "/blogs/$blogId",
	getParentRoute: () => Route$7
});
var BlogsManageRoute = Route$2.update({
	id: "/blogs/manage",
	path: "/blogs/manage",
	getParentRoute: () => Route$7
});
var LocationsIndexRoute = Route$1.update({
	id: "/locations/",
	path: "/locations/",
	getParentRoute: () => Route$7
});
var LocationsLocationRoute = Route$9.update({
	id: "/locations/$location",
	path: "/locations/$location",
	getParentRoute: () => Route$7
});
var ServicesIndexRoute = Route.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	TrainersRoute,
	BlogsBlogIdRoute,
	BlogsManageRoute,
	LocationsLocationRoute,
	ServicesServiceRoute: Route$10.update({
		id: "/services/$service",
		path: "/services/$service",
		getParentRoute: () => Route$7
	}),
	BlogsIndexRoute,
	LocationsIndexRoute,
	ServicesIndexRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
