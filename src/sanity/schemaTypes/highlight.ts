import { FilmIcon } from "lucide-react";
import { SchemaTypeDefinition } from "sanity";

export const HighlightsSchema: SchemaTypeDefinition = {
  name: "highlight",
  title: "Highlight",
  type: "document",
  icon: FilmIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the highlight clip",
      validation: (Rule) => Rule.required().min(2),
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      description: "Upload a thumbnail for the video.",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "video",
      title: "Video File",
      type: "file",
      description: "Upload full resolution video file",
      options: { accept: "video/*" },
    },
    {
      name: "url",
      title: "External Video URL",
      type: "url",
      description: "Link to YouTube, Vimeo, or external video",
      validation: (Rule) => Rule.uri({ allowRelative: false }),
    },
  ],
};
