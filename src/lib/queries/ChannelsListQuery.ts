import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

export const fetchChannelsList = async () => {
  const channelsListQuery = defineQuery(`*[_type == "streamingChannel"]{
      platform,
      logo{
    asset->{
      _id,
      url
    }
  },
      name,
      streamUrl,
      embedUrl,
      isActive,
      order     
        }`);
  return client.fetch(channelsListQuery);
};
