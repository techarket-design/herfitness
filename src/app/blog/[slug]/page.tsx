import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchBlogPostBySlug, fetchBlogPosts } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/components/blog/PortableTextComponents";
import { Clock, ArrowLeft, Calendar, Share2, Sparkles } from "lucide-react";
import { BlogPostClient } from "@/components/blog/BlogPostClient";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await fetchBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Article Not Found | Her Fitness",
    };
  }

  return {
    title: `${post.title} | Her Fitness Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.mainImage.asset.url,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function SingleBlogPostPage({ params }: BlogPostPageProps) {
  const post = await fetchBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}
