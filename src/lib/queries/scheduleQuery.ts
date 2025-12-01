import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

export const fetchSchedule = async () => {
  const scheduleQuery = defineQuery(`
    *[_type == "scheduleItem"] | order(time asc) {
      _id,
      title,
      time,
      "imageUrl": image.asset->url
    }
  `);

  return client.fetch(scheduleQuery);
};
