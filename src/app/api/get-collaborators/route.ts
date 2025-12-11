import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  try {
    const collaborators = await prisma.collaborate.findMany();
    return NextResponse.json({ collaborators }, { status: 200 });
  } catch (error) {
    console.error("Error fetching collaborators:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
