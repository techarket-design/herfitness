import { o as motion } from "../_libs/framer-motion.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { H as Calendar, I as Clock, L as CircleCheck, M as Flame, o as Users, q as ArrowRight, u as Sparkles } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Navbar, t as Button } from "./Footer-CeJxoXe3.mjs";
import { n as WhatsAppButton, t as ChatBot } from "./ChatBot-BUCCbvDj.mjs";
import { t as ContactForm } from "./ContactForm-DSgHzczE.mjs";
import { t as SERVICES } from "./services-BPNvSy_b.mjs";
import { t as VideoBlock } from "./VideoBlock-BLlWBTII.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-BB_FUhoa.mjs";
import { t as Route } from "./services._service-UGsZmlQm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._service-bET_6Vj0.js
var import_jsx_runtime = require_jsx_runtime();
var stagger = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: .08 }
	}
};
var rise = {
	hidden: {
		opacity: 0,
		y: 30
	},
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: .6 }
	}
};
function ServicePage() {
	const { svc } = Route.useLoaderData();
	const others = SERVICES.filter((s) => s.slug !== svc.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[92vh] w-full overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: svc.image,
						alt: svc.title,
						className: "absolute inset-0 h-full w-full object-cover",
						initial: { scale: 1.15 },
						animate: { scale: 1.02 },
						transition: { duration: 2 }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: "linear-gradient(180deg, oklch(0.20 0.02 20 / 0.4), oklch(0.20 0.02 20 / 0.55) 55%, oklch(0.20 0.02 20 / 0.92))" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/40 blur-3xl animate-float" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-float [animation-delay:2s]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: stagger,
							initial: "hidden",
							animate: "show",
							className: "max-w-3xl text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									variants: rise,
									className: "flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/80",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/",
											className: "hover:text-white",
											children: "Her Fitness"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/services",
											className: "hover:text-white",
											children: "Services"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: svc.title })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
									variants: rise,
									className: "mt-6 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }),
										" ",
										svc.tag
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
									variants: rise,
									className: "mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl",
									children: svc.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									variants: rise,
									className: "mt-6 max-w-xl text-base text-white/85 sm:text-lg",
									children: svc.intro
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									variants: rise,
									className: "mt-10 flex flex-wrap items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										hash: "contact",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "lg",
											className: "rounded-full px-8 py-6 text-base shadow-[var(--shadow-luxe)]",
											children: ["Book Your Free Trial ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/services",
										className: "inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3 text-sm font-medium hover:bg-white/10 transition",
										children: "All services"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									variants: rise,
									className: "mt-14 grid gap-3 sm:grid-cols-3",
									children: [
										{
											icon: Clock,
											label: "Duration",
											value: svc.duration
										},
										{
											icon: Flame,
											label: "Intensity",
											value: svc.intensity
										},
										{
											icon: Users,
											label: "Format",
											value: svc.format
										}
									].map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "glass-dark rounded-2xl p-5 text-white",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-xs uppercase tracking-widest text-white/60",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-3.5 w-3.5 text-accent" }),
												" ",
												it.label
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-white/90",
											children: it.value
										})]
									}, it.label))
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 sm:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: -30
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: { once: true },
						transition: { duration: .7 },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.3em] text-primary",
								children: "Inside the class"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 text-4xl sm:text-5xl",
								children: [
									"What makes ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "text-gradient-rose",
										children: svc.title
									}),
									" different."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
								variants: stagger,
								initial: "hidden",
								whileInView: "show",
								viewport: { once: true },
								className: "mt-8 space-y-3",
								children: svc.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
									variants: rise,
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground/80",
										children: h
									})]
								}, h))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: "hidden",
						whileInView: "show",
						viewport: { once: true },
						variants: stagger,
						className: "grid gap-4 sm:grid-cols-3 lg:grid-cols-1",
						children: svc.benefits.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: rise,
							whileHover: { y: -4 },
							className: "glass rounded-3xl p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary font-display text-lg",
									children: ["0", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-xl",
									children: b.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: b.desc
								})
							]
						}, b.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-secondary/40 py-24 sm:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.3em] text-primary",
							children: "A typical week"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-4xl sm:text-5xl",
							children: [
								"Your ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "text-gradient-rose",
									children: svc.title
								}),
								" calendar."
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: svc.weeklyFlow.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .4,
								delay: i * .05
							},
							className: "glass rounded-2xl p-5 flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-foreground/80",
								children: line
							})]
						}, line))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoBlock, {
				src: `/videos/service-${svc.slug}.mp4`,
				eyebrow: `${svc.title} · Preview`,
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"See ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "text-gradient-rose",
						children: svc.title
					}),
					" in motion."
				] }),
				copy: "A short walk-through of the class from a Her Fitness studio floor."
			}),
			svc.faqs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 sm:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.3em] text-primary",
							children: "FAQ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-4xl sm:text-5xl",
							children: ["Before you book ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-gradient-rose",
								children: svc.title
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
						type: "single",
						collapsible: true,
						className: "mt-12 space-y-3",
						children: svc.faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
							value: `item-${i}`,
							className: "rounded-2xl glass px-6 border-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
								className: "text-left font-display text-lg hover:no-underline",
								children: f.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
								className: "text-muted-foreground text-base",
								children: f.a
							})]
						}, i))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-secondary/40 py-24 sm:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.3em] text-primary",
							children: "More programs"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-4xl sm:text-5xl",
							children: ["Also popular ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-gradient-rose",
								children: "with her."
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							className: "text-sm font-medium hover:text-primary flex items-center gap-1",
							children: ["All services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: others.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .5,
								delay: i * .08
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services/$service",
								params: { service: o.slug },
								className: "group block overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-luxe)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[4/3] overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: o.image,
										alt: o.title,
										loading: "lazy",
										className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] uppercase tracking-[0.25em] text-primary",
										children: o.tag
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-xl",
										children: o.title
									})]
								})]
							})
						}, o.slug))
					})]
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
export { ServicePage as component };
