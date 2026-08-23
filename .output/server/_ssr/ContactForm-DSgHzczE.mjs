import { a as __toESM } from "../_runtime.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { n as LOCATIONS } from "./locations-Dfz4tujt.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { E as LoaderCircle, L as CircleCheck, u as Sparkles } from "../_libs/lucide-react.mjs";
import { t as Button } from "./Footer-CeJxoXe3.mjs";
import { t as Input } from "./input-KU6fiyN1.mjs";
import { a as SelectTrigger, i as SelectItem, n as Select, o as SelectValue, r as SelectContent, s as Textarea, t as Label } from "./select-BKRE1dCC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ContactForm-DSgHzczE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";
function ContactForm() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	async function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		setStatus("loading");
		try {
			if ((await fetch(FORMSPREE_ENDPOINT, {
				method: "POST",
				headers: { Accept: "application/json" },
				body: new FormData(form)
			})).ok) {
				setStatus("success");
				form.reset();
			} else setStatus("error");
		} catch {
			setStatus("error");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative py-24 sm:py-32 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 -z-10",
				style: { background: "var(--gradient-blush)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/25 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent/30 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-2 lg:items-center",
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
						transition: { duration: .6 },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), " Book Your Free Trial"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-6 font-display text-4xl leading-tight sm:text-6xl",
								children: [
									"Your first ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "text-gradient-rose",
										children: "3 days"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									" are on us."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-md text-foreground/70",
								children: "Tell us a little about you and a member of our team will WhatsApp you within 2 hours to schedule your visit."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 space-y-3 text-sm",
								children: [
									"1 group class of your choice",
									"1 personal consult with a coach",
									"Full facility & spa access"
								].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
								}, p))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
						onSubmit,
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { duration: .6 },
						className: "rounded-[2rem] glass p-6 sm:p-8 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: "Full name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									name: "name",
									required: true,
									placeholder: "Aditi Verma",
									className: "mt-2 rounded-xl bg-white/70"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "phone",
									children: "Phone (WhatsApp)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "phone",
									name: "phone",
									required: true,
									type: "tel",
									placeholder: "+91 …",
									className: "mt-2 rounded-xl bg-white/70"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								name: "email",
								required: true,
								type: "email",
								placeholder: "you@example.com",
								className: "mt-2 rounded-xl bg-white/70"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "branch",
									children: "Preferred branch"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									name: "branch",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "mt-2 rounded-xl bg-white/70",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Choose a studio" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: LOCATIONS.map((loc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
										value: loc.name,
										children: [
											loc.name,
											" (",
											loc.area,
											")"
										]
									}, loc.slug)) })]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "goal",
									children: "Primary goal"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									name: "goal",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "mt-2 rounded-xl bg-white/70",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "What matters most?" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: [
										"Fat loss",
										"Strength & tone",
										"Hormonal / PCOS",
										"Post-natal recovery",
										"Mind & body",
										"Just try it out"
									].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: b,
										children: b
									}, b)) })]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "message",
								children: "Anything we should know? (optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "message",
								name: "message",
								rows: 3,
								className: "mt-2 rounded-xl bg-white/70"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "hidden",
								name: "_subject",
								value: "New Free Trial Lead — Her Fitness"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								disabled: status === "loading",
								size: "lg",
								className: "w-full rounded-full text-base shadow-[var(--shadow-luxe)]",
								children: status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), " Sending…"] }) : status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-2 h-4 w-4" }), " We'll be in touch!"] }) : "Claim My Free Trial"
							}),
							status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-destructive text-center",
								children: "Something went wrong. Please WhatsApp us directly."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground text-center",
								children: "By submitting, you agree to be contacted about your trial. We never spam."
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { ContactForm as t };
