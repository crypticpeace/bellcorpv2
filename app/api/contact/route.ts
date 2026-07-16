import { NextResponse } from "next/server";

// Contact form endpoint.
// Primary storage: Google Sheet via Apps Script webhook (set SHEETS_WEBHOOK_URL).
// See README for the 5-minute setup, or the "Database instead" section to swap in Postgres/Supabase.

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // basic validation
    const name = (data.name || "").toString().trim();
    const email = (data.email || "").toString().trim();
    const phone = (data.phone || "").toString().trim();
    if (!name || (!email && !phone)) {
      return NextResponse.json({ ok: false, error: "Name and a contact method are required." }, { status: 400 });
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
    }

    const record = {
      name,
      email,
      phone,
      company: (data.company || "").toString().trim(),
      product: (data.product || "").toString().trim(),
      message: (data.message || "").toString().trim(),
      ts: new Date().toISOString(),
    };

    const webhook = process.env.SHEETS_WEBHOOK_URL;
    if (webhook) {
      const r = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
      if (!r.ok) throw new Error("Storage service error");
    } else {
      // No store configured yet (e.g. local dev without env). Log so nothing is lost.
      console.log("[contact] (no SHEETS_WEBHOOK_URL set) new enquiry:", record);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error", err);
    return NextResponse.json({ ok: false, error: "Could not submit. Please try again." }, { status: 500 });
  }
}
