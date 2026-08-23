import { o as motion } from "../_libs/framer-motion.mjs";
import { i as hero_default, n as LOCATIONS } from "./locations-Dfz4tujt.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { q as ArrowRight, u as Sparkles, w as MapPin, y as Phone } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Navbar } from "./Footer-CeJxoXe3.mjs";
import { n as WhatsAppButton, t as ChatBot } from "./ChatBot-BUCCbvDj.mjs";
import { t as ContactForm } from "./ContactForm-DSgHzczE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/locations.index-BZ2KU9LT.js
var import_jsx_runtime = require_jsx_runtime();
function LocationsIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[70vh] w-full overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_default,
						alt: "Her Fitness locations across Delhi",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: "linear-gradient(180deg, oklch(0.20 0.02 20 / 0.5), oklch(0.20 0.02 20 / 0.85))" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .7 },
							className: "max-w-3xl text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " 8 studios across Delhi"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-6 font-display text-5xl sm:text-7xl leading-[1.05]",
									children: ["Find your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "text-gradient-rose",
										children: "sanctuary."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-xl text-white/85 text-lg",
									children: "Every Her Fitness studio is women-only, coach-led and community-driven — from Punjabi Bagh to Dwarka."
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 sm:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: LOCATIONS.map((loc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 30
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .5,
								delay: i * .06
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/locations/$location",
								params: { location: loc.slug },
								className: "group relative block overflow-hidden rounded-[2rem] bg-card shadow-[var(--shadow-luxe)] hover:-translate-y-2 transition-all duration-500",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-[4/3] overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: hero_default,
											alt: `Her Fitness ${loc.name}`,
											className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs uppercase tracking-[0.25em] text-primary",
												children: loc.area
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 font-display text-2xl",
												children: loc.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm text-muted-foreground line-clamp-2",
												children: loc.intro
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-4 flex items-center justify-between text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-1.5 text-foreground/70",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" }),
														" ",
														loc.phone
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "absolute top-4 right-4 h-5 w-5 text-white drop-shadow" })
								]
							})
						}, loc.slug))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatBot, {})
		]
	});
}
//#endregion
export { LocationsIndex as component };
