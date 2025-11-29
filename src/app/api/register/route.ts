import { Resend } from "resend";
import { NextResponse } from "next/server";
import { format } from "date-fns";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, datetime, phone, socialHandle, reason } =
    await request.json();

  const firstName = name.split(" ")[0];

  const formattedDate = format(new Date(datetime), "d MMMM, yyyy");
  const formattedTime = format(new Date(datetime), "h:mma");

  try {
    const { data, error } = await resend.emails.send({
      from: "Kaly's House <info@kalyshouse.live>",
      to: email,
      subject: "You’re In! Your Kaly Jay House Pass Details",
      html: `<section>
  <header></header>

  <div>You're In! Kaly's House – Registration Confirmed</div>

  <main style="background-color: #f8f9fa; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, Arial, sans-serif;">
    <div style="width: 100%; background-color: #f8f9fa; padding: 40px 0;">
      <div style="max-width: 620px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">

        <!-- Header Section -->
        <div style="background: linear-gradient(135deg, #BB2600 0%, #E03000 100%); color: white; text-align: center; padding: 40px 24px;">
          <h1 style="font-size: 28px; font-weight: 700; margin: 0 0 12px 0;">🎉 Your Registration Is Confirmed!</h1>
          <p style="font-size: 16px; opacity: 0.95; margin: 0; font-weight: 500;">
            Welcome to Kaly's House, ${firstName}
          </p>
        </div>

        <!-- Main Content -->
        <div style="padding: 40px 32px;">

          <p style="color: #4a4a4a; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            Hi <span style="font-weight: 600; color: #BB2600;">${firstName}</span>,
          </p>

          <p style="color: #4a4a4a; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            Your registration for <strong style="color: #BB2600;">Kaly Jay House Experience</strong> has been received and confirmed.
          </p>

          <p style="color: #4a4a4a; font-size: 16px; line-height: 1.6; margin-bottom: 32px;">
            We're thrilled to welcome you to Kaly Jay House, the 72-hour nonstop content hub bringing together Africa's top creators, influencers, and fans.
          </p>

          <!-- Event Details Card -->
          <div style="border-left: 4px solid #BB2600; background-color: #FFF4F2; padding: 24px; border-radius: 8px; margin-bottom: 32px;">
            <h3 style="color: #BB2600; font-size: 18px; font-weight: 700; margin-bottom: 16px; display: flex; align-items: center;">
              <span style="margin-right: 8px;">📅</span> Here are your participation details:
            </h3>

            <div style="display: flex; margin-bottom: 12px;">
              <div style="min-width: 100px;">
                <strong style="color: #4a4a4a; font-size: 14px;">Date:</strong>
              </div>
              <div style="color: #4a4a4a; font-size: 14px;">${formattedDate}</div>
            </div>

            <div style="display: flex; margin-bottom: 12px;">
              <div style="min-width: 100px;">
                <strong style="color: #4a4a4a; font-size: 14px;">Time: </strong>
              </div>
              <div style="color: #4a4a4a; font-size: 14px;">${formattedTime}</div>
            </div>

            <div style="display: flex; margin-bottom: 4px;">
              <div style="min-width: 100px;">
                <strong style="color: #4a4a4a; font-size: 14px;">Location:</strong>
              </div>
              <div style="color: #4a4a4a; font-size: 14px;">Kaly's House, Accra, Ghana</div>
            </div>
          </div>

          <p style="color: #4a4a4a; font-size: 15px; line-height: 1.6; margin-bottom: 32px;">
            Please arrive at least 30 minutes before your time slot for check-in and briefing. You'll receive an on-site access badge and guidelines for participation once you arrive.
          </p>

          <!-- What to Bring Card -->
          <div style="border-left: 4px solid #BB2600; background-color: #FFF4F2; padding: 24px; border-radius: 8px; margin-bottom: 32px;">
            <h3 style="color: #BB2600; font-size: 18px; font-weight: 700; margin-bottom: 16px; display: flex; align-items: center;">
              <span style="margin-right: 8px;">🧰</span> What to Bring:
            </h3>

            <ul style="color: #4a4a4a; font-size: 15px; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">Your creative energy and enthusiasm</li>
              <li>Optional: Personal device or camera for behind-the-scene moments</li>
            </ul>
          </div>

          <p style="color: #4a4a4a; font-size: 15px; line-height: 1.6; margin-bottom: 24px;">
            If you have any questions, feel free to reply to this email or contact our team at <a href="mailto:info@kalyhouse.live" style="color: #BB2600; font-weight: 600; text-decoration: none;">info@kalyhouse.live</a>
          </p>

          <p style="color: #4a4a4a; font-size: 16px; line-height: 1.6; margin-bottom: 32px;">
            We can't wait to see you at Kaly Jay House — where content, creativity, and community come alive!
          </p>

         <p style="color: #4a4a4a; font-size: 15px; line-height: 1.6; margin-bottom: 24px; margin-top: 32px;">
            Best regards, <br />
            <span style="font-weight: 600;">The Kaly Jay House Team</span> <br />
            <span style="font-weight: 600; font-size: 13px">Powered by Plugin Digital</span>
          </p>

          

        <!-- Footer -->
        <div style="background-color: #f1f1f1; padding: 20px 0; text-align: center;">
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
