export const authorSchema = {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role / Designation',
      type: 'string',
      initialValue: 'Senior Female Fitness & Nutrition Specialist',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
  ],
};
