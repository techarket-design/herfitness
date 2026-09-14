"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "./PortableTextComponents";
import { BlogPost } from "@/lib/types";
import { Clock, ArrowLeft, Calendar, Sparkles } from "lucide-react";
import { useTrialModal } from "@/components/layout/ClientLayout";

interface BlogPostClientProps {
  post: BlogPost;
}

export function BlogPostClient({ post }: BlogPostClientProps) {
  const { openModal } = useTrialModal();

  return (
    <article className="pt-28 pb-24 bg-slate-950 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-her-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Articles
        </Link>

        {/* Category & Date */}
        <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
          <span className="bg-her-primary text-white font-bold px-3 py-1 rounded-full uppercase">
            {post.category.title}
          </span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-her-secondary" /> {post.readTime}
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <Calendar className="w-3.5 h-3.5 text-pink-400" />{" "}
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
          {post.title}
        </h1>

        {/* Author info */}
        <div className="mt-6 p-4 bg-slate-900/80 rounded-2xl border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-her-primary">
              <Image
                src={post.author.image.asset.url}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-sm font-bold text-white block">{post.author.name}</span>
              <span className="text-xs text-slate-400 block">{post.author.role}</span>
            </div>
          </div>

          <button
            onClick={() => openModal()}
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-her-primary hover:text-pink-300 bg-pink-500/10 px-3.5 py-2 rounded-xl border border-pink-500/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-her-secondary" />
            <span>Book Free Trial</span>
          </button>
        </div>

        {/* Main Banner Image */}
        <div className="relative h-80 sm:h-[420px] w-full my-8 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-invert max-w-none">
          {post.body ? (
            <PortableText value={post.body} components={portableTextComponents} />
          ) : (
            <p className="text-slate-300 leading-relaxed text-base">{post.excerpt}</p>
          )}
        </div>

        {/* Bottom Lead Card */}
        <div className="mt-14 bg-gradient-to-r from-her-primary/20 via-pink-600/20 to-lime-500/20 border border-pink-500/30 rounded-3xl p-8 text-center space-y-4">
          <h3 className="text-2xl font-black text-white">Inspired To Start Your Health Journey?</h3>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Experience our female-only sanctuary at any of our 8 Delhi NCR branches with a complimentary 3-day VIP pass.
          </p>
          <button
            onClick={() => openModal()}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-her-primary to-pink-600 hover:from-pink-600 hover:to-her-primaryDark text-white font-bold text-sm shadow-xl shadow-pink-500/30 flex items-center justify-center gap-2 mx-auto transition-all"
          >
            <Sparkles className="w-4 h-4 text-her-secondary" />
            <span>Claim Free 3-Day Pass</span>
          </button>
        </div>
      </div>
    </article>
  );
}
