// src/app/api/submit/route.js
// Vercel Serverless Function — proxies email to Make.com webhook.
// Webhook URL + API Key are server-only env vars — never exposed to the browser.

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    // ── 1. Input validation ──────────────────────────────────────────────────
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // ── 2. Verify env vars are set ───────────────────────────────────────────
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    const apiKey = process.env.MAKE_API_KEY;

    if (!webhookUrl || !apiKey) {
      console.error("Missing env vars: MAKE_WEBHOOK_URL or MAKE_API_KEY");
      return NextResponse.json(
        { error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    // ── 3. Forward to Make.com webhook with API key in Authorization header ──
    const makeResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-make-apikey": apiKey,
      },
      body: JSON.stringify({
        email: trimmedEmail,
        source: "coming_soon_page",
        subscribedAt: new Date().toISOString(),
      }),
    });

    if (!makeResponse.ok) {
      console.error(`Make webhook returned status ${makeResponse.status}`);
      return NextResponse.json(
        { error: "Subscription failed. Please try again." },
        { status: 502 }
      );
    }

    // ── 4. Success ───────────────────────────────────────────────────────────
    return NextResponse.json(
      { success: true, message: "You're on the list!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Submit API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

// Block all other HTTP methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
