import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

export const fetchUpdates = async () => {
  const updatesQuery = defineQuery(`
    *[_type == "update"] | order(_createdAt desc){
      _id,
      title,
      "imageUrl": image.asset->url,
      _createdAt
    }
  `);

  return client.fetch(updatesQuery);
};
