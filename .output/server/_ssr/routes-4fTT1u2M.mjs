import { a as __toESM } from "../_runtime.mjs";
import { a as useScroll, o as motion, r as useTransform } from "../_libs/framer-motion.mjs";
import { a as program_dance_default, c as program_yoga_default, d as trainer_3_default, i as hero_default, l as trainer_1_default, n as LOCATIONS, o as program_hiit_default, s as program_strength_default } from "./locations-BvODIVms.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { B as ChevronDown, D as Leaf, G as Award, I as Clock, K as ArrowUpRight, a as Volume2, d as ShieldCheck, i as VolumeX, j as HeartPulse, k as Instagram, o as Users, q as ArrowRight, t as Zap, u as Sparkles, v as Play, w as MapPin, x as Pause } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Navbar, t as Button } from "./Footer-Bp3InW9P.mjs";
import { n as WhatsAppButton, t as ChatBot } from "./ChatBot-BUCCbvDj.mjs";
import { n as Testimonials, t as AnimatedStats } from "./Testimonials-DNAu4FO4.mjs";
import { t as Trainers } from "./Trainers-Bre9Gedd.mjs";
import { t as ContactForm } from "./ContactForm-BqiQUboG.mjs";
import { i as fetchSanityBlogs } from "./sanity-BF1KJa7v.mjs";
import { t as SERVICES } from "./services-BQcaVWN5.mjs";
import { t as VideoBlock } from "./VideoBlock-Cjt1dG66.mjs";
import { t as Transformations } from "./Transformations-DDZ9tqi9.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-BMxgYMZJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-4fTT1u2M.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-screen w-full overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: hero_default,
				alt: "Woman practicing yoga at Her Fitness studio in Delhi NCR",
				width: 1920,
				height: 1280,
				className: "absolute inset-0 h-full w-full object-cover",
				initial: { scale: 1.05 },
				animate: { scale: 1.15 },
				transition: {
					duration: 18,
					ease: "linear",
					repeat: Infinity,
					repeatType: "reverse"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "linear-gradient(180deg, oklch(0.20 0.02 20 / 0.35) 0%, oklch(0.20 0.02 20 / 0.55) 60%, oklch(0.20 0.02 20 / 0.85) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 mix-blend-soft-light",
				style: { background: "var(--gradient-hero)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-float" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-accent/25 blur-3xl animate-float [animation-delay:2s]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-24 lg:justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .8 },
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/90",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Delhi NCR's Women-Only Fitness Sanctuary"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl",
							children: [
								"Strong is the new",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gradient-rose",
									children: "beautiful."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-base text-white/80 sm:text-lg",
							children: "A private space designed exclusively for women — expert coaching, luxury amenities, and a sisterhood that celebrates every rep, every breath, every transformation."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									className: "rounded-full px-8 py-6 text-base shadow-[var(--shadow-luxe)]",
									children: ["Book Your Free Trial ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#programs",
								className: "inline-flex items-center gap-3 rounded-full glass-dark px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-9 w-9 place-items-center rounded-full bg-white text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4 fill-current" })
								}), "Watch Her Story"]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						delay: .4
					},
					className: "mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6",
					children: [
						["5,000+", "Women transformed"],
						["12", "Signature programs"],
						["4.9★", "Google rating"],
						["8", "Delhi NCR studios"]
					].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-dark rounded-2xl px-5 py-4 text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-2xl sm:text-3xl",
							children: n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-white/70 mt-1",
							children: l
						})]
					}, l))
				})]
			})
		]
	});
}
var VIDEO_SRC = "/videos/gym-showcase.mp4";
var FALLBACK_SRC = "https://cdn.coverr.co/videos/coverr-a-woman-doing-yoga-at-the-beach-4029/1080p.mp4";
function VideoShowcase() {
	const containerRef = (0, import_react.useRef)(null);
	const videoRef = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(true);
	const [muted, setMuted] = (0, import_react.useState)(true);
	const [errored, setErrored] = (0, import_react.useState)(false);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
	const scale = useTransform(scrollYProgress, [
		0,
		.5,
		1
	], [
		1.05,
		1,
		1.05
	]);
	const textY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
	function toggle() {
		const v = videoRef.current;
		if (!v) return;
		if (v.paused) {
			v.play();
			setPlaying(true);
		} else {
			v.pause();
			setPlaying(false);
		}
	}
	function toggleMute() {
		const v = videoRef.current;
		if (!v) return;
		v.muted = !v.muted;
		setMuted(v.muted);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: containerRef,
		className: "relative h-[110vh] min-h-[640px] w-full overflow-hidden bg-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y,
					scale
				},
				className: "absolute inset-0",
				children: [!errored ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("video", {
					ref: videoRef,
					className: "h-full w-full object-cover",
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					poster: hero_default,
					onError: () => setErrored(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: VIDEO_SRC,
						type: "video/mp4"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: FALLBACK_SRC,
						type: "video/mp4"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_default,
					alt: "Her Fitness studio",
					className: "h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "linear-gradient(180deg, oklch(0.20 0.02 20 / 0.55), oklch(0.20 0.02 20 / 0.35) 40%, oklch(0.20 0.02 20 / 0.85))" }
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/40 blur-3xl animate-float" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-accent/25 blur-3xl animate-float [animation-delay:2s]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-0 flex h-screen items-center justify-center px-4 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: { y: textY },
					className: "max-w-3xl text-center text-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { duration: .6 },
							className: "inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.3em]",
							children: "Step Inside"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
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
								duration: .8,
								delay: .1
							},
							className: "mt-6 font-display text-5xl leading-[1.05] sm:text-7xl lg:text-8xl",
							children: [
								"A sanctuary",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "text-gradient-rose",
									children: "built for her."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
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
								duration: .6,
								delay: .3
							},
							className: "mx-auto mt-8 max-w-xl text-base text-white/80 sm:text-lg",
							children: "Sunlit studios. Whisper-quiet weight floors. A recovery lounge that feels like a spa. Take the tour."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-8 right-8 z-10 flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: toggle,
					"aria-label": playing ? "Pause video" : "Play video",
					className: "grid h-11 w-11 place-items-center rounded-full glass-dark text-white hover:bg-white/20 transition",
					children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: toggleMute,
					"aria-label": muted ? "Unmute video" : "Mute video",
					className: "grid h-11 w-11 place-items-center rounded-full glass-dark text-white hover:bg-white/20 transition",
					children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-4 w-4" })
				})]
			})
		]
	});
}
var badges = [
	{
		icon: ShieldCheck,
		label: "Women-Only Sanctuary"
	},
	{
		icon: Award,
		label: "Certified Coaches"
	},
	{
		icon: HeartPulse,
		label: "Medically Screened"
	},
	{
		icon: Leaf,
		label: "Wellness-First"
	},
	{
		icon: Sparkles,
		label: "Luxury Amenities"
	},
	{
		icon: Users,
		label: "5,000+ Members"
	}
];
function TrustBadges() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border/60 bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl overflow-hidden px-4 py-6 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-foreground/70",
				children: badges.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-sm font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b.label })]
				}, b.label))
			})
		})
	});
}
/**
* Services showcase.
* Desktop: sticky-pin horizontal parallax rail calibrated so when the last service card
* appears, the sticky section finishes and smoothly transitions into the next section.
* Mobile: touch-optimized horizontal snap row with live progress indicators.
*/
function ServiceScroller() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopScroller, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileScroller, {})] });
}
function SectionHeader({ activeIndex, onDotClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-7xl px-4 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Signature Offerings"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: .1 },
						className: "mt-3 text-3xl font-display leading-tight sm:text-5xl lg:text-6xl",
						children: ["Every workout, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "text-gradient-rose",
							children: "designed for her."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-sm text-muted-foreground sm:text-base",
						children: "Coach-led, women-only programs built around female physiology and cycle awareness."
					})
				]
			}), typeof activeIndex === "number" && onDotClick && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden md:flex flex-col items-end gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-2xl font-bold text-primary",
						children: ["0", activeIndex + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs uppercase tracking-widest text-muted-foreground",
						children: ["/ 0", SERVICES.length]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-1.5 glass rounded-full px-3 py-1.5 shadow-sm",
					children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onDotClick(i),
						title: s.title,
						className: `h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "w-7 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-primary/50"}`,
						"aria-label": `Jump to ${s.title}`
					}, s.slug))
				})]
			})]
		})
	});
}
function DesktopScroller() {
	const containerRef = (0, import_react.useRef)(null);
	const cardsRef = (0, import_react.useRef)(null);
	const [maxScrollX, setMaxScrollX] = (0, import_react.useState)(0);
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const calculateOverflow = () => {
			if (cardsRef.current) {
				const totalWidth = cardsRef.current.scrollWidth;
				const viewportWidth = window.innerWidth;
				const overflow = Math.max(0, totalWidth - viewportWidth);
				setMaxScrollX(overflow);
			}
		};
		calculateOverflow();
		const observer = new ResizeObserver(() => calculateOverflow());
		if (cardsRef.current) observer.observe(cardsRef.current);
		window.addEventListener("resize", calculateOverflow);
		return () => {
			observer.disconnect();
			window.removeEventListener("resize", calculateOverflow);
		};
	}, []);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"]
	});
	const x = useTransform(scrollYProgress, [0, 1], [0, -maxScrollX]);
	const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
	const progressPercent = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	(0, import_react.useEffect)(() => {
		return scrollYProgress.on("change", (latest) => {
			const cardStep = 1 / SERVICES.length;
			const index = Math.min(SERVICES.length - 1, Math.floor(latest / cardStep));
			setActiveIndex(index);
		});
	}, [scrollYProgress]);
	const scrollToCard = (index) => {
		if (!containerRef.current || maxScrollX === 0) return;
		const targetY = containerRef.current.getBoundingClientRect().top + window.scrollY + index / (SERVICES.length - 1) * maxScrollX;
		window.scrollTo({
			top: targetY,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "programs",
		ref: containerRef,
		className: "relative hidden bg-gradient-to-b from-secondary/40 via-background to-secondary/40 md:block",
		style: { height: maxScrollX ? `${window.innerHeight + maxScrollX}px` : "350vh" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-8 lg:py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: { y: bgY },
					className: "pointer-events-none absolute inset-0 opacity-60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 left-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-10 right-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-float [animation-delay:2s]" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						activeIndex,
						onDotClick: scrollToCard
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 my-auto w-full overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						ref: cardsRef,
						style: { x },
						className: "flex items-center gap-6 pl-8 pr-16 lg:pl-24 lg:pr-32",
						children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
							service: s,
							index: i,
							isActive: i === activeIndex
						}, s.slug))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-4 border-t border-border/40 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1 w-48 overflow-hidden rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									style: { width: progressPercent },
									className: "h-full rounded-full bg-primary"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-widest text-muted-foreground font-medium",
								children: activeIndex === SERVICES.length - 1 ? "Last Service — Scroll for Coaches" : `Service ${activeIndex + 1} of ${SERVICES.length}`
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#trainers",
							className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-foreground hover:text-primary transition-colors",
							children: ["Next: Certified Coaches", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5 animate-bounce text-primary" })]
						})]
					})
				})
			]
		})
	});
}
function MobileScroller() {
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const scrollContainerRef = (0, import_react.useRef)(null);
	const handleScroll = () => {
		if (!scrollContainerRef.current) return;
		const { scrollLeft, clientWidth } = scrollContainerRef.current;
		const index = Math.round(scrollLeft / (clientWidth * .85));
		setActiveIndex(Math.min(SERVICES.length - 1, Math.max(0, index)));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "programs-mobile",
		className: "relative overflow-hidden bg-gradient-to-b from-secondary/40 via-background to-secondary/40 py-12 md:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0 opacity-60",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-10 right-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float [animation-delay:2s]" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: scrollContainerRef,
					onScroll: handleScroll,
					className: "mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4",
					style: { scrollbarWidth: "none" },
					children: [SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "snap-center shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
							service: s,
							index: i,
							isActive: i === activeIndex
						})
					}, s.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "shrink-0 pr-4",
						"aria-hidden": true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex items-center justify-center gap-1.5",
					children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"}` }, s.slug))
				})
			]
		})]
	});
}
function ServiceCard({ service, index, isActive }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 30
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
			duration: .5,
			delay: index * .04
		},
		whileHover: { y: -8 },
		className: `group relative h-[62vh] min-h-[460px] max-h-[540px] w-[82vw] max-w-[400px] shrink-0 overflow-hidden rounded-[2rem] shadow-[var(--shadow-luxe)] transition-all duration-500 ${isActive ? "ring-2 ring-primary/40 shadow-xl" : "opacity-95"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/services/$service",
			params: { service: service.slug },
			className: "block h-full w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: service.image,
					alt: service.title,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 transition-opacity duration-500",
					style: { background: "linear-gradient(180deg, oklch(0.20 0.02 20 / 0.25) 0%, transparent 40%, oklch(0.18 0.02 20 / 0.85) 75%, oklch(0.15 0.02 20 / 0.98) 100%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-5 left-5 right-5 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-full glass-dark px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white",
						children: [
							"0",
							index + 1,
							" · ",
							service.tag
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-primary/80 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider",
						children: "Coach-led"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-6 bottom-6 text-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl leading-tight sm:text-3xl lg:text-4xl group-hover:text-primary-foreground transition-colors",
							children: service.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-white/80 line-clamp-3 leading-relaxed",
							children: service.short
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center justify-between gap-3 border-t border-white/15 pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-xs uppercase tracking-widest text-white/70",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-accent" }), service.duration]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3.5 w-3.5 text-accent" }), service.intensity]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-45",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
							})]
						})
					]
				})
			]
		})
	});
}
function Branches() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "branches",
		className: "py-24 sm:py-32 bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.3em] text-primary",
						children: "Branch Locator"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-4xl sm:text-5xl",
						children: ["Eight studios. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "text-gradient-rose",
							children: "One sisterhood."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Across West, North-West and South-West Delhi — always women-only."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: LOCATIONS.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
						delay: i * .05
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/locations/$location",
						params: { location: b.slug },
						className: "group block rounded-2xl glass p-6 hover:-translate-y-1 transition-all",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: b.area
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-xl",
								children: b.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground line-clamp-2",
								children: b.landmark
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium text-foreground/80",
									children: b.phone
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
								})]
							})
						]
					})
				}, b.slug))
			})]
		})
	});
}
var pics = [
	program_strength_default,
	program_yoga_default,
	program_dance_default,
	program_hiit_default,
	trainer_1_default,
	trainer_3_default
];
function InstagramFeed() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 sm:py-32 bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center text-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.3em] text-primary",
						children: "The Feed"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-4xl sm:text-5xl",
						children: ["@", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "text-gradient-rose",
							children: "herfitness.in"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://instagram.com",
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }), " Follow for daily inspiration"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",
				children: pics.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://instagram.com",
					target: "_blank",
					rel: "noreferrer",
					className: "group relative aspect-square overflow-hidden rounded-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p,
						alt: "Her Fitness Instagram post",
						loading: "lazy",
						className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 bg-primary/0 group-hover:bg-primary/40 grid place-items-center transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition" })
					})]
				}, i))
			})]
		})
	});
}
var faqs = [
	{
		q: "Is Her Fitness a women-only gym?",
		a: "Yes. Her Fitness is an exclusive, private sanctuary designed for women members. To provide world-class results, our team includes certified female and male fitness experts, personal trainers, and nutrition specialists."
	},
	{
		q: "What if I've never worked out before?",
		a: "Perfect — most of our members started exactly there. Every program has a beginner track, and your first session includes a private consult with a coach."
	},
	{
		q: "Do you offer trial classes?",
		a: "Yes. You get a complimentary 3-day trial including one group class, one 1:1 consult and full facility access."
	},
	{
		q: "Can I transfer between branches?",
		a: "Absolutely. Members can train at any of our 7 women-only Delhi studios — Punjabi Bagh, Rajouri Garden, Paschim Vihar, Janakpuri, Kirti Nagar, Prashant Vihar or Dwarka."
	},
	{
		q: "Do you have programs for PCOS, pre/post-natal or menopause?",
		a: "Yes. These are our specialities. Our coaches are certified in women's hormonal health and pre/post-natal training."
	},
	{
		q: "What are your hours?",
		a: "All studios are open 6:00 am – 10:00 pm, seven days a week. Personal training slots run from 5:30 am."
	}
];
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.3em] text-primary",
					children: "Questions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 text-4xl sm:text-5xl",
					children: [
						"Everything you're ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "text-gradient-rose",
							children: "wondering"
						}),
						"."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "mt-12 space-y-3",
				children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
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
	});
}
function BlogPreview() {
	const [posts, setPosts] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		async function load() {
			const { posts: loaded } = await fetchSanityBlogs();
			setPosts(loaded.slice(0, 3));
		}
		load();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "journal",
		className: "py-24 sm:py-32 bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.3em] text-primary",
					children: "The Journal"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 text-4xl sm:text-5xl",
					children: ["Stories that ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "text-gradient-rose",
						children: "move us."
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blogs",
					className: "text-sm font-medium hover:text-primary flex items-center gap-1 transition-colors",
					children: ["Read all articles ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-8 md:grid-cols-3",
				children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blogs/$blogId",
					params: { blogId: p.slug },
					className: "group rounded-3xl bg-card overflow-hidden shadow-[var(--shadow-glass)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/3] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.img,
							alt: p.title,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-semibold",
										children: p.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.readTime })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-xl leading-snug group-hover:text-primary transition-colors",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed",
								children: p.excerpt
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-6 pb-6 pt-0 flex items-center justify-between text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["By ", p.author.name] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
						})]
					})]
				}, p.id))
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoShowcase, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBadges, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedStats, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceScroller, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trainers, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Transformations, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoBlock, {
					src: "/videos/transformations-showcase.mp4",
					eyebrow: "Real transformations",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Stronger, calmer, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "text-gradient-rose",
						children: "happier."
					})] }),
					copy: "Six months at Her Fitness looks like this. Real members, real results.",
					height: "md"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Branches, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramFeed, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogPreview, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatBot, {})
		]
	});
}
//#endregion
export { Index as component };
