
import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Post Title",
      description: "Title of the post",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
      description: "Add a brief two-line description of the dress part here.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      type: "number",
      title: "Price",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "discountPrice",
      type: "number",
      title: "Discount Price",
    }),
    defineField({
      name: "colors",
      type: "array",
      title: "Colors",
      of: [{ type: "string" }],
      description: "Add the available colors for this product (e.g., blue, green, orange, etc.).",
      validation: (Rule) =>
        Rule.unique().error("Each color must be unique."),
    }),
    defineField({
      name: "sizes",
      type: "array",
      title: "Sizes",
      of: [{ type: "string" }],
      description: "Add the available sizes for this product (e.g., small, medium, large, etc.).",
      validation: (Rule) =>
        Rule.unique().error("Each size must be unique."),
    }),
  ],
});

export default product;
