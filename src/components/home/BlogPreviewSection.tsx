"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, User, Tag } from "lucide-react";
import { BlogPost } from "@/lib/types";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/ui/MotionWrapper";

interface BlogPreviewSectionProps {
  posts: BlogPost[];
}

export function BlogPreviewSection({ posts }: BlogPreviewSectionProps) {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <FadeIn direction="up">
            <span className="text-xs font-bold text-her-secondary bg-her-secondary/10 border border-her-secondary/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Women's Fitness & Nutrition Hub
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-white">
              Latest Insights From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-her-primary via-pink-400 to-rose-300">Health Experts</span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-her-primary hover:text-pink-300 font-bold text-sm group"
            >
              <span>Explore All Blog Articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>

        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post) => (
            <StaggerItem key={post._id}>
              <HoverCard className="h-full">
                <Link href={`/blog/${post.slug.current}`} className="block h-full">
                  <div className="h-full bg-slate-950/90 rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-pink-500/50 transition-all shadow-xl group">
                    <div>
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={post.mainImage.asset.url}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                        <span className="absolute top-4 left-4 bg-her-primary text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                          {post.category.title}
                        </span>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-3 text-slate-400 text-xs mb-3">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-her-secondary" /> {post.readTime}
                          </span>
                          <span>•</span>
                          <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>

                        <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="mt-3 text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-slate-900 flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <div className="relative w-7 h-7 rounded-full overflow-hidden border border-slate-700">
                          <Image
                            src={post.author.image.asset.url}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-xs text-slate-300 font-semibold">{post.author.name}</span>
                      </div>
                      <span className="text-xs font-bold text-her-primary group-hover:translate-x-1 transition-transform">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </Link>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
