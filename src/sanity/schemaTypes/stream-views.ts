import { TimerIcon } from "lucide-react";
import { SchemaTypeDefinition } from "sanity";

export const StreamViews: SchemaTypeDefinition = {
  name: "streamViews",
  title: "Stream Views",
  type: "document",
  icon: TimerIcon,
  fields: [
    {
      name: "viewCount",
      title: "View Count",
      type: "number",
      description: "Total number of stream views",
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: "streamStartAt",
      title: "Stream Start Time",
      type: "datetime",
      description:
        "Global stream start timestamp. Countdown runs 72 hours from this time.",
      validation: (Rule) => Rule.required(),
    },
  ],
};
