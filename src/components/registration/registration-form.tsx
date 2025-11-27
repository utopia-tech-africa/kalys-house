"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  socialHandle: z.string().min(2, "Invalid social handle"),
  phone: z.string().min(6, "Enter a valid phone number"),
  reason: z.string(),
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
      // create route
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      await response.json();
      setSubmitMessage({
        type: "success",
        text: "Registration successful! Check your email for confirmation.",
      });
      form.reset();
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="border border-white w-[536px] flex flex-col justify-center h-full overflow-hidden">
      <h2 className=" text-primary-light tracking-[1px] text-center md:text-start font-bold text-[40px] mb-2">
        BE PART OF THE EXPERIENCE
      </h2>
      <p className="font-poppins text- white mb-8 text-sm tracking-[1px]">
        Join KalyJay in the house and immerse yourself in the epic journey.
      </p>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm leading-[18.2px] font-medium text-neutral-800 font-poppins">
            Full name <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="John Doe"
            {...form.register("name")}
            className="rounded-full p-6 mt-2 placeholder:text-sm placeholder:leading-3.5 placeholder:font-medium placeholder:text-neutral-500 font-general"
            disabled={isSubmitting}
          />
          {form.formState.errors.name && (
            <p className="text-sm text-red-500 mt-1">
              {String(form.formState.errors.name.message)}
            </p>
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-2 items-center">
          <div className="w-full">
            <label className="block text-sm leading-[18.2px] font-medium text-neutral-800 font-poppins">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              placeholder="example@email.com"
              {...form.register("email")}
              className="rounded-full p-6 mt-2 placeholder:text-sm placeholder:leading-3.5 placeholder:font-medium placeholder:text-neutral-500 font-general"
              disabled={isSubmitting}
            />
            {form.formState.errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {String(form.formState.errors.email.message)}
              </p>
            )}
          </div>

          <div className="flex flex-row">
            <div className="w-full">
              <label className="block text-sm leading-[18.2px] font-medium text-neutral-800 font-poppins">
                Social Handle <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="@gyaigyimii"
                {...form.register("socialHandle")}
                className="rounded-full p-6 mt-2 placeholder:text-sm placeholder:leading-3.5 placeholder:font-medium placeholder:text-neutral-500 font-general"
                disabled={isSubmitting}
              />
              {form.formState.errors.socialHandle && (
                <p className="text-sm text-red-500 mt-1">
                  {String(form.formState.errors.socialHandle.message)}
                </p>
              )}
            </div>

            <div className="w-full">
              <label className="block text-sm leading-[18.2px] font-medium text-neutral-800 font-poppins">
                Phone <span className="text-red-500">*</span>
              </label>
              <div className="rounded-full border border-input bg-background p-4 mt-2">
                <Controller
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <PhoneInput
                      international
                      defaultCountry="GH"
                      value={field.value}
                      onChange={field.onChange}
                      disabled={isSubmitting}
                      className="phone-input w-full border-none outline-none bg-transparent rounded-full splaceholder:text-sm placeholder:leading-3.5 placeholder:font-medium placeholder:text-neutral-500 font-general"
                    />
                  )}
                />
              </div>
              {form.formState.errors.phone && (
                <p className="text-sm text-red-500 mt-1">
                  {String(form.formState.errors.phone.message)}
                </p>
              )}
            </div>

            <div className="w-full">
              <label className="block text-sm leading-[18.2px] font-medium text-neutral-800 font-poppins">
                Reason for Joining
              </label>
              <Input
                type="textbox"
                {...form.register("reason")}
                className="rounded-full p-6 mt-2 placeholder:text-sm placeholder:leading-3.5 placeholder:font-medium placeholder:text-neutral-500 font-general"
                disabled={isSubmitting}
              />
              {form.formState.errors.reason && (
                <p className="text-sm text-red-500 mt-1">
                  {String(form.formState.errors.reason.message)}
                </p>
              )}
            </div>
          </div>
        </div>

        {submitMessage && (
          <div
            className={`p-4 rounded-full text-sm font-medium ${
              submitMessage.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {submitMessage.text}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full shadow-none hover:shadow-none border border-neutral-500 text-primary-600 bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};
