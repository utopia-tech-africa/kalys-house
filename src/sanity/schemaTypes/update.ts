import { DocumentTextIcon } from "@sanity/icons";
import { SchemaTypeDefinition } from "sanity";

export const UpdatesSchema: SchemaTypeDefinition = {
  name: "update",
  title: "Update",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the announcement or update",
      validation: (Rule) => Rule.required().min(2),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Associated image for this update",
      options: { hotspot: true },
    },
  ],
};
