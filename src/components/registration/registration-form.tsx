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
import { generateEventDates, generateEventSlots } from "@/lib/utils";

// Utility functions for generating dates and time slots

const formSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  socialHandle: z.string().min(2, "Invalid social handle"),
  phone: z.string().min(6, "Enter a valid phone number"),
  day: z.string().min(1, "Please select a day"),
  time: z.string().min(1, "Please select a time"),
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
      phone: "",
      socialHandle: "",
      day: "",
      time: "",
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
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

        {/* Day and Time Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Day */}
          <div>
            <label className="block text-sm font-medium text-neutral-200">
              Select Day <span className="text-red-500">*</span>
            </label>
            <Controller
              control={form.control}
              name="day"
              render={({ field }) => (
                <Select onValueChange={field.onChange} disabled={isSubmitting}>
                  <SelectTrigger className="h-9 w-full rounded-lg p-4 border border-[#D9DBDB33] bg-white/20 text-base backdrop-blur-[20px]">
                    <SelectValue placeholder="Select a day" />
                  </SelectTrigger>
                  <SelectContent>
                    {generateEventDates().map((day) => (
                      <SelectItem key={day} value={day}>
                        {day}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {form.formState.errors.day && (
              <p className="text-sm text-red-500 mt-1">
                {String(form.formState.errors.day?.message)}
              </p>
            )}
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium text-neutral-200">
              Select Time <span className="text-red-500">*</span>
            </label>
            <Controller
              control={form.control}
              name="time"
              render={({ field }) => (
                <Select onValueChange={field.onChange} disabled={isSubmitting}>
                  <SelectTrigger className="h-9 w-full rounded-lg p-4 border border-[#D9DBDB33] bg-white/20 text-base backdrop-blur-[20px]">
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {generateEventSlots().map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {form.formState.errors.time && (
              <p className="text-sm text-red-500 mt-1">
                {String(form.formState.errors.time?.message)}
              </p>
            )}
          </div>
        </div>

        {/* Social Handle + Phone */}
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
            <Input
              placeholder="+233 2222 222 22"
              {...form.register("phone")}
              className="backdrop-blur-[20px]"
              disabled={isSubmitting}
            />
            {form.formState.errors.phone && (
              <p className="text-sm text-red-500 mt-1">
                {String(form.formState.errors.phone?.message)}
              </p>
            )}
          </div>
        </div>

        {/* Reason */}
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

        {/* Submit Button */}
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

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};
