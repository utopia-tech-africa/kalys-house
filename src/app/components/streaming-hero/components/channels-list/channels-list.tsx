"use client";

interface Channel {
  name: string;
  logoUrl: string;
  url: string;
}

const channels: Channel[] = [
  {
    name: "YouTube",
    logoUrl: "/logos/youtube.png",
    url: "https://www.youtube.com/",
  },
  {
    name: "Twitch",
    logoUrl: "/logos/twitch.png",
    url: "https://www.twitch.tv/",
  },
  {
    name: "Instagram",
    logoUrl: "/logos/instagram.png",
    url: "https://www.instagram.com/",
  },
  {
    name: "X",
    logoUrl: "/logos/x.png",
    url: "https://twitter.com/",
  },
];

export const ChannelsList = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {channels.map((channel) => (
        <a
          key={channel.name}
          href={channel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition"
        >
          <img src={channel.logoUrl} alt={channel.name} className="w-6 h-6" />
          <span className="text-white font-medium">{channel.name}</span>
        </a>
      ))}
    </div>
  );
};
