// src/app/api/subscribe/route.js
// Vercel Serverless Function — runs on the server, never exposes your webhook URL to the browser.

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    // ── 1. Basic validation ──────────────────────────────────────────────────
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

    // ── 2. Check env var is set ──────────────────────────────────────────────
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("MAKE_WEBHOOK_URL environment variable is not set.");
      return NextResponse.json(
        { error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    // ── 3. Forward to Make.com webhook ──────────────────────────────────────
    // Make receives a JSON body — you can map any fields inside Make.
    const makeResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: trimmedEmail,
        source: "coming_soon_page",
        subscribedAt: new Date().toISOString(),
      }),
    });

    // Make webhooks return 200 on success (body is usually "Accepted")
    if (!makeResponse.ok) {
      console.error(
        `Make webhook returned status ${makeResponse.status}`
      );
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
    console.error("Subscribe API error:", error);
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
