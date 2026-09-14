import React from "react";
import { Metadata } from "next";
import { fetchBlogPosts } from "@/sanity/client";
import { BlogIndexClient } from "@/components/blog/BlogIndexClient";

export const metadata: Metadata = {
  title: "Women's Health, Fitness & Nutrition Blog | Her Fitness",
  description:
    "Expert fitness advice, PCOS nutrition guides, workout tips, and wellness strategies curated by Her Fitness female health specialists.",
};

export const revalidate = 60;

export default async function BlogIndexPage() {
  const posts = await fetchBlogPosts();

  return <BlogIndexClient posts={posts} />;
}
