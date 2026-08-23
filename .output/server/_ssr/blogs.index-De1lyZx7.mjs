import { a as __toESM } from "../_runtime.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { i as hero_default } from "./locations-Dfz4tujt.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { H as Calendar, I as Clock, K as ArrowUpRight, T as Mail, W as BookOpen, b as PenLine, m as Search, u as Sparkles } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Navbar, t as Button } from "./Footer-CeJxoXe3.mjs";
import { n as WhatsAppButton, t as ChatBot } from "./ChatBot-BUCCbvDj.mjs";
import { t as Input } from "./input-KU6fiyN1.mjs";
import { i as fetchSanityBlogs, t as BLOG_CATEGORIES } from "./sanity-jc4K1OUn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blogs.index-De1lyZx7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BlogsIndexPage() {
	const [posts, setPosts] = (0, import_react.useState)([]);
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("All");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [dataSource, setDataSource] = (0, import_react.useState)("fallback");
	(0, import_react.useEffect)(() => {
		async function load() {
			setLoading(true);
			const { posts: loadedPosts, source } = await fetchSanityBlogs();
			setPosts(loadedPosts);
			setDataSource(source);
			setLoading(false);
		}
		load();
	}, []);
	const featuredPost = posts.find((p) => p.featured) || posts[0];
	const filteredPosts = posts.filter((post) => {
		const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
		const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || post.category.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesCategory && matchesSearch;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[60vh] w-full overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_default,
						alt: "Her Fitness Journal background",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: "linear-gradient(180deg, oklch(0.20 0.02 20 / 0.5) 0%, oklch(0.20 0.02 20 / 0.88) 100%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20",
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), " The Her Fitness Journal"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/blogs/manage",
										className: "inline-flex items-center gap-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md px-3.5 py-1 text-xs uppercase tracking-wider text-white transition-all border border-white/20",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "h-3.5 w-3.5 text-primary" }), " Sanity Studio"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-6 font-display text-5xl sm:text-7xl leading-[1.05]",
									children: ["Stories that ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "text-gradient-rose",
										children: "move & empower."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-xl text-white/85 text-lg",
									children: "Evidence-based fitness guides, cycle syncing secrets, nutrition blueprints, and inspiring stories curated by certified female coaches."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex max-w-md items-center rounded-2xl glass-dark p-2 border border-white/20",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "ml-3 h-5 w-5 text-white/60 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: searchQuery,
										onChange: (e) => setSearchQuery(e.target.value),
										placeholder: "Search articles on PCOS, protein, workouts...",
										className: "w-full bg-transparent px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none"
									})]
								})
							]
						})
					})
				]
			}),
			!searchQuery && selectedCategory === "All" && featuredPost && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-12 bg-secondary/20 border-b border-border/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.25em] text-primary font-medium",
								children: "Featured Article"
							})]
						}), dataSource === "sanity" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-widest text-muted-foreground bg-primary/10 px-2.5 py-1 rounded-full font-semibold",
							children: "Powered by Sanity CMS"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blogs/$blogId",
						params: { blogId: featuredPost.slug },
						className: "group relative grid gap-8 lg:grid-cols-12 overflow-hidden rounded-[2.5rem] bg-card p-6 sm:p-8 shadow-[var(--shadow-luxe)] hover:-translate-y-1 transition-all duration-500",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-7 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto rounded-2xl overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: featuredPost.img,
								alt: featuredPost.title,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5 flex flex-col justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-primary/10 px-3 py-1 text-primary font-semibold",
											children: featuredPost.category
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }),
												" ",
												featuredPost.readTime
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-3xl sm:text-4xl group-hover:text-primary transition-colors leading-tight",
									children: featuredPost.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-muted-foreground line-clamp-3 text-sm leading-relaxed",
									children: featuredPost.excerpt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center justify-between border-t border-border/50 pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [featuredPost.author.avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: featuredPost.author.avatar,
											alt: featuredPost.author.name,
											className: "h-10 w-10 rounded-full object-cover"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-10 w-10 rounded-full bg-primary/20 grid place-items-center text-primary font-bold",
											children: featuredPost.author.name.charAt(0)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold",
											children: featuredPost.author.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground",
											children: featuredPost.date
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground group-hover:rotate-45 transition-transform",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5" })
									})]
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 sm:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between flex-wrap gap-4 border-b border-border/60 pb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full",
							children: BLOG_CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSelectedCategory(cat),
								className: `rounded-full px-5 py-2 text-xs uppercase tracking-widest transition-all whitespace-nowrap ${selectedCategory === cat ? "bg-primary text-primary-foreground shadow-md font-semibold" : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"}`,
								children: cat
							}, cat))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: [
								"Showing ",
								filteredPosts.length,
								" ",
								filteredPosts.length === 1 ? "article" : "articles"
							]
						})]
					}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "my-20 text-center text-muted-foreground text-sm",
						children: "Loading latest articles..."
					}) : filteredPosts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-20 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl",
								children: "No articles found"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Try searching for a different keyword or select another category."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => {
									setSelectedCategory("All");
									setSearchQuery("");
								},
								className: "mt-6 rounded-full",
								children: "Reset Filters"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
						children: filteredPosts.map((post, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
								delay: i * .06
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/blogs/$blogId",
								params: { blogId: post.slug },
								className: "group flex flex-col h-full overflow-hidden rounded-[2rem] bg-card shadow-[var(--shadow-glass)] border border-border/30 hover:-translate-y-1.5 transition-all duration-500",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "aspect-[4/3] overflow-hidden relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: post.img,
										alt: post.title,
										loading: "lazy",
										className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute top-4 left-4 rounded-full glass-dark px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white",
										children: post.category
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 flex flex-col flex-1 justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3 text-xs text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-1",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }),
														" ",
														post.readTime
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-1",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5" }),
														" ",
														post.date
													]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 font-display text-xl leading-snug group-hover:text-primary transition-colors",
											children: post.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted-foreground line-clamp-3 leading-relaxed",
											children: post.excerpt
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex items-center justify-between border-t border-border/40 pt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2.5",
											children: [post.author.avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: post.author.avatar,
												alt: post.author.name,
												className: "h-7 w-7 rounded-full object-cover"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-7 w-7 rounded-full bg-primary/20 grid place-items-center text-[10px] font-bold text-primary",
												children: post.author.name.charAt(0)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-medium text-foreground/80",
												children: post.author.name
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
										})]
									})]
								})]
							})
						}, post.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 bg-secondary/40 border-t border-border/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl px-4 text-center sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5" }), " Her Fitness Digest"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-display text-4xl sm:text-5xl",
							children: ["Wellness tips delivered to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-gradient-rose",
								children: "your inbox."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground max-w-md mx-auto text-sm",
							children: "Join over 12,000 women receiving weekly evidence-based workouts, cycle syncing nutrition, and motivational reads."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								alert("Thank you for subscribing to Her Fitness Digest!");
							},
							className: "mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								required: true,
								placeholder: "Enter your email address",
								className: "rounded-full bg-white px-5 py-6 text-sm"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								size: "lg",
								className: "rounded-full px-8 shrink-0 shadow-md",
								children: "Subscribe Free"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatBot, {})
		]
	});
}
//#endregion
export { BlogsIndexPage as component };
