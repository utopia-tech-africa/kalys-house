import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const Socials = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3>LET&apos;S VIBE</h3>
      <p>
        example@gmail.com <br />
        +233 12 345 6789
      </p>
      <div className="flex gap-3">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="rounded p-3 border border-seconday-500"
        >
          <FaInstagram className="text-white " />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
          className="rounded p-3 border border-seconday-500"
        >
          <FaXTwitter className="text-white " />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
          className="rounded p-3 border border-seconday-500"
        >
          <FaLinkedin className="text-white " />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
          className="rounded p-3 border border-seconday-500"
        >
          <FaYoutube className="text-white " />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
          className="rounded p-3 border border-seconday-500"
        >
          <FaFacebook className="text-white " />
        </a>
      </div>
    </div>
  );
};
