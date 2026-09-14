import React from "react";
import { fetchBlogPosts } from "@/sanity/client";
import { HomePageClient } from "@/components/home/HomePageClient";

export const revalidate = 60; // ISR revalidate every 60 seconds

export default async function HomePage() {
  const blogPosts = await fetchBlogPosts();

  return <HomePageClient posts={blogPosts} />;
}
