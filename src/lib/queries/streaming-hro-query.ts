// streaming-hero-query.ts

import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

export const fetchStreamingHero = async () => {
  const streamingHeroQuery = defineQuery(`
    *[_type == "heroToggle"][0]{
      _id,
      useStreamingHero,
      streamingChannel->{
        _id,
        platform,
        name,
        "logo": logo.asset->url,
        streamUrl,
        embedUrl,
        isActive,
        order   
      }
    }
  `);

  return client.fetch(streamingHeroQuery);
};
