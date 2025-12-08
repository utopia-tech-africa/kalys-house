"use client";

interface VideoPlayerProps {
  embedUrl?: string;
}

export const VideoPlayer = ({ embedUrl }: VideoPlayerProps) => {
  return (
    <div className="w-full h-full aspect-video overflow-hidden rounded-lg shadow-lg">
      <iframe
        className="size-full"
        width="560"
        height="315"
        src={embedUrl || ""}
        title="stream video player"
      ></iframe>
    </div>
  );
};
