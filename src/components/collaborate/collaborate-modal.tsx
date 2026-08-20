"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { CollaborateForm } from "./collaborate-form";
import { collaborateModalPattern } from "@/assets/img";

type CollaborateModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CollaborateModal = ({
  isOpen,
  onClose,
}: CollaborateModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setIsVisible(isOpen), 0);

    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      clearTimeout(id);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" && onClose();
    if (isOpen) document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed h-screen inset-0 z-80 flex  bg-black items-center justify-center p-4">
      {/* pattern background */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: `url(${collaborateModalPattern.src})` }}
      />

      <div
        className={`absolute inset-0 bg-black/70 z-40 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* modal box */}
      <div
        className={`relative mt-9 md:mt-12 w-full max-w-[660px] bg-transparent rounded-xl shadow-2xl px-6 py-8 z-50 transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-8 right-3 bg-transparent rounded-full p-2 border border-[#FF3300] text-[#FF3300]"
        >
          <X className="w-4 h-4" />
        </button>

        <h2 className="text-primary-light text-[28px] mb-1 text-center">
          SEND US A MESSAGE
        </h2>

        <CollaborateForm onSuccess={onClose} />
      </div>
    </div>
  );
};
