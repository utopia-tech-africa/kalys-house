import { Resend } from "resend";
import { NextResponse } from "next/server";
import { CollaborateEmailTemplate } from "@/components/collaborate-email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, purpose, more } = await request.json();

    const firstName = name.split(" ")[0];

    const confirmation = await resend.emails.send({
      from: "Kaly's House <info@kalyshouse.live>",
      to: email,
      subject: "We’ve Received Your Collaboration Request",
      react: CollaborateEmailTemplate({ firstName }),
    });

    if (confirmation.error) {
      console.error("User email error", confirmation.error);
      return NextResponse.json({ error: confirmation.error }, { status: 500 });
    }

    const adminNotification = await resend.emails.send({
      from: "Kaly's House Collboration Form <no-reply@kalyshouse.live>",
      to: "info@kalyshouse.live",
      subject: `New Collaboration Request from ${name}`,
      html: `
        <h2>New Collaboration Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Purpose:</strong> ${purpose}</p>
        <p><strong>More Details:</strong> ${more || "N/A"}</p>

        <p style="margin-top:20px;">
          <em>Sent on: ${new Date().toUTCString()}</em>
        </p>
      `,
    });

    if (adminNotification.error) {
      console.error("Admin email error", adminNotification.error);
      return NextResponse.json(
        { error: adminNotification.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
      confirmation: confirmation.data,
      admin: adminNotification.data,
    });
  } catch (error) {
    console.error("Unexpected error", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : error },
      { status: 500 }
    );
  }
}
