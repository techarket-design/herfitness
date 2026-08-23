import { a as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { E as LoaderCircle, F as ExternalLink, J as ArrowLeft, L as CircleCheck, O as Key, P as Eye, R as CircleAlert, W as BookOpen, _ as Plus, b as PenLine, h as RefreshCw, s as Trash2, u as Sparkles } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Navbar, t as Button } from "./Footer-Bp3InW9P.mjs";
import { t as Input } from "./input-0XYnSSby.mjs";
import { a as SelectTrigger, i as SelectItem, n as Select, o as SelectValue, r as SelectContent, s as Textarea, t as Label } from "./select-11XNOc0O.mjs";
import { a as getSanityConfig, i as fetchSanityBlogs, n as deleteSanityBlog, o as publishSanityBlog, s as saveSanityConfig, t as BLOG_CATEGORIES } from "./sanity-BF1KJa7v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blogs.manage-emu8yohj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BlogManagementPage() {
	const [sanityConfig, setSanityConfig] = (0, import_react.useState)(getSanityConfig());
	const [showConfigModal, setShowConfigModal] = (0, import_react.useState)(false);
	const [projectIdInput, setProjectIdInput] = (0, import_react.useState)(sanityConfig.projectId);
	const [datasetInput, setDatasetInput] = (0, import_react.useState)(sanityConfig.dataset);
	const [tokenInput, setTokenInput] = (0, import_react.useState)(sanityConfig.token);
	const [posts, setPosts] = (0, import_react.useState)([]);
	const [dataDist, setDataDist] = (0, import_react.useState)("fallback");
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [feedback, setFeedback] = (0, import_react.useState)(null);
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const [title, setTitle] = (0, import_react.useState)("");
	const [slug, setSlug] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("Nutrition");
	const [excerpt, setExcerpt] = (0, import_react.useState)("");
	const [readTime, setReadTime] = (0, import_react.useState)("5 min read");
	const [date, setDate] = (0, import_react.useState)((/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	}));
	const [featured, setFeatured] = (0, import_react.useState)(false);
	const [authorName, setAuthorName] = (0, import_react.useState)("Dr. Priya Sharma");
	const [authorRole, setAuthorRole] = (0, import_react.useState)("Lead Clinical Nutritionist");
	const [imgUrl, setImgUrl] = (0, import_react.useState)("https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&auto=format&fit=crop");
	const [keyTakeaways, setKeyTakeaways] = (0, import_react.useState)(["Combine lentils and whole grains for complete protein.", "Prioritize daily bioavailable protein sources for metabolic recovery."]);
	const [takeawayInput, setTakeawayInput] = (0, import_react.useState)("");
	const [intro, setIntro] = (0, import_react.useState)("");
	const [sections, setSections] = (0, import_react.useState)([{
		heading: "Key Health Benefits",
		body: ["Proper nutrition supports metabolic longevity and hormone balance."]
	}]);
	const [conclusion, setConclusion] = (0, import_react.useState)("");
	const loadBlogs = async () => {
		setLoading(true);
		const { posts: loadedPosts, source } = await fetchSanityBlogs();
		setPosts(loadedPosts);
		setDataDist(source);
		setLoading(false);
	};
	(0, import_react.useEffect)(() => {
		loadBlogs();
	}, [sanityConfig.projectId]);
	const handleSaveCredentials = (e) => {
		e.preventDefault();
		saveSanityConfig(projectIdInput, datasetInput, tokenInput);
		const updated = getSanityConfig();
		setSanityConfig(updated);
		setShowConfigModal(false);
		setFeedback({
			type: "success",
			msg: "Sanity credentials saved successfully!"
		});
	};
	const handleTitleChange = (val) => {
		setTitle(val);
		if (!editingId) {
			const generatedSlug = val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
			setSlug(generatedSlug);
		}
	};
	const handleAddTakeaway = () => {
		if (takeawayInput.trim()) {
			setKeyTakeaways([...keyTakeaways, takeawayInput.trim()]);
			setTakeawayInput("");
		}
	};
	const handleRemoveTakeaway = (idx) => {
		setKeyTakeaways(keyTakeaways.filter((_, i) => i !== idx));
	};
	const handleAddSection = () => {
		setSections([...sections, {
			heading: "New Section",
			body: ["Enter paragraph content..."]
		}]);
	};
	const handleUpdateSectionHeading = (index, val) => {
		const updated = [...sections];
		updated[index].heading = val;
		setSections(updated);
	};
	const handleUpdateSectionBody = (index, bodyText) => {
		const updated = [...sections];
		updated[index].body = bodyText.split("\n").filter((p) => p.trim().length > 0);
		setSections(updated);
	};
	const handleRemoveSection = (index) => {
		setSections(sections.filter((_, i) => i !== index));
	};
	const resetForm = () => {
		setEditingId(null);
		setTitle("");
		setSlug("");
		setCategory("Nutrition");
		setExcerpt("");
		setReadTime("5 min read");
		setDate((/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric"
		}));
		setFeatured(false);
		setImgUrl("https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&auto=format&fit=crop");
		setKeyTakeaways(["Combine protein sources for optimal synthesis."]);
		setIntro("");
		setSections([{
			heading: "Section 1",
			body: ["Body text..."]
		}]);
		setConclusion("");
	};
	const handleEditPost = (post) => {
		setEditingId(post.id);
		setTitle(post.title);
		setSlug(post.slug);
		setCategory(post.category);
		setExcerpt(post.excerpt);
		setReadTime(post.readTime);
		setDate(post.date);
		setFeatured(Boolean(post.featured));
		setAuthorName(post.author.name);
		setAuthorRole(post.author.role);
		setImgUrl(post.img);
		setKeyTakeaways(post.keyTakeaways || []);
		setIntro(post.content?.intro || "");
		setSections(post.content?.sections || []);
		setConclusion(post.content?.conclusion || "");
		window.scrollTo({
			top: 300,
			behavior: "smooth"
		});
	};
	const handlePublish = async (e) => {
		e.preventDefault();
		if (!title || !slug || !excerpt) {
			setFeedback({
				type: "error",
				msg: "Please fill in all required fields (Title, Slug, Excerpt)."
			});
			return;
		}
		setSubmitting(true);
		setFeedback(null);
		try {
			await publishSanityBlog({
				id: editingId || void 0,
				title,
				slug,
				excerpt,
				category,
				readTime,
				date,
				featured,
				authorName,
				authorRole,
				imgUrl,
				keyTakeaways,
				intro,
				sections,
				conclusion
			});
			setFeedback({
				type: "success",
				msg: editingId ? "Article updated successfully in Sanity!" : "Article published to Sanity successfully!"
			});
			resetForm();
			await loadBlogs();
		} catch (err) {
			setFeedback({
				type: "error",
				msg: err.message || "Failed to publish to Sanity. Check your Project ID & API token."
			});
		} finally {
			setSubmitting(false);
		}
	};
	const handleDelete = async (docId) => {
		if (!confirm("Are you sure you want to delete this article from Sanity?")) return;
		try {
			await deleteSanityBlog(docId);
			setFeedback({
				type: "success",
				msg: "Article deleted from Sanity."
			});
			await loadBlogs();
		} catch (err) {
			setFeedback({
				type: "error",
				msg: err.message || "Failed to delete article."
			});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "pt-28 pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border/60 pb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/blogs",
								className: "inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to Journal"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-4xl sm:text-5xl",
								children: ["Sanity Blog ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "text-gradient-rose",
									children: "Studio"
								})]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									onClick: () => setShowConfigModal(true),
									className: "rounded-full gap-2 text-xs border-primary/40 hover:bg-primary/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, { className: "h-4 w-4 text-primary" }), " Sanity API Setup"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: loadBlogs,
									variant: "ghost",
									size: "icon",
									className: "rounded-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-4 w-4 ${loading ? "animate-spin" : ""}` })
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: sanityConfig.isConfigured ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-2xl glass p-4 border border-emerald-500/30 bg-emerald-500/5 text-emerald-900 dark:text-emerald-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: "Connected to Sanity:"
										}),
										" Project ID",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
											className: "rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-xs",
											children: sanityConfig.projectId
										}),
										" ",
										"(",
										sanityConfig.dataset,
										")"
									] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-wider font-semibold text-emerald-600",
									children: dataDist === "sanity" ? "Live Sanity Mode" : "Fallback Dataset"
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl glass p-5 border border-amber-500/40 bg-amber-500/10 text-amber-900 dark:text-amber-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-5 w-5 text-amber-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold",
											children: "Sanity Credentials Not Configured"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-0.5",
											children: "The site is currently running on the fallback static dataset. Paste your Sanity Project ID & API token to publish dynamically."
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: () => setShowConfigModal(true),
									className: "rounded-full bg-amber-500 text-white hover:bg-amber-600 text-xs shrink-0",
									children: "Configure Sanity"
								})]
							})
						}),
						feedback && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `mt-4 rounded-2xl p-4 text-sm flex items-center gap-3 ${feedback.type === "success" ? "bg-emerald-500/15 text-emerald-800 dark:text-emerald-200 border border-emerald-500/30" : "bg-destructive/15 text-destructive border border-destructive/30"}`,
							children: [feedback.type === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-emerald-500 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-5 w-5 text-destructive shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "flex-1",
								children: feedback.msg
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid gap-10 lg:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:col-span-7",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: handlePublish,
									className: "rounded-3xl glass p-6 sm:p-8 space-y-6 shadow-[var(--shadow-luxe)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-border/40 pb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
													className: "font-display text-2xl font-semibold",
													children: editingId ? "Edit Article" : "Compose New Article"
												})]
											}), editingId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												type: "button",
												variant: "ghost",
												size: "sm",
												onClick: resetForm,
												className: "text-xs rounded-full",
												children: "Cancel Editing"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-4 sm:grid-cols-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "title",
												className: "text-xs uppercase tracking-wider font-semibold",
												children: "Article Title *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "title",
												required: true,
												value: title,
												onChange: (e) => handleTitleChange(e.target.value),
												placeholder: "e.g. The Indian Woman's Guide to Protein",
												className: "mt-1.5 rounded-xl bg-white/70"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "slug",
												className: "text-xs uppercase tracking-wider font-semibold",
												children: "URL Slug *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "slug",
												required: true,
												value: slug,
												onChange: (e) => setSlug(e.target.value),
												placeholder: "indian-women-protein-guide",
												className: "mt-1.5 rounded-xl bg-white/70"
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-4 sm:grid-cols-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													htmlFor: "category",
													className: "text-xs uppercase tracking-wider font-semibold",
													children: "Category"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
													value: category,
													onValueChange: setCategory,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
														className: "mt-1.5 rounded-xl bg-white/70",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: BLOG_CATEGORIES.filter((c) => c !== "All").map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: c,
														children: c
													}, c)) })]
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													htmlFor: "readTime",
													className: "text-xs uppercase tracking-wider font-semibold",
													children: "Read Time"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "readTime",
													value: readTime,
													onChange: (e) => setReadTime(e.target.value),
													placeholder: "6 min read",
													className: "mt-1.5 rounded-xl bg-white/70"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													htmlFor: "date",
													className: "text-xs uppercase tracking-wider font-semibold",
													children: "Publish Date"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "date",
													value: date,
													onChange: (e) => setDate(e.target.value),
													placeholder: "Aug 22, 2026",
													className: "mt-1.5 rounded-xl bg-white/70"
												})] })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "excerpt",
											className: "text-xs uppercase tracking-wider font-semibold",
											children: "Excerpt / Abstract *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											id: "excerpt",
											required: true,
											rows: 2,
											value: excerpt,
											onChange: (e) => setExcerpt(e.target.value),
											placeholder: "Short summary displayed on cards...",
											className: "mt-1.5 rounded-xl bg-white/70"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "imgUrl",
												className: "text-xs uppercase tracking-wider font-semibold",
												children: "Cover Image URL"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1.5 flex gap-2",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "imgUrl",
													value: imgUrl,
													onChange: (e) => setImgUrl(e.target.value),
													placeholder: "https://...",
													className: "rounded-xl bg-white/70 flex-1"
												})
											}),
											imgUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-2 h-28 w-full rounded-xl overflow-hidden bg-muted border border-border",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: imgUrl,
													alt: "Cover preview",
													className: "h-full w-full object-cover"
												})
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-3 border-t border-border/40 pt-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													className: "text-xs uppercase tracking-wider font-semibold",
													children: "Key Takeaways Bullet Points"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														value: takeawayInput,
														onChange: (e) => setTakeawayInput(e.target.value),
														placeholder: "Add a key takeaway point...",
														className: "rounded-xl bg-white/70 flex-1",
														onKeyDown: (e) => {
															if (e.key === "Enter") {
																e.preventDefault();
																handleAddTakeaway();
															}
														}
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
														type: "button",
														onClick: handleAddTakeaway,
														variant: "outline",
														className: "rounded-xl shrink-0",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add"]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
													className: "space-y-1.5",
													children: keyTakeaways.map((point, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex items-center justify-between text-xs glass px-3 py-1.5 rounded-lg",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "truncate pr-2",
															children: ["• ", point]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => handleRemoveTakeaway(idx),
															className: "text-muted-foreground hover:text-destructive shrink-0",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
														})]
													}, idx))
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "intro",
											className: "text-xs uppercase tracking-wider font-semibold",
											children: "Article Introduction"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											id: "intro",
											rows: 3,
											value: intro,
											onChange: (e) => setIntro(e.target.value),
											placeholder: "First introductory paragraph...",
											className: "mt-1.5 rounded-xl bg-white/70"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-4 border-t border-border/40 pt-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													className: "text-xs uppercase tracking-wider font-semibold",
													children: [
														"Structured Content Sections (",
														sections.length,
														")"
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													type: "button",
													size: "sm",
													variant: "outline",
													onClick: handleAddSection,
													className: "rounded-full text-xs",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 mr-1" }), " Add Section"]
												})]
											}), sections.map((sec, sIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl bg-secondary/30 p-4 border border-border/60 space-y-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														value: sec.heading,
														onChange: (e) => handleUpdateSectionHeading(sIdx, e.target.value),
														placeholder: `Section ${sIdx + 1} Heading`,
														className: "font-semibold rounded-xl bg-white/80 text-sm"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => handleRemoveSection(sIdx),
														className: "text-muted-foreground hover:text-destructive p-1",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
													rows: 3,
													value: sec.body.join("\n\n"),
													onChange: (e) => handleUpdateSectionBody(sIdx, e.target.value),
													placeholder: "Enter section paragraphs (separate paragraphs with blank lines)...",
													className: "rounded-xl bg-white/80 text-xs"
												})]
											}, sIdx))]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "conclusion",
											className: "text-xs uppercase tracking-wider font-semibold",
											children: "Conclusion / The Bottom Line"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											id: "conclusion",
											rows: 2,
											value: conclusion,
											onChange: (e) => setConclusion(e.target.value),
											placeholder: "Final takeaway paragraph...",
											className: "mt-1.5 rounded-xl bg-white/70"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-4 sm:grid-cols-2 border-t border-border/40 pt-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "authorName",
												className: "text-xs uppercase tracking-wider font-semibold",
												children: "Author Name"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "authorName",
												value: authorName,
												onChange: (e) => setAuthorName(e.target.value),
												className: "mt-1.5 rounded-xl bg-white/70"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "authorRole",
												className: "text-xs uppercase tracking-wider font-semibold",
												children: "Author Role"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "authorRole",
												value: authorRole,
												onChange: (e) => setAuthorRole(e.target.value),
												className: "mt-1.5 rounded-xl bg-white/70"
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-t border-border/40 pt-5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "flex items-center gap-2 text-xs font-semibold cursor-pointer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "checkbox",
													checked: featured,
													onChange: (e) => setFeatured(e.target.checked),
													className: "h-4 w-4 rounded text-primary focus:ring-primary"
												}), "Feature this article on main banner"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												type: "submit",
												disabled: submitting,
												size: "lg",
												className: "rounded-full px-8 shadow-[var(--shadow-luxe)] font-semibold",
												children: submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), " Publishing…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-2 h-4 w-4" }),
													" ",
													editingId ? "Update Article" : "Publish to Sanity"
												] })
											})]
										})
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:col-span-5 space-y-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-3xl glass p-6 sm:p-8 space-y-4 shadow-[var(--shadow-luxe)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b border-border/40 pb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-2xl font-semibold",
											children: "Articles Directory"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground mt-0.5",
											children: [
												posts.length,
												" articles (",
												dataDist === "sanity" ? "Live Sanity DB" : "Static Fallback",
												")"
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											onClick: resetForm,
											variant: "outline",
											size: "sm",
											className: "rounded-full text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 mr-1" }), " New"]
										})]
									}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "py-12 text-center text-sm text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin mx-auto mb-2 text-primary" }), " Loading articles..."]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-3 max-h-[750px] overflow-y-auto pr-1",
										children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `rounded-2xl p-4 border transition-all ${editingId === p.id ? "bg-primary/10 border-primary shadow-sm" : "bg-card border-border/60 hover:border-primary/40"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-start justify-between gap-3",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex-1 min-w-0",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary uppercase",
															children: p.category
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
															className: "mt-1 font-display text-base font-semibold truncate leading-tight",
															children: p.title
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "text-[11px] text-muted-foreground mt-1",
															children: [
																"By ",
																p.author.name,
																" · ",
																p.date
															]
														})
													]
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-3 flex items-center justify-between border-t border-border/40 pt-3 text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/blogs/$blogId",
													params: { blogId: p.slug },
													target: "_blank",
													className: "inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5" }), " View"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														onClick: () => handleEditPost(p),
														className: "inline-flex items-center gap-1 text-primary hover:underline font-medium",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "h-3.5 w-3.5" }), " Edit"]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														onClick: () => handleDelete(p.id),
														className: "inline-flex items-center gap-1 text-destructive hover:underline",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }), " Delete"]
													})]
												})]
											})]
										}, p.id))
									})]
								})
							})]
						})
					]
				})
			}),
			showConfigModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-lg rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-2xl space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border/40 pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl",
									children: "Sanity Project Setup"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setShowConfigModal(false),
								className: "text-muted-foreground hover:text-foreground",
								children: "✕"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground leading-relaxed",
							children: [
								"Connect your website directly to your Sanity CMS. Enter your ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Project ID" }),
								" and an ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "API Write Token" }),
								" (generated at sanity.io/manage)."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSaveCredentials,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "projectId",
									className: "text-xs font-semibold uppercase tracking-wider",
									children: "Sanity Project ID *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "projectId",
									required: true,
									value: projectIdInput,
									onChange: (e) => setProjectIdInput(e.target.value),
									placeholder: "e.g. 8x92abc1",
									className: "mt-1 rounded-xl bg-white/80"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "dataset",
									className: "text-xs font-semibold uppercase tracking-wider",
									children: "Dataset Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "dataset",
									value: datasetInput,
									onChange: (e) => setDatasetInput(e.target.value),
									placeholder: "production",
									className: "mt-1 rounded-xl bg-white/80"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "token",
									className: "text-xs font-semibold uppercase tracking-wider",
									children: "Sanity API Token (for Publishing / Write access)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "token",
									type: "password",
									value: tokenInput,
									onChange: (e) => setTokenInput(e.target.value),
									placeholder: "sk...",
									className: "mt-1 rounded-xl bg-white/80 font-mono text-xs"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-secondary/50 p-3 text-[11px] text-muted-foreground space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-foreground",
										children: "How to get these details in 2 minutes:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
										className: "list-decimal pl-4 space-y-0.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Go to ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "https://www.sanity.io/manage",
												target: "_blank",
												rel: "noreferrer",
												className: "text-primary underline inline-flex items-center gap-0.5",
												children: ["sanity.io/manage ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Create or select your project & copy the Project ID." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Go to API tab → Tokens → Add Token (Permissions: Editor)." })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-end gap-3 pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "ghost",
										onClick: () => setShowConfigModal(false),
										className: "rounded-full text-xs",
										children: "Cancel"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										className: "rounded-full px-6 text-xs shadow-md",
										children: "Save Credentials"
									})]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { BlogManagementPage as component };
