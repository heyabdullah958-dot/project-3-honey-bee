// src/app/api/subscribe/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    // Basic validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // ✅ TODO: Replace this with Mailchimp API call when ready
    // For now, we just log it (works perfectly for MVP)
    console.log("New subscriber:", email);

    // --- MAILCHIMP EXAMPLE (uncomment when you have API key) ---
    // const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    // const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
    // const MAILCHIMP_DC = process.env.MAILCHIMP_DC; // e.g. "us21"
    //
    // await fetch(`https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`, {
    //   method: "POST",
    //   headers: {
    //     Authorization: `apikey ${MAILCHIMP_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email_address: email, status: "subscribed" }),
    // });

    return NextResponse.json(
      { message: "Subscribed successfully!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
