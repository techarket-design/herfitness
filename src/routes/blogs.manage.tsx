import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Sparkles,
  Plus,
  Trash2,
  Edit3,
  CheckCircle2,
  AlertCircle,
  Key,
  ExternalLink,
  ArrowLeft,
  RefreshCw,
  Eye,
  Loader2,
  BookOpen,
  Image as ImageIcon,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  getSanityConfig,
  saveSanityConfig,
  fetchSanityBlogs,
  publishSanityBlog,
  deleteSanityBlog,
} from "@/lib/sanity";
import { BLOG_CATEGORIES, type BlogPost } from "@/lib/blogs";

export const Route = createFileRoute("/blogs/manage")({
  component: BlogManagementPage,
  head: () => ({
    meta: [
      { title: "Sanity Blog Studio & Publisher | Her Fitness" },
      { name: "description", content: "Manage and publish articles directly to Sanity CMS." },
    ],
  }),
});

function BlogManagementPage() {
  const [sanityConfig, setSanityConfig] = useState(getSanityConfig());
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [projectIdInput, setProjectIdInput] = useState(sanityConfig.projectId);
  const [datasetInput, setDatasetInput] = useState(sanityConfig.dataset);
  const [tokenInput, setTokenInput] = useState(sanityConfig.token);

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [dataDist, setDataDist] = useState<"sanity" | "fallback">("fallback");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  // Form state for creating/editing an article
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState<string>("Nutrition");
  const [excerpt, setExcerpt] = useState("");
  const [readTime, setReadTime] = useState("5 min read");
  const [date, setDate] = useState(
    new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  );
  const [featured, setFeatured] = useState(false);
  const [authorName, setAuthorName] = useState("Dr. Priya Sharma");
  const [authorRole, setAuthorRole] = useState("Lead Clinical Nutritionist");
  const [imgUrl, setImgUrl] = useState("https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&auto=format&fit=crop");
  const [keyTakeaways, setKeyTakeaways] = useState<string[]>([
    "Combine lentils and whole grains for complete protein.",
    "Prioritize daily bioavailable protein sources for metabolic recovery.",
  ]);
  const [takeawayInput, setTakeawayInput] = useState("");
  const [intro, setIntro] = useState("");
  const [sections, setSections] = useState<{ heading: string; body: string[] }[]>([
    {
      heading: "Key Health Benefits",
      body: ["Proper nutrition supports metabolic longevity and hormone balance."],
    },
  ]);
  const [conclusion, setConclusion] = useState("");

  const loadBlogs = async () => {
    setLoading(true);
    const { posts: loadedPosts, source } = await fetchSanityBlogs();
    setPosts(loadedPosts);
    setDataDist(source);
    setLoading(false);
  };

  useEffect(() => {
    loadBlogs();
  }, [sanityConfig.projectId]);

  const handleSaveCredentials = (e: React.FormEvent) => {
    e.preventDefault();
    saveSanityConfig(projectIdInput, datasetInput, tokenInput);
    const updated = getSanityConfig();
    setSanityConfig(updated);
    setShowConfigModal(false);
    setFeedback({ type: "success", msg: "Sanity credentials saved successfully!" });
  };

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!editingId) {
      const generatedSlug = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setSlug(generatedSlug);
    }
  };

  const handleAddTakeaway = () => {
    if (takeawayInput.trim()) {
      setKeyTakeaways([...keyTakeaways, takeawayInput.trim()]);
      setTakeawayInput("");
    }
  };

  const handleRemoveTakeaway = (idx: number) => {
    setKeyTakeaways(keyTakeaways.filter((_, i) => i !== idx));
  };

  const handleAddSection = () => {
    setSections([...sections, { heading: "New Section", body: ["Enter paragraph content..."] }]);
  };

  const handleUpdateSectionHeading = (index: number, val: string) => {
    const updated = [...sections];
    updated[index].heading = val;
    setSections(updated);
  };

  const handleUpdateSectionBody = (index: number, bodyText: string) => {
    const updated = [...sections];
    updated[index].body = bodyText.split("\n").filter((p) => p.trim().length > 0);
    setSections(updated);
  };

  const handleRemoveSection = (index: number) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setSlug("");
    setCategory("Nutrition");
    setExcerpt("");
    setReadTime("5 min read");
    setDate(new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }));
    setFeatured(false);
    setImgUrl("https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&auto=format&fit=crop");
    setKeyTakeaways(["Combine protein sources for optimal synthesis."]);
    setIntro("");
    setSections([{ heading: "Section 1", body: ["Body text..."] }]);
    setConclusion("");
  };

  const handleEditPost = (post: BlogPost) => {
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

    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !slug || !excerpt) {
      setFeedback({ type: "error", msg: "Please fill in all required fields (Title, Slug, Excerpt)." });
      return;
    }

    setSubmitting(true);
    setFeedback(null);

    try {
      await publishSanityBlog({
        id: editingId || undefined,
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
        conclusion,
      });

      setFeedback({
        type: "success",
        msg: editingId ? "Article updated successfully in Sanity!" : "Article published to Sanity successfully!",
      });

      resetForm();
      await loadBlogs();
    } catch (err: any) {
      setFeedback({
        type: "error",
        msg: err.message || "Failed to publish to Sanity. Check your Project ID & API token.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (docId: string) => {
    if (!confirm("Are you sure you want to delete this article from Sanity?")) return;
    try {
      await deleteSanityBlog(docId);
      setFeedback({ type: "success", msg: "Article deleted from Sanity." });
      await loadBlogs();
    } catch (err: any) {
      setFeedback({ type: "error", msg: err.message || "Failed to delete article." });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* TOP BAR */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border/60 pb-6">
            <div>
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-2"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Journal
              </Link>
              <h1 className="font-display text-4xl sm:text-5xl">
                Sanity Blog <em className="text-gradient-rose">Studio</em>
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => setShowConfigModal(true)}
                className="rounded-full gap-2 text-xs border-primary/40 hover:bg-primary/10"
              >
                <Key className="h-4 w-4 text-primary" /> Sanity API Setup
              </Button>
              <Button onClick={loadBlogs} variant="ghost" size="icon" className="rounded-full">
                <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              </Button>
            </div>
          </div>

          {/* STATUS BANNER */}
          <div className="mt-6">
            {sanityConfig.isConfigured ? (
              <div className="flex items-center justify-between rounded-2xl glass p-4 border border-emerald-500/30 bg-emerald-500/5 text-emerald-900 dark:text-emerald-200">
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  <div>
                    <span className="font-semibold">Connected to Sanity:</span> Project ID{" "}
                    <code className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-xs">
                      {sanityConfig.projectId}
                    </code>{" "}
                    ({sanityConfig.dataset})
                  </div>
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-emerald-600">
                  {dataDist === "sanity" ? "Live Sanity Mode" : "Fallback Dataset"}
                </span>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl glass p-5 border border-amber-500/40 bg-amber-500/10 text-amber-900 dark:text-amber-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold">Sanity Credentials Not Configured</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      The site is currently running on the fallback static dataset. Paste your Sanity Project ID & API token to publish dynamically.
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => setShowConfigModal(true)}
                  className="rounded-full bg-amber-500 text-white hover:bg-amber-600 text-xs shrink-0"
                >
                  Configure Sanity
                </Button>
              </div>
            )}
          </div>

          {/* FEEDBACK TOAST */}
          {feedback && (
            <div
              className={`mt-4 rounded-2xl p-4 text-sm flex items-center gap-3 ${
                feedback.type === "success"
                  ? "bg-emerald-500/15 text-emerald-800 dark:text-emerald-200 border border-emerald-500/30"
                  : "bg-destructive/15 text-destructive border border-destructive/30"
              }`}
            >
              {feedback.type === "success" ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 text-destructive shrink-0" />
              )}
              <p className="flex-1">{feedback.msg}</p>
            </div>
          )}

          {/* MAIN TWO COLUMN WORKSPACE */}
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            {/* LEFT COLUMN: PUBLISHING FORM */}
            <div className="lg:col-span-7">
              <form onSubmit={handlePublish} className="rounded-3xl glass p-6 sm:p-8 space-y-6 shadow-[var(--shadow-luxe)]">
                <div className="flex items-center justify-between border-b border-border/40 pb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h2 className="font-display text-2xl font-semibold">
                      {editingId ? "Edit Article" : "Compose New Article"}
                    </h2>
                  </div>
                  {editingId && (
                    <Button type="button" variant="ghost" size="sm" onClick={resetForm} className="text-xs rounded-full">
                      Cancel Editing
                    </Button>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="title" className="text-xs uppercase tracking-wider font-semibold">
                      Article Title *
                    </Label>
                    <Input
                      id="title"
                      required
                      value={title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="e.g. The Indian Woman's Guide to Protein"
                      className="mt-1.5 rounded-xl bg-white/70"
                    />
                  </div>
                  <div>
                    <Label htmlFor="slug" className="text-xs uppercase tracking-wider font-semibold">
                      URL Slug *
                    </Label>
                    <Input
                      id="slug"
                      required
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      placeholder="indian-women-protein-guide"
                      className="mt-1.5 rounded-xl bg-white/70"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <Label htmlFor="category" className="text-xs uppercase tracking-wider font-semibold">
                      Category
                    </Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="mt-1.5 rounded-xl bg-white/70">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {BLOG_CATEGORIES.filter((c) => c !== "All").map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="readTime" className="text-xs uppercase tracking-wider font-semibold">
                      Read Time
                    </Label>
                    <Input
                      id="readTime"
                      value={readTime}
                      onChange={(e) => setReadTime(e.target.value)}
                      placeholder="6 min read"
                      className="mt-1.5 rounded-xl bg-white/70"
                    />
                  </div>
                  <div>
                    <Label htmlFor="date" className="text-xs uppercase tracking-wider font-semibold">
                      Publish Date
                    </Label>
                    <Input
                      id="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      placeholder="Aug 22, 2026"
                      className="mt-1.5 rounded-xl bg-white/70"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="excerpt" className="text-xs uppercase tracking-wider font-semibold">
                    Excerpt / Abstract *
                  </Label>
                  <Textarea
                    id="excerpt"
                    required
                    rows={2}
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="Short summary displayed on cards..."
                    className="mt-1.5 rounded-xl bg-white/70"
                  />
                </div>

                <div>
                  <Label htmlFor="imgUrl" className="text-xs uppercase tracking-wider font-semibold">
                    Cover Image URL
                  </Label>
                  <div className="mt-1.5 flex gap-2">
                    <Input
                      id="imgUrl"
                      value={imgUrl}
                      onChange={(e) => setImgUrl(e.target.value)}
                      placeholder="https://..."
                      className="rounded-xl bg-white/70 flex-1"
                    />
                  </div>
                  {imgUrl && (
                    <div className="mt-2 h-28 w-full rounded-xl overflow-hidden bg-muted border border-border">
                      <img src={imgUrl} alt="Cover preview" className="h-full w-full object-cover" />
                    </div>
                  )}
                </div>

                {/* KEY TAKEAWAYS LIST */}
                <div className="space-y-3 border-t border-border/40 pt-4">
                  <Label className="text-xs uppercase tracking-wider font-semibold">
                    Key Takeaways Bullet Points
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      value={takeawayInput}
                      onChange={(e) => setTakeawayInput(e.target.value)}
                      placeholder="Add a key takeaway point..."
                      className="rounded-xl bg-white/70 flex-1"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddTakeaway();
                        }
                      }}
                    />
                    <Button type="button" onClick={handleAddTakeaway} variant="outline" className="rounded-xl shrink-0">
                      <Plus className="h-4 w-4" /> Add
                    </Button>
                  </div>
                  <ul className="space-y-1.5">
                    {keyTakeaways.map((point, idx) => (
                      <li key={idx} className="flex items-center justify-between text-xs glass px-3 py-1.5 rounded-lg">
                        <span className="truncate pr-2">• {point}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveTakeaway(idx)}
                          className="text-muted-foreground hover:text-destructive shrink-0"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* INTRO */}
                <div>
                  <Label htmlFor="intro" className="text-xs uppercase tracking-wider font-semibold">
                    Article Introduction
                  </Label>
                  <Textarea
                    id="intro"
                    rows={3}
                    value={intro}
                    onChange={(e) => setIntro(e.target.value)}
                    placeholder="First introductory paragraph..."
                    className="mt-1.5 rounded-xl bg-white/70"
                  />
                </div>

                {/* DYNAMIC SECTIONS */}
                <div className="space-y-4 border-t border-border/40 pt-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-xs uppercase tracking-wider font-semibold">
                      Structured Content Sections ({sections.length})
                    </Label>
                    <Button type="button" size="sm" variant="outline" onClick={handleAddSection} className="rounded-full text-xs">
                      <Plus className="h-3.5 w-3.5 mr-1" /> Add Section
                    </Button>
                  </div>

                  {sections.map((sec, sIdx) => (
                    <div key={sIdx} className="rounded-2xl bg-secondary/30 p-4 border border-border/60 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <Input
                          value={sec.heading}
                          onChange={(e) => handleUpdateSectionHeading(sIdx, e.target.value)}
                          placeholder={`Section ${sIdx + 1} Heading`}
                          className="font-semibold rounded-xl bg-white/80 text-sm"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveSection(sIdx)}
                          className="text-muted-foreground hover:text-destructive p-1"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <Textarea
                        rows={3}
                        value={sec.body.join("\n\n")}
                        onChange={(e) => handleUpdateSectionBody(sIdx, e.target.value)}
                        placeholder="Enter section paragraphs (separate paragraphs with blank lines)..."
                        className="rounded-xl bg-white/80 text-xs"
                      />
                    </div>
                  ))}
                </div>

                {/* CONCLUSION */}
                <div>
                  <Label htmlFor="conclusion" className="text-xs uppercase tracking-wider font-semibold">
                    Conclusion / The Bottom Line
                  </Label>
                  <Textarea
                    id="conclusion"
                    rows={2}
                    value={conclusion}
                    onChange={(e) => setConclusion(e.target.value)}
                    placeholder="Final takeaway paragraph..."
                    className="mt-1.5 rounded-xl bg-white/70"
                  />
                </div>

                {/* AUTHOR INFO */}
                <div className="grid gap-4 sm:grid-cols-2 border-t border-border/40 pt-4">
                  <div>
                    <Label htmlFor="authorName" className="text-xs uppercase tracking-wider font-semibold">
                      Author Name
                    </Label>
                    <Input
                      id="authorName"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      className="mt-1.5 rounded-xl bg-white/70"
                    />
                  </div>
                  <div>
                    <Label htmlFor="authorRole" className="text-xs uppercase tracking-wider font-semibold">
                      Author Role
                    </Label>
                    <Input
                      id="authorRole"
                      value={authorRole}
                      onChange={(e) => setAuthorRole(e.target.value)}
                      className="mt-1.5 rounded-xl bg-white/70"
                    />
                  </div>
                </div>

                {/* FEATURED TOGGLE & PUBLISH BUTTON */}
                <div className="flex items-center justify-between border-t border-border/40 pt-5">
                  <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
                    <input
                      type="checkbox"
                      checked={featured}
                      onChange={(e) => setFeatured(e.target.checked)}
                      className="h-4 w-4 rounded text-primary focus:ring-primary"
                    />
                    Feature this article on main banner
                  </label>

                  <Button
                    type="submit"
                    disabled={submitting}
                    size="lg"
                    className="rounded-full px-8 shadow-[var(--shadow-luxe)] font-semibold"
                  >
                    {submitting ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Publishing…</>
                    ) : (
                      <><Sparkles className="mr-2 h-4 w-4" /> {editingId ? "Update Article" : "Publish to Sanity"}</>
                    )}
                  </Button>
                </div>
              </form>
            </div>

            {/* RIGHT COLUMN: EXISTING ARTICLES MANAGEMENT */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl glass p-6 sm:p-8 space-y-4 shadow-[var(--shadow-luxe)]">
                <div className="flex items-center justify-between border-b border-border/40 pb-4">
                  <div>
                    <h2 className="font-display text-2xl font-semibold">Articles Directory</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {posts.length} articles ({dataDist === "sanity" ? "Live Sanity DB" : "Static Fallback"})
                    </p>
                  </div>
                  <Button onClick={resetForm} variant="outline" size="sm" className="rounded-full text-xs">
                    <Plus className="h-3.5 w-3.5 mr-1" /> New
                  </Button>
                </div>

                {loading ? (
                  <div className="py-12 text-center text-sm text-muted-foreground">
                    <Loader2 className="h-6 w-6 animate-spin mx-auto mb-2 text-primary" /> Loading articles...
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[750px] overflow-y-auto pr-1">
                    {posts.map((p) => (
                      <div
                        key={p.id}
                        className={`rounded-2xl p-4 border transition-all ${
                          editingId === p.id
                            ? "bg-primary/10 border-primary shadow-sm"
                            : "bg-card border-border/60 hover:border-primary/40"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary uppercase">
                              {p.category}
                            </span>
                            <h3 className="mt-1 font-display text-base font-semibold truncate leading-tight">
                              {p.title}
                            </h3>
                            <p className="text-[11px] text-muted-foreground mt-1">
                              By {p.author.name} · {p.date}
                            </p>
                          </div>
                        </div>

                        <div className="mt-3 flex items-center justify-between border-t border-border/40 pt-3 text-xs">
                          <Link
                            to="/blogs/$blogId"
                            params={{ blogId: p.slug }}
                            target="_blank"
                            className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Eye className="h-3.5 w-3.5" /> View
                          </Link>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleEditPost(p)}
                              className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
                            >
                              <Edit3 className="h-3.5 w-3.5" /> Edit
                            </button>
                            <button
                              onClick={() => handleDelete(p.id)}
                              className="inline-flex items-center gap-1 text-destructive hover:underline"
                            >
                              <Trash2 className="h-3.5 w-3.5" /> Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* SANITY CONFIG MODAL */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-lg rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-border/40 pb-4">
              <div className="flex items-center gap-2">
                <Key className="h-5 w-5 text-primary" />
                <h3 className="font-display text-2xl">Sanity Project Setup</h3>
              </div>
              <button onClick={() => setShowConfigModal(false)} className="text-muted-foreground hover:text-foreground">
                ✕
              </button>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Connect your website directly to your Sanity CMS. Enter your <b>Project ID</b> and an <b>API Write Token</b> (generated at sanity.io/manage).
            </p>

            <form onSubmit={handleSaveCredentials} className="space-y-4">
              <div>
                <Label htmlFor="projectId" className="text-xs font-semibold uppercase tracking-wider">
                  Sanity Project ID *
                </Label>
                <Input
                  id="projectId"
                  required
                  value={projectIdInput}
                  onChange={(e) => setProjectIdInput(e.target.value)}
                  placeholder="e.g. 8x92abc1"
                  className="mt-1 rounded-xl bg-white/80"
                />
              </div>

              <div>
                <Label htmlFor="dataset" className="text-xs font-semibold uppercase tracking-wider">
                  Dataset Name
                </Label>
                <Input
                  id="dataset"
                  value={datasetInput}
                  onChange={(e) => setDatasetInput(e.target.value)}
                  placeholder="production"
                  className="mt-1 rounded-xl bg-white/80"
                />
              </div>

              <div>
                <Label htmlFor="token" className="text-xs font-semibold uppercase tracking-wider">
                  Sanity API Token (for Publishing / Write access)
                </Label>
                <Input
                  id="token"
                  type="password"
                  value={tokenInput}
                  onChange={(e) => setTokenInput(e.target.value)}
                  placeholder="sk..."
                  className="mt-1 rounded-xl bg-white/80 font-mono text-xs"
                />
              </div>

              <div className="rounded-2xl bg-secondary/50 p-3 text-[11px] text-muted-foreground space-y-1">
                <p className="font-semibold text-foreground">How to get these details in 2 minutes:</p>
                <ol className="list-decimal pl-4 space-y-0.5">
                  <li>Go to <a href="https://www.sanity.io/manage" target="_blank" rel="noreferrer" className="text-primary underline inline-flex items-center gap-0.5">sanity.io/manage <ExternalLink className="h-3 w-3" /></a></li>
                  <li>Create or select your project & copy the Project ID.</li>
                  <li>Go to API tab → Tokens → Add Token (Permissions: Editor).</li>
                </ol>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <Button type="button" variant="ghost" onClick={() => setShowConfigModal(false)} className="rounded-full text-xs">
                  Cancel
                </Button>
                <Button type="submit" className="rounded-full px-6 text-xs shadow-md">
                  Save Credentials
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
