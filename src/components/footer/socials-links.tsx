import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const SocialLinks = () => {
  return (
    <div className="flex gap-3">
      <a
        href="https://www.instagram.com/kalyshouse"
        target="_blank"
        rel="noreferrer"
        className="rounded p-3 border border-seconday-500"
      >
        <FaInstagram className="text-white " />
      </a>
      <a
        href="https://x.com/kalyshouse"
        target="_blank"
        rel="noreferrer"
        className="rounded p-3 border border-seconday-500"
      >
        <FaXTwitter className="text-white " />
      </a>
      <a
        href="https://youtube.com/@kalyshouse?si=lgIA9Bb4SmbYAz8N"
        target="_blank"
        rel="noreferrer"
        className="rounded p-3 border border-seconday-500"
      >
        <FaYoutube className="text-white " />
      </a>
      <a
        href=""
        target="_blank"
        rel="noreferrer"
        className="rounded p-3 border border-seconday-500"
      >
        <FaFacebook className="text-white " />
      </a>
    </div>
  );
};
