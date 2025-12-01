import { SchemaTypeDefinition } from "sanity";
import { SponsorsSchema } from "./sponsor";
import { UpdatesSchema } from "./update";
import { ScheduleSchema } from "./schedule";
import { HighlightsSchema } from "./highlight";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [SponsorsSchema, UpdatesSchema, ScheduleSchema, HighlightsSchema],
};
