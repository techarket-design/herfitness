import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { type BlogPost } from "@/lib/blogs";
import { fetchSanityBlogs } from "@/lib/sanity";

export function BlogPreview() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function load() {
      const { posts: loaded } = await fetchSanityBlogs();
      setPosts(loaded.slice(0, 3));
    }
    load();
  }, []);

  return (
    <section id="journal" className="py-24 sm:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">The Journal</span>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Stories that <em className="text-gradient-rose">move us.</em>
            </h2>
          </div>
          <Link to="/blogs" className="text-sm font-medium hover:text-primary flex items-center gap-1 transition-colors">
            Read all articles <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.id}
              to="/blogs/$blogId"
              params={{ blogId: p.slug }}
              className="group rounded-3xl bg-card overflow-hidden shadow-[var(--shadow-glass)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                    <span className="text-primary font-semibold">{p.category}</span>
                    <span>·</span>
                    <span>{p.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl leading-snug group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {p.excerpt}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0 flex items-center justify-between text-xs text-muted-foreground">
                <span>By {p.author.name}</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
