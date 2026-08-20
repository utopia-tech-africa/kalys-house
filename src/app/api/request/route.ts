import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { name, email, phone, purpose, more } = await request.json();

    const newRequest = await prisma.collaborate.create({
      data: {
        name,
        email,
        phone,
        purpose,
        more,
      },
    });

    return NextResponse.json(
      { message: "Request submitted successfully", request: newRequest },
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
