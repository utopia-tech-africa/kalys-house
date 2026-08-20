"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { collaboratePurpose } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Enter a valid phone number"),
  purpose: z.string().min(1, "Please select a purpose"),
  more: z.string().optional(),
});

type CollaborateFormProps = {
  onSuccess?: () => void;
};

export const CollaborateForm = ({ onSuccess }: CollaborateFormProps) => {
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
      phone: "",
      purpose: "",
      more: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitMessage(null);
    try {
      const apiData = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        purpose: values.purpose,
        more: values.more,
      };

      const [collaborateResponse, requestResponse] = await Promise.all([
        fetch("/api/collaborate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(apiData),
        }),
        fetch("/api/request", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(apiData),
        }),
      ]);

      if (!collaborateResponse.ok)
        throw new Error("Failed to submit collaboration form");
      if (!requestResponse.ok)
        throw new Error("Failed to submit request for collaboration form");

      await Promise.all([collaborateResponse.json(), requestResponse.json()]);

      setSubmitMessage({
        type: "success",
        text: "Collaboration form submitted successfully! Check your email",
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
    <div className="text-white">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        {/* Full Name */}
        <div>
          <label className="block text-sm mb-1">
            Full name <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="John Doe"
            {...form.register("name")}
            disabled={isSubmitting}
          />
          {form.formState.errors.name && (
            <p className="text-sm text-red-500 mt-1">
              {String(form.formState.errors.name.message)}
            </p>
          )}
        </div>

        {/* Email + Purpose */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              placeholder="example@gmail.com"
              {...form.register("email")}
              disabled={isSubmitting}
            />
          </div>

          {/* Purpose */}
          <div>
            <label className="block text-sm mb-1">
              Choose purpose <span className="text-red-500">*</span>
            </label>
            <Controller
              control={form.control}
              name="purpose"
              render={({ field }) => (
                <Select
                  onValueChange={(val) => field.onChange(val)}
                  value={field.value}
                  disabled={isSubmitting}
                >
                  <SelectTrigger className="h-9 font-poppins w-full min-w-0 rounded-lg p-6 border border-[#D9DBDB33] text-base leading-[18.2px] shadow-xs transition-[color,box-shadow] placeholder:text-neutral-500  md:text-sm backdrop-blur-2xl bg-white/20  placeholder:text-sm placeholder:leading-[21px] placeholder:font-poppins ">
                    <SelectValue
                      className="font-poppins"
                      placeholder=" Partnership, Enquiry etc..."
                    />
                  </SelectTrigger>

                  <SelectContent className="z-120">
                    {collaboratePurpose().map((purpose) => (
                      <SelectItem key={purpose} value={purpose}>
                        {purpose}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm mb-1">
            Phone <span className="text-red-500">*</span>
          </label>

          <Input
            placeholder="+233 22 222 2222"
            {...form.register("phone")}
            disabled={isSubmitting}
          />
        </div>

        {/* Tell Us More */}
        <div>
          <label className="block text-sm mb-1">Tell us more</label>
          <Textarea
            {...form.register("more")}
            className="rounded-lg bg-white/20 border border-white/20 text-white 
                   placeholder:text-neutral-400 min-h-[73px] resize-none"
            disabled={isSubmitting}
          />
        </div>

        {/* Feedback */}
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

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-[#D22B0D] hover:bg-[#b92009] text-white text-lg rounded-xl"
        >
          {isSubmitting ? "Submitting..." : "SUBMIT"}
        </Button>
      </form>
    </div>
  );
};
