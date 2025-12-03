import { defineField, defineType } from "sanity";
import { PlayIcon } from "@sanity/icons";

export default defineType({
  name: "streamingChannel",
  title: "Streaming Channels",
  type: "document",
  icon: PlayIcon,

  fields: [
    defineField({
      name: "platform",
      title: "Platform",
      type: "string",
      description: "Example: YouTube, Twitch, Kick, Facebook, Custom Platform",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "logo",
      title: "Platform Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "name",
      title: "Channel Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "streamUrl",
      title: "Stream URL",
      type: "url",
      description:
        "Paste the channel/stream link (YouTube live, Twitch channel, etc.)",
      validation: (Rule) => Rule.required().uri({ allowRelative: false }),
    }),

    defineField({
      name: "embedUrl",
      title: "Embed URL",
      type: "url",
      description:
        "Paste the embed link used to display the stream on the website. This is usually found inside the iframe code. Do NOT include the iframe itself.",
      validation: (Rule) => Rule.required().uri({ allowRelative: false }),
    }),

    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "isActive",
      title: "(isActive) Show on Website?",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers show first",
      validation: (Rule) => Rule.min(0),
    }),
  ],

  preview: {
    select: {
      platform: "platform",
      order: "order",
      media: "logo",
      subtitle: "name",
    },
    prepare({ platform, order, media, subtitle }) {
      return {
        title: `${platform} ${order !== undefined ? `(#${order})` : ""}`,
        media,
        subtitle,
      };
    },
  },
});
