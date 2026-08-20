import { Resend } from "resend";
import { NextResponse } from "next/server";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, date, time, phone, socialHandle, reason } =
      await request.json();

    const firstName = name.split(" ")[0];

    const { data, error } = await resend.emails.send({
      from: "Kaly's House <info@kalyshouse.live>",
      to: email,
      subject: "You're In! Your Kaly Jay House Pass Details",
      react: EmailTemplate({ firstName }),
    });

    if (error) {
      console.error("Email send error", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Unexpected error", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : error },
      { status: 500 }
    );
  }
}
