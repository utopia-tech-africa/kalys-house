// src/app/api/send-bulk-emails/route.ts
import { NextResponse } from "next/server";
import { sendBulkEmails } from "@/lib/sendBulkEmail/sendBulkEmail";

export async function POST(request: Request) {
  try {
    // Expecting a JSON array of guests in the POST body
    const guests: {
      name: string;
      email: string;
      phone: string;
      date: string;
      time: string;
    }[] = await request.json();

    if (!Array.isArray(guests) || guests.length === 0) {
      return NextResponse.json(
        { error: "Please provide a non-empty array of guests" },
        { status: 400 }
      );
    }

    // Send emails one by one
    const results = await sendBulkEmails(guests);

    // Log results in server console
    results.forEach((result) => {
      if (result.success) {
        console.log(`✅ Email sent successfully to ${result.email}`);
      } else {
        console.error(
          `❌ Failed to send email to ${result.email}:`,
          result.error
        );
      }
    });

    return NextResponse.json({ success: true, results });
  } catch (err) {
    console.error("Unexpected error in /send-bulk-emails:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : err },
      { status: 500 }
    );
  }
}
