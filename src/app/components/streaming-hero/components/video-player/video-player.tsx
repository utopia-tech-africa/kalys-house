"use client";

interface VideoPlayerProps {
  embedUrl?: string;
}

export const VideoPlayer = ({ embedUrl }: VideoPlayerProps) => {
  return (
    <div className="w-full h-full overflow-hidden rounded-lg shadow-lg bg-black">
      <iframe
        className="w-full h-full"
        src={
          embedUrl ||
          "https://www.youtube.com/embed/njqljuDZXxE?si=6LbY3iMVQTfZlYOs"
        }
        title="YouTube video player"
        allowFullScreen
      />
    </div>
  );
};
