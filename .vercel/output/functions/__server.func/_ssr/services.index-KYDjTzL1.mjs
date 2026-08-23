import { t as IMAGES } from "./locations-Dfz4tujt.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { I as Clock, M as Flame, q as ArrowRight, u as Sparkles } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Navbar } from "./Footer-CeJxoXe3.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { n as WhatsAppButton, t as ChatBot } from "./ChatBot-BUCCbvDj.mjs";
import { t as ContactForm } from "./ContactForm-DSgHzczE.mjs";
import { t as SERVICES } from "./services-BPNvSy_b.mjs";
import { t as VideoBlock } from "./VideoBlock-BLlWBTII.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services.index-KYDjTzL1.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[70vh] w-full overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: IMAGES.hero,
						alt: "Her Fitness services",
						className: "absolute inset-0 h-full w-full object-cover",
						initial: { scale: 1.15 },
						animate: { scale: 1.02 },
						transition: { duration: 2 }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: "linear-gradient(180deg, oklch(0.20 0.02 20 / 0.4), oklch(0.20 0.02 20 / 0.9))" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6",
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
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " 7 signature programs"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-6 font-display text-5xl sm:text-7xl leading-[1.05]",
									children: ["Services built ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "text-gradient-rose",
										children: "for her."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-xl text-white/85 text-lg",
									children: "Every program at Her Fitness is coached by certified women and built around female physiology — hormones, cycles, PCOS, post-natal, all of it."
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoBlock, {
				src: "/videos/services-showcase.mp4",
				eyebrow: "Inside the studio",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Real classes. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
					className: "text-gradient-rose",
					children: "Real women."
				})] }),
				copy: "A glimpse into a typical week at Her Fitness — no filters, no staged shots.",
				height: "md"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 sm:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 40
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .6,
								delay: i * .06
							},
							whileHover: { y: -6 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services/$service",
								params: { service: s.slug },
								className: "group relative block overflow-hidden rounded-[2rem] bg-card shadow-[var(--shadow-luxe)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[4/5] overflow-hidden",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: s.image,
											alt: s.title,
											loading: "lazy",
											className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute inset-0",
											style: { background: "linear-gradient(180deg, transparent 40%, oklch(0.20 0.02 20 / 0.9))" }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "absolute top-4 left-4 rounded-full glass-dark px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white",
											children: [
												"0",
												i + 1,
												" · ",
												s.tag
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute inset-x-5 bottom-5 text-white",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-3xl",
													children: s.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm text-white/80 line-clamp-2",
													children: s.short
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-4 flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex gap-3 text-[11px] uppercase tracking-widest text-white/70",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "inline-flex items-center gap-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }), s.duration]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "inline-flex items-center gap-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3 w-3" }), s.intensity]
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
													})]
												})
											]
										})
									]
								})
							})
						}, s.slug))
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
export { ServicesIndex as component };
