import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

export const fetchUpdates = async () => {
  const updatesQuery = defineQuery(`
    *[_type == "update"]{
      _id,
      title,
      "imageUrl": image.asset->url
    }
  `);

  return client.fetch(updatesQuery);
};
