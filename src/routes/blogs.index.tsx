import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Search,
  Sparkles,
  ArrowUpRight,
  Clock,
  Calendar,
  BookOpen,
  Mail,
  Edit3,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { ChatBot } from "@/components/site/ChatBot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BLOG_CATEGORIES, type BlogPost } from "@/lib/blogs";
import { fetchSanityBlogs } from "@/lib/sanity";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/blogs/")({
  component: BlogsIndexPage,
  head: () => ({
    meta: [
      { title: "Women's Health & Fitness Journal | Her Fitness Blog" },
      {
        name: "description",
        content:
          "Explore expert insights on women's nutrition, cycle syncing, PCOS management, strength training, and post-natal fitness. Written by certified female coaches.",
      },
      { property: "og:title", content: "Her Fitness Journal — Health & Wellness Insights for Women" },
      {
        property: "og:description",
        content:
          "Evidence-based fitness, nutrition, and wellness guides designed specifically for Indian women.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blogs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
});

function BlogsIndexPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState<"sanity" | "fallback">("fallback");

  useEffect(() => {
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
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO BANNER */}
      <section className="relative min-h-[60vh] w-full overflow-hidden">
        <img
          src={hero}
          alt="Her Fitness Journal background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.20 0.02 20 / 0.5) 0%, oklch(0.20 0.02 20 / 0.88) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-white"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
                <Sparkles className="h-3.5 w-3.5 text-primary" /> The Her Fitness Journal
              </span>
              <Link
                to="/blogs/manage"
                className="inline-flex items-center gap-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md px-3.5 py-1 text-xs uppercase tracking-wider text-white transition-all border border-white/20"
              >
                <Edit3 className="h-3.5 w-3.5 text-primary" /> Sanity Studio
              </Link>
            </div>

            <h1 className="mt-6 font-display text-5xl sm:text-7xl leading-[1.05]">
              Stories that <em className="text-gradient-rose">move & empower.</em>
            </h1>
            <p className="mt-5 max-w-xl text-white/85 text-lg">
              Evidence-based fitness guides, cycle syncing secrets, nutrition blueprints, and inspiring stories curated by certified female coaches.
            </p>

            {/* SEARCH INPUT */}
            <div className="mt-8 flex max-w-md items-center rounded-2xl glass-dark p-2 border border-white/20">
              <Search className="ml-3 h-5 w-5 text-white/60 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles on PCOS, protein, workouts..."
                className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED POST */}
      {!searchQuery && selectedCategory === "All" && featuredPost && (
        <section className="py-12 bg-secondary/20 border-b border-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
                  Featured Article
                </span>
              </div>
              {dataSource === "sanity" && (
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground bg-primary/10 px-2.5 py-1 rounded-full font-semibold">
                  Powered by Sanity CMS
                </span>
              )}
            </div>

            <Link
              to="/blogs/$blogId"
              params={{ blogId: featuredPost.slug }}
              className="group relative grid gap-8 lg:grid-cols-12 overflow-hidden rounded-[2.5rem] bg-card p-6 sm:p-8 shadow-[var(--shadow-luxe)] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="lg:col-span-7 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto rounded-2xl overflow-hidden">
                <img
                  src={featuredPost.img}
                  alt={featuredPost.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-primary font-semibold">
                    {featuredPost.category}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl group-hover:text-primary transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4">
                  <div className="flex items-center gap-3">
                    {featuredPost.author.avatar ? (
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-primary/20 grid place-items-center text-primary font-bold">
                        {featuredPost.author.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-semibold">{featuredPost.author.name}</p>
                      <p className="text-[11px] text-muted-foreground">{featuredPost.date}</p>
                    </div>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground group-hover:rotate-45 transition-transform">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* MAIN ARTICLES GRID SECTION */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* CATEGORY TABS */}
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-border/60 pb-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-5 py-2 text-xs uppercase tracking-widest transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground shadow-md font-semibold"
                      : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Showing {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
            </p>
          </div>

          {/* POSTS GRID */}
          {loading ? (
            <div className="my-20 text-center text-muted-foreground text-sm">
              Loading latest articles...
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="my-20 text-center">
              <h3 className="font-display text-2xl">No articles found</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Try searching for a different keyword or select another category.
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-6 rounded-full"
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <Link
                    to="/blogs/$blogId"
                    params={{ blogId: post.slug }}
                    className="group flex flex-col h-full overflow-hidden rounded-[2rem] bg-card shadow-[var(--shadow-glass)] border border-border/30 hover:-translate-y-1.5 transition-all duration-500"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={post.img}
                        alt={post.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 rounded-full glass-dark px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" /> {post.readTime}
                          </span>
                          <span>·</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" /> {post.date}
                          </span>
                        </div>
                        <h3 className="mt-3 font-display text-xl leading-snug group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-border/40 pt-4">
                        <div className="flex items-center gap-2.5">
                          {post.author.avatar ? (
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="h-7 w-7 rounded-full object-cover"
                            />
                          ) : (
                            <div className="h-7 w-7 rounded-full bg-primary/20 grid place-items-center text-[10px] font-bold text-primary">
                              {post.author.name.charAt(0)}
                            </div>
                          )}
                          <span className="text-xs font-medium text-foreground/80">
                            {post.author.name}
                          </span>
                        </div>
                        <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="py-20 bg-secondary/40 border-t border-border/40">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary">
            <Mail className="h-3.5 w-3.5" /> Her Fitness Digest
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Wellness tips delivered to <em className="text-gradient-rose">your inbox.</em>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto text-sm">
            Join over 12,000 women receiving weekly evidence-based workouts, cycle syncing nutrition, and motivational reads.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing to Her Fitness Digest!");
            }}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              required
              placeholder="Enter your email address"
              className="rounded-full bg-white px-5 py-6 text-sm"
            />
            <Button type="submit" size="lg" className="rounded-full px-8 shrink-0 shadow-md">
              Subscribe Free
            </Button>
          </form>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
}
