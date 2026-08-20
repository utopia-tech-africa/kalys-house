import { SchemaTypeDefinition } from "sanity";
import { SponsorsSchema } from "./sponsor";
import { UpdatesSchema } from "./update";
import { ScheduleSchema } from "./schedule";
import { HighlightsSchema } from "./highlight";
import streamingChannels from "./streaming-channels";
import { heroToggle } from "./hero-toggle";
import { StreamViews } from "./stream-views";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroToggle,
    StreamViews,
    SponsorsSchema,
    UpdatesSchema,
    ScheduleSchema,
    HighlightsSchema,
    streamingChannels,
  ],
};
