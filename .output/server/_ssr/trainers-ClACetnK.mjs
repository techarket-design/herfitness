import { o as motion } from "../_libs/framer-motion.mjs";
import { t as IMAGES } from "./locations-Dfz4tujt.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as Award, k as Instagram, q as ArrowRight, u as Sparkles, w as MapPin } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Navbar, t as Button } from "./Footer-CeJxoXe3.mjs";
import { n as WhatsAppButton, t as ChatBot } from "./ChatBot-BUCCbvDj.mjs";
import { t as ContactForm } from "./ContactForm-DSgHzczE.mjs";
import { t as VideoBlock } from "./VideoBlock-BLlWBTII.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trainers-ClACetnK.js
var import_jsx_runtime = require_jsx_runtime();
var TRAINERS = [
	{
		slug: "Simon-Arora",
		name: "Simon Arora",
		role: "Zumba Trainer",
		specialties: ["Zumbda Dance"],
		certifications: ["Zumba", "Nutritionist"],
		years: 11,
		bio: "Simon leads our Dance Floor with her Zumba Training Sessions.",
		image: IMAGES.trainers.trainer1,
		instagram: "https://www.instagram.com/herfitnessindia",
		branches: [
			"Punjabi Bagh",
			"Rajouri Garden",
			"Kirti Nagar"
		]
	},
	{
		slug: "basant-thapa",
		name: "Basant Thapa",
		role: "Fitness Trainer",
		specialties: ["Weight Training"],
		certifications: ["Fitness Expert"],
		years: 9,
		bio: "Basant dedicatedly guides and alligns all our clients with their fitness goals",
		image: IMAGES.trainers.trainer3,
		instagram: "https://www.instagram.com/herfitnessindia",
		branches: [
			"Paschim Vihar",
			"Janakpuri",
			"Dwarka"
		]
	},
	{
		slug: "payal-nayal",
		name: "Payal Nayal",
		role: "Dance & Zumba Specialist",
		specialties: [
			"Zumba",
			"Bollywood cardio",
			"Afro-fit"
		],
		certifications: ["Zumba® ZIN", "ACE Group Fitness"],
		years: 7,
		bio: "Payal turned our Zumba floor into the most-booked class in Delhi. Her Bollywood mash-ups have a waitlist.",
		image: IMAGES.trainers.trainer2,
		instagram: "https://www.instagram.com/herfitnessindia",
		branches: [
			"Prashant Vihar",
			"Rajouri Garden",
			"Punjabi Bagh"
		]
	},
	{
		slug: "ripu-daman-kaur",
		name: "Ripu Daman kaur",
		role: "Zumba Trainer",
		specialties: [
			"Zumba Trainer",
			"Yoga-Coach",
			"Pilates Trainer"
		],
		certifications: ["ISKA Coach L2", "Women's Self-Defense Instructor"],
		years: 8,
		bio: "A national-level kickboxer, Meher now trains the next generation of women fighters from first jab to full combos.",
		image: IMAGES.trainers.trainer4,
		instagram: "https://www.instagram.com/herfitnessindia",
		branches: ["Kirti Nagar", "Dwarka"]
	},
	{
		slug: "Balli-bhamrah",
		name: "Balli bhamrah",
		role: "Fitness Trainer",
		specialties: ["Fitness Trainer"],
		certifications: [""],
		years: 13,
		bio: "Balli has built personalised nutrition plans for 2,000+ Indian women. He'll never take your dal-chawal away.",
		image: IMAGES.trainers.trainer5,
		branches: ["All studios (virtual + in-person)"]
	},
	{
		slug: "Sangi-dhir",
		name: "Sangi Dhir",
		role: "Bollywood Instructor",
		specialties: [
			"HIIT",
			"Kettlebell",
			"Bollywood Training"
		],
		certifications: [""],
		years: 6,
		bio: "Sangi's 30-minute boot camps have the highest retention rate in the studio. Small group, huge output.",
		image: IMAGES.trainers.trainer6,
		instagram: "https://www.instagram.com/herfitnessindia",
		branches: ["Paschim Vihar", "Prashant Vihar"]
	},
	{
		slug: "monti-bassi",
		name: "Monti Bassi",
		role: "Fitness Trainer",
		specialties: ["Fitness Trainer"],
		certifications: ["BASI Comprehensive", "Polestar Pilates"],
		years: 10,
		bio: "",
		image: IMAGES.trainers.trainer7,
		branches: ["Prashant Vihar", "Dwarka"]
	},
	{
		slug: "deepak-deshwal",
		name: "Deepak Deshwal",
		role: "Fitness Trainer",
		specialties: [
			"1:1 coaching",
			"Weight loss",
			"Beginner onboarding"
		],
		certifications: ["ACSM-CPT", "PN L1"],
		years: 8,
		bio: "",
		image: IMAGES.trainers.trainer8,
		instagram: "https://www.instagram.com/herfitnessindia",
		branches: ["Janakpuri", "Rajouri Garden"]
	},
	{
		slug: "tarun-nath-yogi",
		name: "Tarun Nath Yogi",
		role: "Fitness Trainer",
		specialties: [
			"1:1 coaching",
			"Weight loss",
			"Beginner onboarding"
		],
		certifications: ["ACSM-CPT", "PN L1"],
		years: 8,
		bio: "",
		image: IMAGES.trainers.trainer9,
		instagram: "https://www.instagram.com/herfitnessindia",
		branches: ["Janakpuri", "Rajouri Garden"]
	}
];
function TrainersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[80vh] w-full overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: IMAGES.hero,
						alt: "Her Fitness female trainers",
						className: "absolute inset-0 h-full w-full object-cover",
						initial: { scale: 1.15 },
						animate: { scale: 1.02 },
						transition: { duration: 2 }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: "linear-gradient(180deg, oklch(0.20 0.02 20 / 0.4), oklch(0.20 0.02 20 / 0.9))" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/40 blur-3xl animate-float" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-float [animation-delay:2s]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6",
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
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Certified · All-female team"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-6 font-display text-5xl sm:text-7xl leading-[1.05]",
									children: ["Coached by women. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "text-gradient-rose",
										children: "For women."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-xl text-white/85 text-lg",
									children: "Every trainer at Her Fitness is a nationally certified woman who specialises in the way female bodies actually train, recover and thrive."
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoBlock, {
				src: "/videos/trainers-showcase.mp4",
				eyebrow: "Meet the team",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["The coaches behind ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
					className: "text-gradient-rose",
					children: "every rep."
				})] }),
				copy: "A behind-the-scenes look at our head coaches on the studio floor.",
				height: "md"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 sm:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
						children: TRAINERS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
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
								amount: .2
							},
							transition: {
								duration: .6,
								delay: i % 3 * .08
							},
							whileHover: { y: -6 },
							className: "group relative overflow-hidden rounded-[2rem] bg-card shadow-[var(--shadow-luxe)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[3/4] overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: t.image,
										alt: t.name,
										loading: "lazy",
										className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-0",
										style: { background: "linear-gradient(180deg, transparent 40%, oklch(0.20 0.02 20 / 0.9))" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute inset-x-5 bottom-5 text-white",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "rounded-full glass-dark px-3 py-1 text-[10px] uppercase tracking-[0.25em]",
												children: [t.years, "+ yrs · Certified"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-3 font-display text-2xl",
												children: t.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-white/80",
												children: t.role
											})
										]
									}),
									t.instagram && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: t.instagram,
										"aria-label": `${t.name} Instagram`,
										className: "absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full glass-dark text-white hover:bg-white/20 transition",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: t.bio
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] uppercase tracking-[0.25em] text-primary",
											children: "Specialties"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 flex flex-wrap gap-2",
											children: t.specialties.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
												children: s
											}, s))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex items-start gap-2 text-xs text-foreground/70",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.certifications.join(" · ") })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-start gap-2 text-xs text-foreground/70",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.branches.join(" · ") })]
									})
								]
							})]
						}, t.slug))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "contact",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								className: "rounded-full px-8 py-6 shadow-[var(--shadow-luxe)]",
								children: ["Book a session with one of our coaches ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
							})
						})
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
export { TrainersPage as component };
