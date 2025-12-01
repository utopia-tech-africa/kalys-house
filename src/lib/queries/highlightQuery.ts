import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

export const fetchHighlights = async () => {
  const highlightsQuery =
    defineQuery(`*[_type == "highlight"] | order(_createdAt desc){
    _id,
    title,
      url,
    "video": video.asset->url ,
    "thumbnail": thumbnail.asset->url
  }`);

  return client.fetch(highlightsQuery);
};
