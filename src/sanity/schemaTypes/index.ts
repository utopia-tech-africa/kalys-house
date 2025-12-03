import { SchemaTypeDefinition } from "sanity";
import { SponsorsSchema } from "./sponsor";
import { UpdatesSchema } from "./update";
import { ScheduleSchema } from "./schedule";
import { HighlightsSchema } from "./highlight";
import streamingChannels from "./streaming-channels";
import { heroToggle } from "./hero-toggle";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroToggle,
    SponsorsSchema,
    UpdatesSchema,
    ScheduleSchema,
    HighlightsSchema,
    streamingChannels,
  ],
};
