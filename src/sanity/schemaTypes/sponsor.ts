import { ImageIcon } from "lucide-react";
import { SchemaTypeDefinition } from "sanity";

export const SponsorsSchema: SchemaTypeDefinition = {
  name: "sponsor",
  title: "Sponsor",
  type: "document",
  icon: ImageIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Name of the sponsor",
      validation: (Rule) => Rule.required().min(2),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Upload sponsor logo or banner",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
  ],
};
