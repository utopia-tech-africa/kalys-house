"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "react-phone-number-input/style.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  socialHandle: z.string().min(2, "Invalid social handle"),
  phone: z.string().min(6, "Enter a valid phone number"),
  reason: z.string().optional(),
});

export const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      socialHandle: "",
      phone: "",
      reason: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitMessage(null);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Failed to register");
      await response.json();

      setSubmitMessage({
        type: "success",
        text: "Registration successful! Check your email.",
      });
      form.reset();
    } catch (err) {
      setSubmitMessage({
        type: "error",
        text:
          err instanceof Error
            ? err.message
            : "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className=" text-white">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[#ff5a24] tracking-[1px] text-center md:text-left font-bold text-3xl mb-2">
          BE A PART OF THE EXPERIENCE
        </h2>
        <p className="font-poppins text-center text-sm mb-6 text-neutral-300">
          Join KalyJay in the house and immerse yourself in <br />
          the epic journey.
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm text-neutral-200">
            Full name <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="John Doe"
            {...form.register("name")}
            className="backdrop-blur-[20px]"
            disabled={isSubmitting}
          />
          {form.formState.errors.name && (
            <p className="text-sm text-red-500 mt-1">
              {String(form.formState.errors.name?.message)}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-neutral-200">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            type="email"
            placeholder="example@email.com"
            {...form.register("email")}
            className="backdrop-blur-[20px]"
            disabled={isSubmitting}
          />
          {form.formState.errors.email && (
            <p className="text-sm text-red-500 mt-1">
              {String(form.formState.errors.email?.message)}
            </p>
          )}
        </div>

        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-neutral-200">
              Social Handle <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="@gyaigyimii"
              {...form.register("socialHandle")}
              className="backdrop-blur-[20px]"
              disabled={isSubmitting}
            />
            {form.formState.errors.socialHandle && (
              <p className="text-sm text-red-500 mt-1">
                {String(form.formState.errors.socialHandle?.message)}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-200">
              Phone <span className="text-red-500">*</span>
            </label>

            <div className="block text-sm font-medium text-neutral-200">
              <Input
                placeholder="+233 2222 222 22"
                {...form.register("phone")}
                className="backdrop-blur-[20px]"
                disabled={isSubmitting}
              />
            </div>

            {form.formState.errors.phone && (
              <p className="text-sm text-red-500 mt-1">
                {String(form.formState.errors.phone?.message)}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-200">
            Reason for joining
          </label>
          <Textarea
            {...form.register("reason")}
            className="w-full mt-2 min-h-[110px] rounded-xl p-4 placeholder:text-sm placeholder:font-medium placeholder:text-neutral-400 border border-neutral-700 resize-none backdrop-blur-[20px]"
            disabled={isSubmitting}
          />
          {form.formState.errors.reason && (
            <p className="text-sm text-red-500 mt-1">
              {String(form.formState.errors.reason?.message)}
            </p>
          )}
        </div>

        {submitMessage && (
          <div
            className={`p-3 rounded-md text-sm font-medium ${
              submitMessage.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {submitMessage.text}
          </div>
        )}

        <Button type="submit" disabled={isSubmitting} className="">
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};
