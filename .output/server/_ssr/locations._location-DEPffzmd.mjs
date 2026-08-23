import { o as motion } from "../_libs/framer-motion.mjs";
import { i as hero_default, n as LOCATIONS } from "./locations-Dfz4tujt.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { I as Clock, K as ArrowUpRight, L as CircleCheck, c as TramFront, q as ArrowRight, u as Sparkles, w as MapPin, y as Phone } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Navbar, t as Button } from "./Footer-CeJxoXe3.mjs";
import { n as WhatsAppButton, t as ChatBot } from "./ChatBot-BUCCbvDj.mjs";
import { t as Trainers } from "./Trainers-BKzLbxsO.mjs";
import { t as ContactForm } from "./ContactForm-DSgHzczE.mjs";
import { t as Route } from "./locations._location-pIVsbyy6.mjs";
import { t as SERVICES } from "./services-BPNvSy_b.mjs";
import { t as VideoBlock } from "./VideoBlock-BLlWBTII.mjs";
import { t as Transformations } from "./Transformations-CCDnjOYW.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-BB_FUhoa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/locations._location-DEPffzmd.js
var import_jsx_runtime = require_jsx_runtime();
function Programs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "programs-grid",
		className: "relative py-24 sm:py-32 bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.3em] text-primary",
						children: "All Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-4xl sm:text-5xl",
						children: ["Explore every ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "text-gradient-rose",
							children: "program."
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-muted-foreground",
					children: "Seven signature programs — from heavy lifts to healing flows — every one built by female coaches who understand hormones, cycles and real life."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: SERVICES.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services/$service",
						params: { service: p.slug },
						className: "group relative block overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-luxe)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.title,
								width: 1200,
								height: 900,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-4 bottom-4 rounded-2xl glass p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] uppercase tracking-[0.25em] text-primary",
									children: p.tag
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-2xl",
									children: p.title
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-foreground/70",
								children: p.short
							})]
						})]
					})
				}, p.slug))
			})]
		})
	});
}
var stagger = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: .1 }
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
function LocationPageView({ location: loc }) {
	const others = LOCATIONS.filter((l) => l.slug !== loc.slug).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[92vh] w-full overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: loc.heroImage ?? "/assets/hero-DJflrJ4f.jpg",
						alt: `Her Fitness ${loc.name} — women-only gym in ${loc.area}`,
						className: "absolute inset-0 h-full w-full object-cover",
						initial: { scale: 1.1 },
						animate: { scale: 1.02 },
						transition: {
							duration: 2,
							ease: "easeOut"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: "linear-gradient(180deg, oklch(0.20 0.02 20 / 0.4) 0%, oklch(0.20 0.02 20 / 0.55) 55%, oklch(0.20 0.02 20 / 0.9) 100%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/40 blur-3xl animate-float" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-float [animation-delay:2s]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
											to: "/locations",
											className: "hover:text-white",
											children: "Locations"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white",
											children: loc.name
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
									variants: rise,
									className: "mt-6 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }),
										" ",
										loc.area,
										" · Women-Only"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
									variants: rise,
									className: "mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl",
									children: [
										"Her Fitness",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", {
											className: "text-gradient-rose",
											children: [loc.name, "."]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									variants: rise,
									className: "mt-6 max-w-xl text-base text-white/85 sm:text-lg",
									children: loc.intro
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
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:${loc.phone.replace(/\s/g, "")}`,
										className: "inline-flex items-center gap-3 rounded-full glass-dark px-6 py-3 text-sm font-medium hover:bg-white/10 transition",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
											" ",
											loc.phone
										]
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .4,
								duration: .7
							},
							className: "mt-14 grid gap-3 sm:grid-cols-3",
							children: [
								{
									icon: MapPin,
									label: "Address",
									value: loc.address
								},
								{
									icon: Clock,
									label: "Open",
									value: loc.hours
								},
								{
									icon: TramFront,
									label: "Nearest Metro",
									value: loc.metros[0] ?? "—"
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
									className: "mt-2 text-sm text-white/90 leading-snug",
									children: it.value
								})]
							}, it.label))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative py-24 sm:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-2 lg:items-center",
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs uppercase tracking-[0.3em] text-primary",
								children: ["Why ", loc.name]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 text-4xl sm:text-5xl",
								children: ["Built around ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", {
									className: "text-gradient-rose",
									children: [loc.area, " women."]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 text-muted-foreground",
								children: [
									loc.landmark,
									". Our ",
									loc.name,
									" studio serves women from ",
									loc.serves.join(", "),
									" — with coaching, community and amenities designed exactly for how you live."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
								variants: stagger,
								initial: "hidden",
								whileInView: "show",
								viewport: { once: true },
								className: "mt-8 space-y-3",
								children: loc.usp.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
									variants: rise,
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground/80",
										children: u
									})]
								}, u))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .95
						},
						whileInView: {
							opacity: 1,
							scale: 1
						},
						viewport: { once: true },
						transition: { duration: .8 },
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-luxe)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: loc.aboutImage ?? "/assets/hero-DJflrJ4f.jpg",
								alt: `Inside Her Fitness ${loc.name}`,
								className: "aspect-[4/5] w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-4 bottom-4 rounded-2xl glass p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-widest text-primary",
									children: "Est. 2009"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 font-display text-xl",
									children: ["A women-only floor · ", loc.name]
								})]
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 bg-secondary/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.3em] text-primary",
						children: "Serving women across"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap justify-center gap-3",
						children: loc.serves.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full glass px-5 py-2 text-sm font-medium",
							children: s
						}, s))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoBlock, {
				src: `/videos/location-${loc.slug}.mp4`,
				eyebrow: `${loc.name} Studio Tour`,
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Step inside ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", {
					className: "text-gradient-rose",
					children: [
						"Her Fitness ",
						loc.name,
						"."
					]
				})] }),
				copy: "Sunlit studios, whisper-quiet weight floors and a recovery lounge that feels like a spa — a 60-second walk-through.",
				height: "md"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
						children: (loc.galleryImages && loc.galleryImages.length > 0 ? loc.galleryImages : [
							hero_default,
							hero_default,
							hero_default,
							hero_default
						]).map((imgSrc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
							whileHover: { y: -4 },
							className: "group relative aspect-[3/4] overflow-hidden rounded-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: imgSrc,
									alt: `${loc.name} studio ${i + 1}`,
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "absolute bottom-3 left-3 rounded-full glass-dark px-2.5 py-1 text-[10px] uppercase tracking-widest text-white",
									children: ["0", i + 1]
								})
							]
						}, i))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Programs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trainers, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Transformations, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 sm:py-32 bg-secondary/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs uppercase tracking-[0.3em] text-primary",
							children: [loc.name, " FAQ"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-4xl sm:text-5xl",
							children: ["Common questions from ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-gradient-rose",
								children: loc.name
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
						type: "single",
						collapsible: true,
						className: "mt-12 space-y-3",
						children: [
							...loc.faqs,
							{
								q: `What are the timings of your ${loc.name} studio?`,
								a: `${loc.hours}. Personal training slots begin as early as 5:30 am on request.`
							},
							{
								q: `Is your ${loc.name} gym truly women-only?`,
								a: `Her Fitness ${loc.name} is a 100% private, women-only gym sanctuary for members. Our coaching team includes certified female and male fitness experts specialized in personal training, strength, and women's health.`
							}
						].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
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
				className: "py-24 sm:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.3em] text-primary",
							children: "More Studios"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-4xl sm:text-5xl",
							children: ["Also close to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-gradient-rose",
								children: "you"
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/locations",
							className: "text-sm font-medium hover:text-primary flex items-center gap-1",
							children: ["All locations ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
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
								to: "/locations/$location",
								params: { location: o.slug },
								className: "group block rounded-2xl glass p-6 hover:-translate-y-1 transition-all",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-xl",
										children: o.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
										children: o.area
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-4 inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition",
										children: ["Visit branch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
									})
								]
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
function LocationPage() {
	const { loc } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationPageView, { location: loc });
}
//#endregion
export { LocationPage as component };
