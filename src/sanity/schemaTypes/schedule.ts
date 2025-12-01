import { ClockIcon } from "@sanity/icons";
import { SchemaTypeDefinition } from "sanity";

export const ScheduleSchema: SchemaTypeDefinition = {
  name: "scheduleItem",
  title: "Schedule Item",
  type: "document",
  icon: ClockIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title or name of the program item",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "time",
      title: "Time",
      type: "datetime",
      description:
        "Exact date and time of the activity. Click (Set to current time) button to use your system's current Date and Time",
      validation: (Rule) => Rule.required(),
    },
  ],
};
