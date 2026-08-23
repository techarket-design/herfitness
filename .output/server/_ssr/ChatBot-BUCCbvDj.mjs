import { a as __toESM } from "../_runtime.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { E as LoaderCircle, L as CircleCheck, S as MessageCircle, p as Send, r as X, u as Sparkles } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ChatBot-BUCCbvDj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WHATSAPP_NUMBER = "919810000000";
var MESSAGE = "Hi Her Fitness! I'd love to take my first step towards fitness.";
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Chat with us on WhatsApp",
		className: "fixed bottom-4 right-4 z-50 group sm:bottom-6 sm:right-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-luxe)] transition-transform group-hover:scale-110",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				className: "h-6 w-6 sm:h-7 sm:w-7 fill-current",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.14 1.6 5.94L0 24l6.34-1.66a11.87 11.87 0 0 0 5.71 1.46h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.16-3.42-8.44ZM12.06 21.3h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.76.99 1-3.66-.22-.37a9.4 9.4 0 0 1-1.44-5.01c0-5.19 4.23-9.42 9.43-9.42a9.36 9.36 0 0 1 6.66 2.76 9.36 9.36 0 0 1 2.76 6.67c0 5.2-4.23 9.42-9.42 9.42Zm5.42-7.05c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" })
			})
		})]
	});
}
var FORMSPREE_ENDPOINT = "https://formspree.io/f/mnpargop";
var GOALS = [
	"Fat loss",
	"Strength & tone",
	"Hormonal / PCOS",
	"Post-natal recovery",
	"Just try it out"
];
var BRANCHES = [
	"Punjabi Bagh",
	"Rajouri Garden",
	"Paschim Vihar",
	"Janakpuri",
	"Kirti Nagar",
	"Prashant Vihar",
	"Dwarka"
];
function ChatBot() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [step, setStep] = (0, import_react.useState)(0);
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [lead, setLead] = (0, import_react.useState)({
		name: "",
		phone: "",
		goal: "",
		branch: ""
	});
	const scrollRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (open) scrollRef.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [
		step,
		status,
		open
	]);
	function reset() {
		setStep(0);
		setStatus("idle");
		setLead({
			name: "",
			phone: "",
			goal: "",
			branch: ""
		});
	}
	async function submit(final) {
		setStatus("sending");
		try {
			const fd = new FormData();
			fd.append("name", final.name);
			fd.append("phone", final.phone);
			fd.append("goal", final.goal);
			fd.append("branch", final.branch);
			fd.append("source", "Website chatbot");
			fd.append("_subject", "New Chatbot Lead — Her Fitness");
			const res = await fetch(FORMSPREE_ENDPOINT, {
				method: "POST",
				headers: { Accept: "application/json" },
				body: fd
			});
			setStatus(res.ok ? "sent" : "error");
		} catch {
			setStatus("error");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: () => setOpen((o) => !o),
		"aria-label": open ? "Close chat" : "Chat with us",
		className: "fixed bottom-4 right-20 z-50 group sm:bottom-6 sm:right-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute inset-0 -z-10 rounded-full bg-primary opacity-60 ${open ? "" : "animate-ping"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-luxe)] transition-transform group-hover:scale-110",
			children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5 sm:h-6 sm:w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5 sm:h-6 sm:w-6" })
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 30,
			scale: .95
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: 30,
			scale: .95
		},
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 26
		},
		className: "fixed inset-x-3 bottom-20 z-50 max-h-[82vh] sm:bottom-24 sm:left-auto sm:right-6 sm:w-96 rounded-3xl bg-card border border-border shadow-[var(--shadow-luxe)] flex flex-col overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-primary/80 px-4 py-3.5 text-primary-foreground flex items-center justify-between shrink-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 -right-8 h-32 w-32 rounded-full bg-white/20 blur-2xl pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-9 w-9 place-items-center rounded-full bg-white/90 p-1 shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/her-fitness-logo.png",
								alt: "Her Fitness",
								className: "h-5 w-auto object-contain"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-base font-semibold leading-tight",
							children: "Her Fitness Concierge"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] opacity-90 flex items-center gap-1.5 mt-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-green-300 animate-pulse" }), " Online · Replies instantly"]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(false),
						"aria-label": "Close chat",
						className: "relative grid h-8 w-8 place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: scrollRef,
				className: "flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-3 bg-secondary/20 max-h-[52vh] sm:max-h-[380px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bubble, {
						from: "bot",
						delay: 0,
						children: "Hi love! 🌸 I'm your Her Fitness concierge. Book a free 3-day trial in 3 quick steps?"
					}),
					step >= 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Bubble, {
						from: "bot",
						delay: .2,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Step 1 of 3" }), " — what should we call you?"]
					}), lead.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bubble, {
						from: "user",
						children: lead.name
					})] }),
					step >= 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Bubble, {
						from: "bot",
						delay: .15,
						children: [
							"Lovely to meet you, ",
							lead.name.split(" ")[0],
							"! ✨ ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Step 2 of 3" }),
							" — your WhatsApp number, so we can confirm your slot?"
						]
					}), lead.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bubble, {
						from: "user",
						children: lead.phone
					})] }),
					step >= 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Bubble, {
						from: "bot",
						delay: .15,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Step 3 of 3" }), " — pick your primary goal and closest studio 👇"]
					}), lead.goal && lead.branch && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Bubble, {
						from: "user",
						children: [
							lead.goal,
							" · ",
							lead.branch
						]
					})] }),
					status === "sending" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Bubble, {
						from: "bot",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "inline h-4 w-4 animate-spin mr-2" }), " Booking your trial slot…"]
					}),
					status === "sent" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Bubble, {
						from: "bot",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "inline h-4 w-4 text-primary mr-1" }), "You're all set! Our studio team will WhatsApp you within 2 hours 💖"]
					}),
					status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bubble, {
						from: "bot",
						children: "Something went wrong. Please click the green WhatsApp button to reach us directly!"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border bg-card p-3 shrink-0",
				children: status === "sent" || status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: reset,
					className: "w-full rounded-full bg-primary py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition shadow-sm",
					children: "Start new inquiry"
				}) : status === "sending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center text-xs text-muted-foreground py-2 font-medium",
					children: "Submitting your request…"
				}) : step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					placeholder: "Your name (e.g. Aditi)",
					onSubmit: (v) => {
						setLead((l) => ({
							...l,
							name: v
						}));
						setStep(1);
					}
				}, "name") : step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					type: "tel",
					placeholder: "WhatsApp number (+91…)",
					onSubmit: (v) => {
						setLead((l) => ({
							...l,
							phone: v
						}));
						setStep(2);
					}
				}, "phone") : step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-wider font-semibold text-muted-foreground mb-1.5",
							children: "Your Goal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: GOALS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setLead((l) => ({
									...l,
									goal: g
								})),
								className: `rounded-full border px-3 py-1 text-xs font-medium transition-all ${lead.goal === g ? "bg-primary text-primary-foreground border-primary shadow-sm" : "border-border bg-background hover:border-primary/50 text-foreground"}`,
								children: g
							}, g))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-wider font-semibold text-muted-foreground mb-1.5",
							children: "Preferred Studio"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1",
							children: BRANCHES.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setLead((l) => ({
									...l,
									branch: b
								})),
								className: `rounded-full border px-3 py-1 text-xs font-medium transition-all ${lead.branch === b ? "bg-primary text-primary-foreground border-primary shadow-sm" : "border-border bg-background hover:border-primary/50 text-foreground"}`,
								children: b
							}, b))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							disabled: !lead.goal || !lead.branch,
							onClick: () => {
								setStep(3);
								submit(lead);
							},
							className: "w-full rounded-full bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-md flex items-center justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), " Book My Free Trial"]
						})
					]
				}) : null
			})
		]
	}) })] });
}
function Bubble({ from, children, delay = 0 }) {
	const isBot = from === "bot";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 8,
			scale: .96
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		transition: {
			delay,
			duration: .25
		},
		className: `flex ${isBot ? "justify-start" : "justify-end"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${isBot ? "bg-card text-foreground border border-border/80 shadow-xs rounded-tl-xs" : "bg-primary text-primary-foreground rounded-tr-xs shadow-xs"}`,
			children
		})
	});
}
function TextField({ placeholder, onSubmit, type = "text" }) {
	const [v, setV] = (0, import_react.useState)("");
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		ref.current?.focus();
	}, []);
	function go() {
		if (v.trim().length < 2) return;
		onSubmit(v.trim());
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (e) => {
			e.preventDefault();
			go();
		},
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			ref,
			type,
			value: v,
			onChange: (e) => setV(e.target.value),
			placeholder,
			className: "flex-1 rounded-full border border-border bg-background px-4 py-2 text-base sm:text-sm text-foreground focus:outline-none focus:border-primary shadow-xs"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "submit",
			disabled: v.trim().length < 2,
			className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground disabled:opacity-40 hover:bg-primary/90 transition",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
		})]
	});
}
//#endregion
export { WhatsAppButton as n, ChatBot as t };
