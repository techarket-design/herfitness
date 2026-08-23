import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { BLOG_POSTS, type BlogPost } from "./blogs";

// Helper to sanitize and validate Sanity Project ID (only a-z, 0-9, and dashes allowed)
export function sanitizeProjectId(id: string): string {
  if (!id) return "";
  const cleaned = id.trim().toLowerCase().replace(/^["']|["']$/g, "");
  // Ignore template placeholders containing underscores or invalid characters
  if (cleaned.includes("your_") || cleaned.includes("placeholder") || !/^[a-z0-9-]+$/.test(cleaned)) {
    return "";
  }
  return cleaned;
}

export function sanitizeToken(token: string): string {
  if (!token) return "";
  return token.trim().replace(/^["']|["']$/g, "");
}

// Default configuration or saved credentials
export function getSanityConfig() {
  const envProjectId = sanitizeProjectId(import.meta.env.VITE_SANITY_PROJECT_ID || "");
  const envDataset = (import.meta.env.VITE_SANITY_DATASET || "").trim();
  const envToken = sanitizeToken(import.meta.env.VITE_SANITY_API_TOKEN || "");

  let localProjectId = "";
  let localDataset = "";
  let localToken = "";

  if (typeof window !== "undefined") {
    localProjectId = sanitizeProjectId(localStorage.getItem("sanity_project_id") || "");
    localDataset = (localStorage.getItem("sanity_dataset") || "").trim();
    localToken = sanitizeToken(localStorage.getItem("sanity_api_token") || "");
  }

  const projectId = envProjectId || localProjectId || "";
  const dataset = envDataset || localDataset || "production";
  const token = envToken || localToken || "";
  const apiVersion = "2024-01-01";

  return { projectId, dataset, token, apiVersion, isConfigured: Boolean(projectId) };
}

export function saveSanityConfig(projectId: string, dataset: string = "production", token: string = "") {
  if (typeof window !== "undefined") {
    const cleanId = sanitizeProjectId(projectId);
    if (cleanId) {
      localStorage.setItem("sanity_project_id", cleanId);
    } else {
      localStorage.removeItem("sanity_project_id");
    }
    localStorage.setItem("sanity_dataset", dataset.trim() || "production");
    const cleanTok = sanitizeToken(token);
    if (cleanTok) {
      localStorage.setItem("sanity_api_token", cleanTok);
    }
  }
}

export function createSanityClient(useToken: boolean = false) {
  const { projectId, dataset, token, apiVersion, isConfigured } = getSanityConfig();
  if (!isConfigured || !projectId) return null;

  try {
    const cleanTok = sanitizeToken(token);
    return createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: useToken && cleanTok ? cleanTok : undefined,
    });
  } catch (err) {
    console.warn("Failed to initialize Sanity client:", err);
    return null;
  }
}

// Image URL builder for Sanity assets
export function urlForSanityImage(source: any) {
  const { projectId, dataset } = getSanityConfig();
  if (!projectId || !source) return "";
  try {
    const builder = imageUrlBuilder({ projectId, dataset });
    return builder.image(source).url();
  } catch {
    return typeof source === "string" ? source : "";
  }
}

// Map raw Sanity document to our frontend BlogPost schema
function mapSanityPostToBlogPost(doc: any): BlogPost {
  const imageUrl = doc.mainImage?.asset?.url || doc.image || doc.img || "";

  return {
    id: doc._id || doc.id || doc.slug?.current || "post-id",
    slug: doc.slug?.current || doc.slug || doc.id || "post-slug",
    title: doc.title || "Untitled Article",
    excerpt: doc.excerpt || doc.short || "",
    category: doc.category || "Nutrition",
    readTime: doc.readTime || "5 min read",
    date: doc.date || (doc._createdAt ? new Date(doc._createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Recently"),
    featured: Boolean(doc.featured),
    author: {
      name: doc.author?.name || doc.authorName || "Her Fitness Team",
      role: doc.author?.role || doc.authorRole || "Certified Female Coach",
      avatar: doc.author?.avatar?.asset?.url || doc.authorAvatar || doc.author?.avatar || "",
    },
    img: imageUrl || BLOG_POSTS[0].img,
    keyTakeaways: Array.isArray(doc.keyTakeaways) ? doc.keyTakeaways : [],
    content: {
      intro: doc.intro || doc.content?.intro || "",
      sections: Array.isArray(doc.content?.sections)
        ? doc.content.sections
        : Array.isArray(doc.sections)
        ? doc.sections
        : [],
      conclusion: doc.conclusion || doc.content?.conclusion || "",
    },
  };
}

// FETCH ALL BLOGS (with fallback to local static data)
export async function fetchSanityBlogs(): Promise<{ posts: BlogPost[]; source: "sanity" | "fallback" }> {
  const client = createSanityClient();
  if (!client) {
    return { posts: BLOG_POSTS, source: "fallback" };
  }

  try {
    const query = `*[_type == "post"] | order(date desc, _createdAt desc){
      _id,
      _createdAt,
      title,
      slug,
      excerpt,
      category,
      readTime,
      date,
      featured,
      keyTakeaways,
      intro,
      sections,
      conclusion,
      content,
      mainImage { asset-> { url } },
      img,
      image,
      author { name, role, avatar { asset-> { url } } },
      authorName,
      authorRole,
      authorAvatar
    }`;

    const sanityDocs = await client.fetch(query);
    if (!sanityDocs || sanityDocs.length === 0) {
      return { posts: BLOG_POSTS, source: "fallback" };
    }

    const mappedPosts = sanityDocs.map(mapSanityPostToBlogPost);
    return { posts: mappedPosts, source: "sanity" };
  } catch (error) {
    console.warn("Sanity fetch failed, using fallback static posts:", error);
    return { posts: BLOG_POSTS, source: "fallback" };
  }
}

// FETCH SINGLE BLOG BY SLUG (with fallback)
export async function fetchSanityBlogBySlug(slug: string): Promise<{ post: BlogPost | null; source: "sanity" | "fallback" }> {
  const client = createSanityClient();
  if (!client) {
    const fallback = BLOG_POSTS.find((p) => p.slug === slug || p.id === slug) || null;
    return { post: fallback, source: "fallback" };
  }

  try {
    const query = `*[_type == "post" && (slug.current == $slug || _id == $slug || id == $slug)][0]{
      _id,
      _createdAt,
      title,
      slug,
      excerpt,
      category,
      readTime,
      date,
      featured,
      keyTakeaways,
      intro,
      sections,
      conclusion,
      content,
      mainImage { asset-> { url } },
      img,
      image,
      author { name, role, avatar { asset-> { url } } },
      authorName,
      authorRole,
      authorAvatar
    }`;

    const doc = await client.fetch(query, { slug });
    if (!doc) {
      const fallback = BLOG_POSTS.find((p) => p.slug === slug || p.id === slug) || null;
      return { post: fallback, source: "fallback" };
    }

    return { post: mapSanityPostToBlogPost(doc), source: "sanity" };
  } catch (error) {
    console.warn("Sanity fetch single blog failed, using fallback:", error);
    const fallback = BLOG_POSTS.find((p) => p.slug === slug || p.id === slug) || null;
    return { post: fallback, source: "fallback" };
  }
}

// PUBLISH OR UPDATE A BLOG POST TO SANITY
export async function publishSanityBlog(postData: {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured: boolean;
  authorName: string;
  authorRole: string;
  imgUrl: string;
  keyTakeaways: string[];
  intro: string;
  sections: { heading: string; body: string[] }[];
  conclusion: string;
  customToken?: string;
}) {
  const { projectId, dataset, token } = getSanityConfig();
  const rawToken = postData.customToken || token;
  const cleanToken = sanitizeToken(rawToken);
  const cleanProjectId = sanitizeProjectId(projectId);

  if (!cleanProjectId) {
    throw new Error(
      "Invalid Sanity Project ID. Project IDs must contain only letters, numbers, and hyphens (e.g. '8x92abc1'). Click 'Sanity API Setup' to save your Project ID."
    );
  }
  if (!cleanToken) {
    throw new Error(
      "Sanity API Token is missing! Please click 'Sanity API Setup' in the top right and paste your Editor API token (starts with 'sk...')."
    );
  }

  const docId = postData.id && !postData.id.startsWith("post-") ? postData.id : `post-${Date.now()}`;

  const doc = {
    _type: "post",
    _id: docId,
    title: postData.title,
    slug: { _type: "slug", current: postData.slug },
    excerpt: postData.excerpt,
    category: postData.category,
    readTime: postData.readTime,
    date: postData.date,
    featured: postData.featured,
    authorName: postData.authorName,
    authorRole: postData.authorRole,
    authorAvatar: "",
    img: postData.imgUrl,
    keyTakeaways: postData.keyTakeaways,
    intro: postData.intro,
    sections: postData.sections,
    conclusion: postData.conclusion,
    content: {
      intro: postData.intro,
      sections: postData.sections,
      conclusion: postData.conclusion,
    },
  };

  // Execute directly via Sanity HTTP Mutate API with explicit Authorization Bearer token header
  const endpoint = `https://${cleanProjectId}.api.sanity.io/v2024-01-01/data/mutate/${dataset}?returnDocuments=true`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cleanToken}`,
    },
    body: JSON.stringify({
      mutations: [
        {
          createOrReplace: doc,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    const message = errorBody?.message || errorBody?.error?.description || response.statusText;

    if (response.status === 401 || message.includes("Unauthorized")) {
      throw new Error(
        "Sanity Unauthorized (401): The API Token is missing or invalid. Please click 'Sanity API Setup' and paste a valid Token with 'Editor' permissions created at sanity.io/manage under API -> Tokens."
      );
    }
    if (response.status === 403) {
      throw new Error(
        "Sanity Forbidden (403): Your API token does not have write permissions. Ensure you selected 'Editor' role when creating the token at sanity.io/manage."
      );
    }

    throw new Error(`Sanity Publishing Error (${response.status}): ${message}`);
  }

  const result = await response.json();
  return result;
}

// DELETE BLOG FROM SANITY
export async function deleteSanityBlog(docId: string, customToken?: string) {
  const { projectId, dataset, token } = getSanityConfig();
  const rawToken = customToken || token;
  const cleanToken = sanitizeToken(rawToken);
  const cleanProjectId = sanitizeProjectId(projectId);

  if (!cleanProjectId || !cleanToken) {
    throw new Error("Valid Sanity Project ID and Write Token are required to delete articles.");
  }

  const endpoint = `https://${cleanProjectId}.api.sanity.io/v2024-01-01/data/mutate/${dataset}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cleanToken}`,
    },
    body: JSON.stringify({
      mutations: [
        {
          delete: { id: docId },
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody?.message || `Failed to delete article (${response.status})`);
  }

  return await response.json();
}
