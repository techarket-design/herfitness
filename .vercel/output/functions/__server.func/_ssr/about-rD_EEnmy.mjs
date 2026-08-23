import { t as IMAGES } from "./locations-Dfz4tujt.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as Heart, D as Leaf, G as Award, d as ShieldCheck, o as Users, q as ArrowRight, u as Sparkles } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Navbar, t as Button } from "./Footer-CeJxoXe3.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { n as WhatsAppButton, t as ChatBot } from "./ChatBot-BUCCbvDj.mjs";
import { n as Testimonials, t as AnimatedStats } from "./Testimonials-DNAu4FO4.mjs";
import { t as Trainers } from "./Trainers-BKzLbxsO.mjs";
import { t as ContactForm } from "./ContactForm-DSgHzczE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-rD_EEnmy.js
var import_jsx_runtime = require_jsx_runtime();
var stagger = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: .12 }
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
		transition: { duration: .7 }
	}
};
var values = [
	{
		icon: Heart,
		title: "Empathy First",
		desc: "Every coach is trained to listen — because motivation begins with being understood."
	},
	{
		icon: ShieldCheck,
		title: "Safe Space",
		desc: "Women-only floors, women-only staff. From the reception to the sauna."
	},
	{
		icon: Award,
		title: "Certified Expertise",
		desc: "NASM, ACE, RYT-500 and PCOS-certified coaches. Nothing less."
	},
	{
		icon: Leaf,
		title: "Holistic Wellness",
		desc: "Strength, breath, nutrition and rest — we treat fitness as a whole ecosystem."
	},
	{
		icon: Users,
		title: "Sisterhood",
		desc: "We build friendships as much as we build bodies. You'll never train alone."
	},
	{
		icon: Sparkles,
		title: "Progress, Not Perfection",
		desc: "Small wins, honoured. Big goals, celebrated. Zero judgement in between."
	}
];
var timeline = [
	{
		y: "2009",
		t: "The Founding Vision",
		d: "Two friends walked out of a mixed gym feeling unseen — and opened Her Fitness in Punjabi Bagh: a space designed around how women actually live and train."
	},
	{
		y: "2013",
		t: "West Delhi Expansion",
		d: "Rajouri Garden and Paschim Vihar join. We become the first women-only chain to serve West Delhi at scale."
	},
	{
		y: "2017",
		t: "The Wellness Pivot",
		d: "We add power yoga, pilates and PCOS-informed nutrition — treating fitness as an ecosystem, not just a workout."
	},
	{
		y: "2021",
		t: "Eight Studios Strong",
		d: "Janakpuri, Vikas Puri, Kirti Nagar, Prashant Vihar and Dwarka open. Over 10,000 women call Her Fitness home."
	},
	{
		y: "Today",
		t: "17 Years of Sisterhood",
		d: "Every day, women walk in unsure — and walk out unstoppable. That's the whole point, and it always has been."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[85vh] w-full overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: IMAGES.aboutHero,
						alt: "Her Fitness — women training together",
						className: "absolute inset-0 h-full w-full object-cover",
						initial: { scale: 1.15 },
						animate: { scale: 1.03 },
						transition: {
							duration: 2.2,
							ease: "easeOut"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: "linear-gradient(180deg, oklch(0.20 0.02 20 / 0.45) 0%, oklch(0.20 0.02 20 / 0.6) 55%, oklch(0.20 0.02 20 / 0.92) 100%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/40 blur-3xl animate-float" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-float [animation-delay:2s]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6",
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
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "About Us" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
									variants: rise,
									className: "mt-6 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Our Story"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
									variants: rise,
									className: "mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl",
									children: [
										"Built by women.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
											className: "text-gradient-rose",
											children: "Trusted by thousands."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									variants: rise,
									className: "mt-6 max-w-xl text-lg text-white/85",
									children: "Her Fitness began with one belief: fitness spaces should feel like home, not a stage. Today, eight studios later, that promise still guides everything we do."
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative py-24 sm:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 grid gap-16 lg:grid-cols-2 lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: -40
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: { once: true },
						transition: { duration: .8 },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.3em] text-primary",
								children: "Our Mission"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 text-4xl sm:text-5xl",
								children: ["To make every woman feel ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "text-gradient-rose",
									children: "strong, seen and safe."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-muted-foreground text-lg leading-relaxed",
								children: "We're not building gyms. We're building sanctuaries — places where a first-time lifter and a marathon runner can share a mat, a laugh and a protein shake. Where hormones, cycles and life stages are understood, not ignored. Where progress is measured in confidence, not calories."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									hash: "contact",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "lg",
										className: "rounded-full px-8 py-6 text-base shadow-[var(--shadow-luxe)]",
										children: ["Join our sisterhood ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
									})
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .9,
							rotate: -3
						},
						whileInView: {
							opacity: 1,
							scale: 1,
							rotate: 0
						},
						viewport: { once: true },
						transition: {
							duration: .9,
							ease: "easeOut"
						},
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-luxe)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: IMAGES.aboutHero,
								alt: "Inside Her Fitness",
								className: "aspect-[4/5] w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-4 bottom-4 rounded-2xl glass p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-widest text-primary",
									children: "Since 2009 · 17 Years"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-xl",
									children: "8,000+ women, one community."
								})]
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedStats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 sm:py-32 bg-secondary/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.3em] text-primary",
							children: "What we stand for"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-4xl sm:text-5xl",
							children: ["Six values, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-gradient-rose",
								children: "zero compromises."
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						variants: stagger,
						initial: "hidden",
						whileInView: "show",
						viewport: { once: true },
						className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: rise,
							whileHover: { y: -6 },
							className: "rounded-3xl glass p-8 group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-display text-2xl",
									children: v.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-muted-foreground",
									children: v.desc
								})
							]
						}, v.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 sm:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.3em] text-primary",
							children: "Our Journey"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-4xl sm:text-5xl",
							children: ["Five years, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-gradient-rose",
								children: "countless comebacks."
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/40 to-transparent md:-translate-x-1/2" }), timeline.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 40
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-80px"
							},
							transition: {
								duration: .6,
								delay: .05 * i
							},
							className: `relative mb-12 md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `pl-12 md:pl-0 md:pr-8 ${i % 2 === 0 ? "md:text-right" : "md:text-left md:[direction:ltr]"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-3xl glass p-6 inline-block md:max-w-md",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs uppercase tracking-[0.3em] text-primary",
												children: step.y
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 font-display text-2xl",
												children: step.t
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-muted-foreground",
												children: step.d
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-4 top-6 md:left-1/2 md:-translate-x-1/2 grid h-4 w-4 place-items-center rounded-full bg-primary ring-4 ring-background" })
							]
						}, step.y))]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trainers, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatBot, {})
		]
	});
}
//#endregion
export { About as component };
