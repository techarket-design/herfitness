"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/types";
import { HoverCard } from "@/components/ui/MotionWrapper";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <HoverCard className="h-full">
      <Link href={`/blog/${post.slug.current}`} className="block h-full">
        <div className="h-full bg-slate-950/90 rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-pink-500/50 transition-all shadow-xl group">
          <div>
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 bg-her-primary text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow">
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

              <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="mt-3 text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </div>

          <div className="p-6 pt-0 border-t border-slate-900 flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-700">
                <Image
                  src={post.author.image.asset.url}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xs text-slate-200 font-semibold block">{post.author.name}</span>
                <span className="text-[10px] text-slate-500 block">{post.author.role.split('&')[0]}</span>
              </div>
            </div>
            <span className="text-xs font-bold text-her-primary group-hover:translate-x-1 transition-transform flex items-center gap-1">
              Read <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </HoverCard>
  );
}
