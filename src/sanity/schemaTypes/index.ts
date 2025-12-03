import { SchemaTypeDefinition } from "sanity";
import { SponsorsSchema } from "./sponsor";
import { UpdatesSchema } from "./update";
import { ScheduleSchema } from "./schedule";
import { HighlightsSchema } from "./highlight";
import streamingChannels from "./streaming-channels";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    SponsorsSchema,
    UpdatesSchema,
    ScheduleSchema,
    HighlightsSchema,
    streamingChannels,
  ],
};
