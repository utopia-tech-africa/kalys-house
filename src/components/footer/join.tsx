"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Join = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  async function handleJoin() {
    if (!email.trim()) {
      setSubmitMessage({
        type: "error",
        text: "Please enter a valid email",
      });
      return;
    }

    try {
      setLoading(true);
      setSubmitMessage(null);

      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(data);
        setSubmitMessage({
          type: "error",
          text: "Something went wrong. Please try again.",
        });
        return;
      }

      setSubmitMessage({
        type: "success",
        text: "You're in! Please check your email for confirmation.",
      });
      setEmail("");
    } catch (err) {
      console.error(err);
      setSubmitMessage({
        type: "error",
        text: "Unable to join at the moment.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[32px] leading-[28.6px] text-secondary-100">
        JOIN THE TRIBE
      </h3>
      <p className="font-poppins text-sm text-tertiary-300 leading-[18.2px]">
        Exclusive content, early access. Beyond the Line&apos;s newsletter.
      </p>
      <Input
        placeholder="John Doe"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
        className=""
      />
      {/* fix the colors and spacing later */}
      {submitMessage && (
        <div
          className={`p-3 rounded-full text-sm font-medium ${
            submitMessage.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {submitMessage.text}
        </div>
      )}
      <Button
        onClick={handleJoin}
        disabled={loading}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Submit"}
      </Button>
    </div>
  );
};
