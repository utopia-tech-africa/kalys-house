import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { name, email, date, time, phone, socialHandle, reason } =
      await request.json();

    const newEnquiry = await prisma.enquiry.create({
      data: {
        name,
        email,
        date,
        time,
        phone,
        socialHandle,
        reason,
      },
    });

    return NextResponse.json(
      { message: "Enquiry submitted successfully", enquiry: newEnquiry },
      { status: 201 }
    );
  } catch (error) {
    console.error("Form submission error", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
