// src/lib/queries/highlightQuery.ts (Revised to use defineQuery)

import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

// A. Use defineQuery with a static query to generate a TypeScript type for the data structure.
// This is the query the type generator will scan for type information.
export const STATIC_HIGHLIGHT_SHAPE_QUERY = defineQuery(
  `
    *[_type == "highlight"] {
      _id,
      title,
      url,
      "video": video.asset->url,
      "thumbnail": thumbnail.asset->url
    }
  `
);

export const fetchHighlights = async (limit = 4, offset = 0) => {
  const DYNAMIC_HIGHLIGHT_QUERY = `
  *[_type == "highlight"]
  | order(_createdAt desc)
  [${offset}...${offset + limit}]{
    _id,
    title,
    url,
    "video": video.asset->url,
    "thumbnail": thumbnail.asset->url
  }
`;
  const data = await client.fetch(DYNAMIC_HIGHLIGHT_QUERY);

  return data;
  // If TypeScript complains about `data` being `any`, you can explicitly type it:
  // return data as Highlight[]; // Use the actual type name from sanity.types.ts
};
