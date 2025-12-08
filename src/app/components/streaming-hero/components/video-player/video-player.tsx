"use client";

interface Props {
  embedUrl?: string;
}

export const VideoPlayer = ({ embedUrl }: Props) => {
  if (!embedUrl) return null;

  // Twitch requires your site domain passed in ?parent=
  const domain =
    typeof window !== "undefined" ? window.location.hostname : "localhost";

  const finalUrl = embedUrl.includes("parent=")
    ? embedUrl
    : `${embedUrl}&parent=${domain}`;

  return (
    <iframe
      src={finalUrl}
      height="100%"
      width="100%"
      allowFullScreen
      className="rounded-lg overflow-hidden w-full h-full"
    />
  );
};
