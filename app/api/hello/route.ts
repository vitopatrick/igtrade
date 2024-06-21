import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    msg: "Hello from server",
    key: process.env.WEBHOOK_SECRET,
  });
}
