"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/types";
import { BlogCard } from "./BlogCard";
import { Search, Sparkles, Clock, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/MotionWrapper";

interface BlogIndexClientProps {
  posts: BlogPost[];
}

export function BlogIndexClient({ posts }: BlogIndexClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category.title)))];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category.title === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts[0];

  return (
    <div className="pt-28 pb-24 bg-slate-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn direction="up">
            <span className="text-xs font-bold text-her-secondary bg-her-secondary/10 border border-her-secondary/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Women's Wellness Journal
            </span>
            <h1 className="mt-4 text-4xl sm:text-6xl font-black tracking-tight text-white">
              Fitness, Nutrition & <span className="text-transparent bg-clip-text bg-gradient-to-r from-her-primary to-pink-400">Hormonal Health</span>
            </h1>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              Curated articles by our clinical female dietitians, physiotherapists, and master workout coaches.
            </p>
          </FadeIn>

          {/* Search & Categories */}
          <FadeIn direction="up" delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search articles e.g. PCOS, Nutrition, Yoga..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-2xl text-slate-200 text-sm focus:border-her-primary focus:ring-2 focus:ring-her-primary/20 outline-none"
                />
                <Search className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedCategory === cat
                        ? "bg-her-primary text-white shadow-md shadow-pink-500/20"
                        : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Featured Post */}
        {featuredPost && !searchQuery && selectedCategory === "All" && (
          <div className="mt-14">
            <Link href={`/blog/${featuredPost.slug.current}`} className="block group">
              <div className="bg-slate-900/90 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 hover:border-pink-500/50 transition-all">
                <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[300px]">
                  <Image
                    src={featuredPost.mainImage.asset.url}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden" />
                </div>

                <div className="lg:col-span-5 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-her-primary text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase">
                        Featured Article
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-her-secondary" /> {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl font-black text-white group-hover:text-pink-300 transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="mt-4 text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative w-9 h-9 rounded-full overflow-hidden border border-slate-700">
                        <Image
                          src={featuredPost.author.image.asset.url}
                          alt={featuredPost.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">{featuredPost.author.name}</span>
                        <span className="text-[10px] text-slate-400 block">{featuredPost.author.role}</span>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-her-primary group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Articles Grid */}
        <div className="mt-14">
          <h3 className="text-xl font-black text-white mb-6 border-l-4 border-her-primary pl-3">
            {searchQuery || selectedCategory !== "All" ? "Filtered Articles" : "All Articles"} ({filteredPosts.length})
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
