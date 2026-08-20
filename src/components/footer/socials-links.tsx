import { FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";

export const SocialLinks = () => {
  return (
    <div className="flex gap-3">
      {/* IG */}
      <a
        href="https://www.instagram.com/kalyshouse"
        target="_blank"
        rel="noreferrer"
        className="group rounded-lg flex hover:opacity-80 transition border p-3 border-seconday-500"
      >
        <div className="relative w-6 h-5 overflow-hidden">
          <div className="absolute inset-0 transition-transform flex items-center justify-center duration-300 group-hover:-translate-y-full">
            <FaInstagram />
          </div>

          <div className="absolute inset-0 translate-y-full  flex items-center justify-center transition-transform duration-300 group-hover:translate-y-0">
            <FaInstagram />
          </div>
        </div>
      </a>

      {/* Twitter */}
      <a
        href="https://x.com/kalyshouse"
        target="_blank"
        rel="noreferrer"
        className="group rounded-lg flex items-center justify-center hover:opacity-80 transition border p-3 border-seconday-500"
      >
        {/* Animated icon */}
        <div className="relative w-6 h-5 overflow-hidden">
          <div className="absolute   flex items-center justify-center inset-0 transition-transform duration-300 group-hover:-translate-y-full">
            <FaXTwitter />
          </div>

          <div className="absolute inset-0  flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <FaXTwitter />
          </div>
        </div>
      </a>

      {/* Youtube */}
      <a
        href="https://youtube.com/@kalyshouse?si=lgIA9Bb4SmbYAz8N"
        target="_blank"
        rel="noreferrer"
        className="group rounded-lg flex items-center justify-center hover:opacity-80 transition border p-3 border-seconday-500"
      >
        {/* Animated icon */}
        <div className="relative w-6 h-5 overflow-hidden">
          <div className="absolute inset-0  flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
            <FaYoutube />
          </div>

          <div className="absolute inset-0  flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <FaYoutube />
          </div>
        </div>
      </a>

      {/* Facebook */}
      <a
        href=""
        target="_blank"
        rel="noreferrer"
        className="group flex rounded-lg items-center justify-center hover:opacity-80 transition border p-3 border-seconday-500"
      >
        {/* Animated icon */}
        <div className="relative w-6 h-5 overflow-hidden">
          <div className="absolute inset-0  flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
            <FaTiktok />
          </div>

          <div className="absolute inset-0  flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <FaTiktok />
          </div>
        </div>
      </a>
    </div>
  );
};
