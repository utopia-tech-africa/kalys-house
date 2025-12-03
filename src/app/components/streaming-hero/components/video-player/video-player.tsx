"use client";

interface VideoPlayerProps {
  embedUrl?: string;
}

export const VideoPlayer = ({ embedUrl }: VideoPlayerProps) => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={embedUrl || "https://www.youtube.com/embed/KRvyoNRnBfA"}
        title="Streaming Video"
        width="100%"
        height="100%"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
