import { defineField, defineType } from "sanity";

export const heroToggle = defineType({
  name: "heroToggle",
  title: "Hero Page Toggle",
  type: "document",
  fields: [
    defineField({
      name: "useStreamingHero",
      title: "Use Streaming Hero?",
      type: "boolean",
      description:
        "Check this box to replace the default hero section with the streaming container and chat.",
      initialValue: false, // default is the normal hero
    }),
    defineField({
      name: "streamingChannel",
      title: "Default Streaming Channel",
      type: "reference",
      to: [{ type: "streamingChannel" }],
      description:
        "Select which streaming channel to show in the hero section when streaming mode is enabled.",
      hidden: ({ parent }) => !parent?.useStreamingHero, // only visible when streaming is enabled
    }),
  ],
  preview: {
    select: {
      title: "useStreamingHero",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: "Hero Page Mode",
        subtitle: title ? "🔴 Streaming Enabled" : "Default Hero",
      };
    },
  },
});
