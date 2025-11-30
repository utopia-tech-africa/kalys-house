import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

const formSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  socialHandle: z.string().min(2, "Invalid social handle"),
  phone: z.string().min(6, "Enter a valid phone number"),
  reason: z.string().optional(),
  datetime: z.date("Please select a valid date and time"),
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
      reason: "",
      datetime: undefined,
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

        {/* Email + Datetime */}
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-3">
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

          {/* Date and Time */}

          <div>
            <label className="block text-sm font-medium text-neutral-200">
              Select Date & Time <span className="text-red-500">*</span>
            </label>

            <Controller
              control={form.control}
              name="datetime"
              render={({ field }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Input
                      placeholder="Select date & time"
                      value={
                        field.value
                          ? `${format(field.value, "d MMMM, yyyy")} at ${format(
                              field.value,
                              "h:mm a"
                            )}`
                          : ""
                      }
                      className="backdrop-blur-[20px] text-start flex flex-col items-center"
                    />
                  </PopoverTrigger>

                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value ?? undefined}
                      onSelect={(date) => {
                        if (!date) return;

                        // If time isn't set yet, default to 12:00 PM
                        const newDate = new Date(date);

                        if (!field.value) {
                          newDate.setHours(12);
                          newDate.setMinutes(0);
                        } else {
                          newDate.setHours(field.value.getHours());
                          newDate.setMinutes(field.value.getMinutes());
                        }

                        field.onChange(newDate);
                      }}
                      disabled={(date) => {
                        const start = new Date(2025, 11, 14);
                        const end = new Date(2025, 11, 17);
                        return date < start || date > end;
                      }}
                    />

                    <div className="flex mt-2 p-2 gap-2">
                      <input
                        type="time"
                        value={
                          field.value && !isNaN(field.value.getTime())
                            ? format(field.value, "HH:mm")
                            : ""
                        }
                        onChange={(e) => {
                          const raw = e.target.value;

                          // If user cleared or pressed Enter causing "", ignore
                          if (!raw) return;

                          const [hours, minutes] = raw.split(":").map(Number);

                          // If no date selected yet, do nothing (prevents invalid Date)
                          if (!field.value || isNaN(field.value.getTime()))
                            return;

                          const updated = new Date(field.value);
                          updated.setHours(hours);
                          updated.setMinutes(minutes);

                          field.onChange(updated);
                        }}
                        className="border rounded px-2 py-1 w-full"
                      />
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            />
          </div>
          {form.formState.errors.datetime && (
            <p className="text-sm text-red-500 mt-1">
              {String(form.formState.errors.datetime?.message)}
            </p>
          )}
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
