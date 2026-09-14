import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId, useCdn } from "./env";
import { BlogPost } from "@/lib/types";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      readTime,
      mainImage { asset->{url}, alt },
      category->{ title, color },
      author->{ name, role, image { asset->{url} } }
    }`);
    return posts && posts.length > 0 ? posts : [];
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    return [];
  }
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const post = await sanityClient.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        readTime,
        body,
        mainImage { asset->{url}, alt },
        category->{ title, color },
        author->{ name, role, image { asset->{url} } }
      }`,
      { slug }
    );
    return post || null;
  } catch (error) {
    console.error("Sanity fetch by slug failed:", error);
    return null;
  }
}
