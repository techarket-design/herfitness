import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Calendar,
  CheckCircle2,
  Share2,
  Bookmark,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { ChatBot } from "@/components/site/ChatBot";
import { Button } from "@/components/ui/button";
import { fetchSanityBlogBySlug, fetchSanityBlogs } from "@/lib/sanity";

export const Route = createFileRoute("/blogs/$blogId")({
  loader: async ({ params }) => {
    const { post, source } = await fetchSanityBlogBySlug(params.blogId);
    if (!post) throw notFound();
    const { posts: allPosts } = await fetchSanityBlogs();
    const related = allPosts.filter((p) => p.id !== post.id && p.slug !== post.slug).slice(0, 3);
    return { post, source, related };
  },
  component: SingleBlogPage,
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article Not Found — Her Fitness" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Her Fitness Journal` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blogs/${post.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blogs/${post.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            author: {
              "@type": "Person",
              name: post.author.name,
              jobTitle: post.author.role,
            },
            datePublished: post.date,
            publisher: {
              "@type": "Organization",
              name: "Her Fitness",
            },
          }),
        },
      ],
    };
  },
});

function SingleBlogPage() {
  const { post, source, related } = Route.useLoaderData();

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Article link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ARTICLE HEADER HERO */}
      <section className="relative pt-32 pb-16 bg-secondary/30 border-b border-border/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 mb-6">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </Link>
            {source === "sanity" && (
              <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-widest font-semibold text-primary">
                Published via Sanity
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="rounded-full bg-primary/10 px-3.5 py-1 text-primary font-semibold">
              {post.category}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {post.readTime}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> {post.date}
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-6xl leading-[1.1]">
            {post.title}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>

          {/* AUTHOR BIO BAR */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/50 pt-6">
            <div className="flex items-center gap-4">
              {post.author.avatar ? (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20"
                />
              ) : (
                <div className="h-12 w-12 rounded-full bg-primary/20 grid place-items-center font-bold text-primary">
                  {post.author.name.charAt(0)}
                </div>
              )}
              <div>
                <p className="font-semibold text-sm">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="rounded-full gap-2 text-xs"
              >
                <Share2 className="h-3.5 w-3.5" /> Share Article
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* ARTICLE MAIN IMAGE */}
          {post.img && (
            <div className="aspect-[16/9] overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-luxe)] mb-12">
              <img
                src={post.img}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {/* KEY TAKEAWAYS BOX */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="mb-12 rounded-3xl glass p-6 sm:p-8 border border-primary/20">
              <div className="flex items-center gap-2 text-primary text-xs uppercase tracking-widest font-semibold mb-4">
                <Bookmark className="h-4 w-4" /> Key Takeaways
              </div>
              <ul className="space-y-3">
                {post.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* INTRODUCTION */}
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed font-sans text-base sm:text-lg">
            {post.content?.intro && (
              <p className="first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
                {post.content.intro}
              </p>
            )}

            {/* SECTIONS */}
            {post.content?.sections &&
              post.content.sections.map((section, idx) => (
                <div key={idx} className="mt-10">
                  <h2 className="font-display text-2xl sm:text-3xl text-foreground font-semibold mb-4">
                    {section.heading}
                  </h2>
                  {Array.isArray(section.body) ? (
                    section.body.map((paragraph, pIdx) => (
                      <p key={pIdx} className="mb-4 text-foreground/80 leading-relaxed">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="mb-4 text-foreground/80 leading-relaxed">{section.body}</p>
                  )}
                </div>
              ))}

            {/* CONCLUSION */}
            {post.content?.conclusion && (
              <div className="mt-12 rounded-3xl bg-secondary/50 p-6 sm:p-8 border border-border/60">
                <h3 className="font-display text-2xl text-foreground mb-3">
                  The Bottom Line
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {post.content.conclusion}
                </p>
              </div>
            )}
          </div>

          {/* SHARE & AUTHOR CALLOUT FOOTER */}
          <div className="mt-16 rounded-3xl glass p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-border/50">
            <div className="flex items-center gap-4">
              {post.author.avatar ? (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
              ) : (
                <div className="h-14 w-14 rounded-full bg-primary/20 grid place-items-center font-bold text-primary text-xl">
                  {post.author.name.charAt(0)}
                </div>
              )}
              <div>
                <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                  Written by
                </p>
                <h4 className="font-display text-xl">{post.author.name}</h4>
                <p className="text-xs text-muted-foreground">{post.author.role}</p>
              </div>
            </div>
            <Link to="/" hash="contact">
              <Button className="rounded-full px-6 shadow-md">
                Book a Free Consult
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      {related && related.length > 0 && (
        <section className="py-20 bg-secondary/30 border-t border-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-primary">Keep Reading</span>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl">Related Articles</h2>
              </div>
              <Link
                to="/blogs"
                className="text-sm font-medium hover:text-primary flex items-center gap-1"
              >
                View all articles <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relPost) => (
                <Link
                  key={relPost.id}
                  to="/blogs/$blogId"
                  params={{ blogId: relPost.slug }}
                  className="group rounded-3xl bg-card overflow-hidden shadow-[var(--shadow-glass)] hover:-translate-y-1 transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={relPost.img}
                      alt={relPost.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                      {relPost.category}
                    </span>
                    <h3 className="mt-2 font-display text-xl leading-snug group-hover:text-primary transition-colors">
                      {relPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
}
