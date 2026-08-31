import { o as __toESM } from "../_runtime.mjs";
import { n as LOCATIONS } from "./locations-CRmglW5X.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as Slot, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { B as ChevronDown, C as Menu, N as Facebook, T as Mail, k as Instagram, n as Youtube, r as X, w as MapPin, y as Phone } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-BBronO8e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var links = [
	{
		to: "/services",
		hash: void 0,
		label: "Services"
	},
	{
		to: "/trainers",
		hash: void 0,
		label: "Trainers"
	},
	{
		to: "/blogs",
		hash: void 0,
		label: "Blogs"
	},
	{
		to: "/about",
		hash: void 0,
		label: "About"
	},
	{
		to: "/",
		hash: "contact",
		label: "Contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [locOpen, setLocOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (r) => r.location.pathname });
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
		setLocOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: `mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 ${scrolled ? "glass rounded-full py-2.5" : "py-3"} transition-all duration-500`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center gap-2 shrink-0",
					"aria-label": "Her Fitness home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/her-fitness-logo.png",
						alt: "Her Fitness",
						className: "h-10 w-auto sm:h-11 transition-transform hover:scale-105"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/80",
					children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						hash: l.hash,
						className: "hover:text-primary transition-colors",
						children: l.label
					}) }, l.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative",
						onMouseEnter: () => setLocOpen(true),
						onMouseLeave: () => setLocOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "flex items-center gap-1 hover:text-primary transition-colors",
							children: ["Locations ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5" })]
						}), locOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-1/2 top-full -translate-x-1/2 pt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass rounded-2xl p-3 min-w-[240px] shadow-[var(--shadow-luxe)] animate-fade-in",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/locations",
										className: "block rounded-xl px-3 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors",
										children: "All Locations →"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-1 h-px bg-border/60" }),
									LOCATIONS.map((loc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/locations/$location",
										params: { location: loc.slug },
										className: "flex items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-primary" }), loc.name]
									}, loc.slug))
								]
							})
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:flex items-center gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						hash: "contact",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "rounded-full px-5 shadow-[var(--shadow-luxe)]",
							children: "Free Trial"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "lg:hidden grid h-10 w-10 place-items-center rounded-full glass",
					onClick: () => setOpen((o) => !o),
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden mx-4 mt-2 glass rounded-3xl p-6 animate-fade-in",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "flex flex-col gap-4 text-base font-medium",
				children: [
					links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						hash: l.hash,
						className: "block py-1 hover:text-primary",
						children: l.label
					}) }, l.label)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "pt-2 border-t border-border/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-muted-foreground mb-2",
							children: "Locations"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-1",
							children: LOCATIONS.map((loc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/locations/$location",
								params: { location: loc.slug },
								className: "block py-1.5 text-sm hover:text-primary",
								children: loc.name
							}, loc.slug))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						hash: "contact",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "w-full rounded-full",
							children: "Free Trial"
						})
					}) })
				]
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden bg-foreground text-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-4 py-20 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex items-center rounded-2xl bg-white p-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/her-fitness-logo.png",
									alt: "Her Fitness",
									className: "h-12 w-auto"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-md text-background/70",
								children: "Delhi NCR's premium women-only fitness studio. Strong bodies, softer minds, unstoppable sisterhood."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex gap-3",
								children: [
									{
										Icon: Instagram,
										href: "https://www.instagram.com/herfitnessindia",
										label: "Instagram"
									},
									{
										Icon: Facebook,
										href: "#",
										label: "Facebook"
									},
									{
										Icon: Youtube,
										href: "#",
										label: "Youtube"
									}
								].map(({ Icon, href, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href,
									target: href !== "#" ? "_blank" : void 0,
									rel: href !== "#" ? "noreferrer" : void 0,
									className: "grid h-10 w-10 place-items-center rounded-full border border-background/20 hover:bg-primary hover:border-primary transition-colors",
									"aria-label": label,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}, label))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-lg",
						children: "Explore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm text-background/70",
						children: [
							{
								l: "Services",
								h: "/services"
							},
							{
								l: "About Us",
								h: "/about"
							},
							{
								l: "Trainers",
								h: "/trainers"
							},
							{
								l: "Blogs & Journal",
								h: "/blogs"
							},
							{
								l: "Locations",
								h: "/locations"
							},
							{
								l: "Contact",
								h: "/#contact"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.h,
							className: "hover:text-background",
							children: item.l
						}) }, item.l))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-lg",
						children: "Reach us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm text-background/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary" }), " +91 98100 00000"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary" }), " hello@herfitness.in"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "8 studios · Delhi NCR" })
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-background/10 pt-8 text-xs text-background/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Her Fitness Pvt. Ltd. — All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-background",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-background",
							children: "Terms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-background",
							children: "Cookies"
						})
					]
				})]
			})]
		})]
	});
}
//#endregion
export { cn as i, Footer as n, Navbar as r, Button as t };
