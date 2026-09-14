export const ALL_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  readTime,
  mainImage { asset->{url}, alt },
  category->{ title, color },
  author->{ name, role, image { asset->{url} } }
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
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
}`;
