import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

export const fetchHighlights = async (limit = 4, offset = 0) => {
  const highlightsQuery = defineQuery(`
    *[_type == "highlight"]
    | order(_createdAt desc)
    [${offset}...${offset + limit}]{
      _id,
      title,
      url,
      "video": video.asset->url,
      "thumbnail": thumbnail.asset->url
    }
  `);

  return client.fetch(highlightsQuery);
};
