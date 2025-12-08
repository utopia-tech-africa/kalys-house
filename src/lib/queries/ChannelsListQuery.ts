import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

export const fetchChannelsList = async () => {
  const channelsListQuery =
    defineQuery(`*[_type == "streamingChannel" && isActive == true ]{
       _id,
        platform,
        name,
        "logo": logo.asset->url,
        streamUrl,
        embedUrl,
        isActive,
        order   
        }`);
  return client.fetch(channelsListQuery);
};
