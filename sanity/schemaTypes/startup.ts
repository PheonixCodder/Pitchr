import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const startup = defineType({
  name: "startup",
  title: "Startup",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
      name: "category",
      type: "string",
      validation: (Rule) =>
        Rule.required().min(1).max(20).error("Please enter a category"),
    }),
    defineField({
      name: "image",
      type: "url",
      validation: (Rule) => Rule.required().error("Please upload an image"),
    }),
    defineField({
      name: "pitch",
      type: "markdown",
    }),
  ],
});
