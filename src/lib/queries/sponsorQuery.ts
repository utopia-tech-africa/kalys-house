// sponsorQueries

import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

export const fetchSponsors = async () => {
  const sponsorsQuery = defineQuery(`*[_type == "sponsor"]{
        _id,
        title,
        "imageUrl": image.asset->url
      }`);
  return client.fetch(sponsorsQuery);
};
