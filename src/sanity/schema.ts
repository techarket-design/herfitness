/**
 * Sanity Studio Schema Definitions for Her Fitness Blog
 * You can paste this schema into your Sanity Studio schema file (e.g. schemas/post.ts).
 */
export const postSchema = {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Nutrition", value: "Nutrition" },
          { title: "Hormones", value: "Hormones" },
          { title: "Mindset", value: "Mindset" },
          { title: "Strength", value: "Strength" },
          { title: "Recovery", value: "Recovery" },
        ],
      },
    },
    {
      name: "excerpt",
      title: "Excerpt / Short Summary",
      type: "text",
      rows: 3,
    },
    {
      name: "readTime",
      title: "Read Time",
      type: "string",
      initialValue: "5 min read",
    },
    {
      name: "date",
      title: "Publish Date (Formatted)",
      type: "string",
    },
    {
      name: "featured",
      title: "Featured Article",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "authorName",
      title: "Author Name",
      type: "string",
    },
    {
      name: "authorRole",
      title: "Author Role",
      type: "string",
    },
    {
      name: "img",
      title: "Cover Image URL",
      type: "url",
    },
    {
      name: "keyTakeaways",
      title: "Key Takeaways",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "intro",
      title: "Introduction",
      type: "text",
    },
    {
      name: "sections",
      title: "Article Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "heading", type: "string", title: "Section Heading" },
            {
              name: "body",
              type: "array",
              title: "Body Paragraphs",
              of: [{ type: "text" }],
            },
          ],
        },
      ],
    },
    {
      name: "conclusion",
      title: "Conclusion / Bottom Line",
      type: "text",
    },
  ],
};
