import Image from "next/image";

type LightboxImageProps = {
  imageUrl: string | null;
  setLightboxImage: () => void;
};

export const LightboxImage = ({
  imageUrl,
  setLightboxImage,
}: LightboxImageProps) => {
  return (
    <>
      {imageUrl && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center 
                 opacity-0 animate-fadeIn"
          onClick={setLightboxImage}
        >
          <Image
            src={imageUrl}
            alt="preview"
            width={1000}
            height={1000}
            className="max-h-[90vh] object-contain scale-95 animate-zoomIn"
          />
        </div>
      )}
    </>
  );
};
