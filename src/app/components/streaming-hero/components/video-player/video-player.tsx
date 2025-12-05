"use client";

interface VideoPlayerProps {
  embedUrl?: string;
}

export const VideoPlayer = ({ embedUrl }: VideoPlayerProps) => {
  return (
    <div className="w-full aspect-video overflow-hidden rounded-lg shadow-lg">
      <iframe
        className="size-full"
        width="560"
        height="315"
        src={
          embedUrl ||
          "https://www.youtube.com/embed/njqljuDZXxE?si=6LbY3iMVQTfZlYOs"
        }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};
