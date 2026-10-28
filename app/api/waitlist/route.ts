import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Verify Honeypot
    if (data.botCheck) {
      return NextResponse.json({ success: true, message: "Logged" });
    }

    if (!data.name || !data.email || !data.intendedUse) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // In production, integrate with SendGrid, Postmark, Resend, Mailchimp, or database
    console.log("[WAITLIST_REGISTRATION]:", {
      name: data.name,
      email: data.email,
      intendedUse: data.intendedUse,
      country: data.country || "N/A",
      city: data.city || "N/A",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Successfully added to the Zyncers waiting list.",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
