import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

export const fetchStreamViews = async () => {
  const streamViewsQuery = defineQuery(`
    *[_type == "streamViews"][0]{
      _id,
      viewCount,
      streamStartAt
    }
  `);

  return client.fetch(streamViewsQuery);
};
