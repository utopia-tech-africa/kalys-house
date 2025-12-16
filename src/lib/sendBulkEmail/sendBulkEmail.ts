import { Resend } from "resend";
import { BulkEmailTemplate } from "./components/bulk-email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Send bulk emails
 * @param guests Array of guest objects: { name, email, phone, date, time }
 */
export async function sendBulkEmails(
  guests: {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    location: string;
  }[]
) {
  const results = [];

  for (const guest of guests) {
    const firstName = guest.name.split(" ")[0];

    try {
      const { data, error } = await resend.emails.send({
        from: "Kaly's House <info@kalyshouse.live>",
        to: guest.email,
        subject: "Your Visit to Kaly’s House Is Confirmed",
        react: BulkEmailTemplate({
          guestName: firstName,
          phone: guest.phone,
          date: guest.date,
          time: guest.time,
          location: guest.location,
        }),
      });

      if (error) {
        console.error(`Error sending to ${guest.email}`, error);
        results.push({ email: guest.email, success: false, error });
      } else {
        results.push({ email: guest.email, success: true, data });
      }
    } catch (err) {
      console.error(`Unexpected error sending to ${guest.email}`, err);
      results.push({
        email: guest.email,
        success: false,
        error: err instanceof Error ? err.message : err,
      });
    }
  }

  return results;
}

///////////////GUETSSS/////////////////////////////////

const guests = [
  {
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    date: "2025-12-20",
    time: "5PM - 9PM",
  },
];
