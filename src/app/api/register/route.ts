import { Resend } from "resend";
import { NextResponse } from "next/server";
// import { format } from "date-fns";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, datetime, phone, socialHandle, reason } =
      await request.json();

    const firstName = name.split(" ")[0];
    // const formattedDate = format(new Date(datetime), "d MMMM, yyyy");
    // const formattedTime = format(new Date(datetime), "h:mma");

    const { data, error } = await resend.emails.send({
      from: "Kaly's House <info@kalyshouse.live>",
      to: email,
      subject: "You’re In! Your Kaly Jay House Pass Details",
      html: `
<section>
  <main style="background-color: #f8f9fa; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, Arial, sans-serif; margin: 0; padding: 0;">
    <div style="width: 100%; background-color: #f8f9fa; padding: 40px 0;">
      <div style="max-width: 620px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">

        <!-- Banner -->
        <div>
          <img src="https://res.cloudinary.com/dowv4fs9p/image/upload/v1764605446/email-template-banner_ljgd1a.webp"
            style="width: 100%; height: 309px; object-fit: cover; border-top-right-radius: 8px;" />
        </div>

        <div style="font-family: bebas; font-size: 42px; line-height: 28.6px; color: #EF5134;">READY TO GET PLUGGED IN?</div>

        <!-- Content -->
        <div style="padding: 40px 32px; background-color:black; color:white;">
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            Hi <span style="font-weight: 600;">${firstName}</span>,
          </p>

          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 32px;">
            Thank you for your interest in becoming one of Kaly’s House Lucky Guests! We have successfully received your submission.
            This is a highly exclusive opportunity, and we appreciate you taking the time to apply. What Happens Next?
          </p>

          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 32px;">
            Due to the limited and exclusive nature of this experience, all requests are subject to an approval process. Here is what you can expect:
          </p>

          <ul style="font-size: 16px; line-height: 1.6; margin-bottom: 32px; padding-left: 20px; list-style-type: none;">
            <li>1. Review: Your request is now being reviewed by our team.</li>
            <li>2. Notification: If approved, we will reach out to you personally via this email within 5-7 business days to confirm attendance.</li>
            <li>3. Scheduling: The approval email will include the final confirmed date and 4-hour time slot for your group of 5.</li>
          </ul>

          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            Please note: Receiving this confirmation email does <strong>not</strong> guarantee your spot.
            Attendance is only confirmed once you receive a separate approval email. Thank you for your interest!
          </p>

          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 24px;">
            Questions? Reply to this email or contact <a href="mailto:info@kalyhouse.live" style="font-weight: 600; text-decoration: none;">info@kalyhouse.live</a>.
          </p>

          <p style="font-size: 15px; line-height: 1.6; margin-top: 32px;">
            Best regards, <br />
            <span>The Kaly's House Team</span>
          </p>

        </div>

        <!-- Footer -->
        <div style="width: full; height: 79px;background-image:">
          <p style="color: #7b7b7b; font-size: 13px; margin: 0;">
            © 2025 KalyJay's House — All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </main>
</section>
      `,
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
