import { o as motion } from "../_libs/framer-motion.mjs";
import { f as transform_1_default, m as transform_3_default, p as transform_2_default } from "./locations-Dfz4tujt.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Quote } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Transformations-CCDnjOYW.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		img: transform_1_default,
		name: "Neha, 34",
		stat: "−14 kg in 6 months",
		quote: "I finally love the mirror. And the sisterhood here is everything."
	},
	{
		img: transform_2_default,
		name: "Aisha, 28",
		stat: "PCOS symptoms reversed",
		quote: "My cycle normalised in 4 months. Their coaches actually understand hormones."
	},
	{
		img: transform_3_default,
		name: "Kavya, 41",
		stat: "Off blood-pressure meds",
		quote: "Post-partum, I felt invisible. Her Fitness gave me back my body — and my confidence."
	}
];
function Transformations() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "transformations",
		className: "relative py-24 sm:py-32 bg-secondary/40 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-32 right-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.3em] text-primary",
						children: "Transformations"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-4xl sm:text-5xl",
						children: ["Real women. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "text-gradient-rose",
							children: "Real results."
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-muted-foreground",
					children: "No filters. No airbrushing. Just the honest, joyful outcomes of showing up for yourself."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-8 md:grid-cols-3",
				children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
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
						delay: i * .1
					},
					className: "rounded-[2rem] bg-card p-4 shadow-[var(--shadow-luxe)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-[1.5rem]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: it.img,
							alt: `${it.name} transformation`,
							width: 1e3,
							height: 1e3,
							loading: "lazy",
							className: "aspect-square w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl",
								children: it.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
								children: it.stat
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-3 text-sm text-foreground/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: it.quote })]
						})]
					})]
				}, it.name))
			})]
		})]
	});
}
//#endregion
export { Transformations as t };
