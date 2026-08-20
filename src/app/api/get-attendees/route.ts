import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  try {
    const attendees = await prisma.enquiry.findMany();

    return NextResponse.json({ attendees }, { status: 200 });
  } catch (error) {
    console.error("Error fetching attendees:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
