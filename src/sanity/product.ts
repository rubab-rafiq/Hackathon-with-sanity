
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
        type: "string",
        title: "Price",
        validation: (Rule) => Rule.required(),
      }),
    defineField({
      name: "discountPrice",
      type: "string",
      title: "Discount Price",
    }),
    
  ],
});

export default product;