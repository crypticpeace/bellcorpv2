# Bellcorp International — Website

Next.js (App Router) + Tailwind CSS marketing site for Bellcorp International.
Navy & gold theme, fully responsive, and deployable to Vercel. The contact form writes
enquiries to a **Google Sheet** (Excel-compatible) — or a database, if you prefer (see below).

## Tech
- Next.js 14 (App Router) · React 18 · TypeScript
- Tailwind CSS 3 · lucide-react icons
- Contact API route at `app/api/contact/route.ts`

---

## 1. Run locally

```bash
npm install
cp .env.example .env.local   # optional for local; needed for storing submissions
npm run dev
```

Open http://localhost:3000. The form works immediately in dev — without a webhook set,
submissions are just logged to the terminal (nothing is stored yet).

---

## 2. Connect the contact form to a Google Sheet (recommended, ~5 min)

This gives you a live spreadsheet of leads you can open in Excel/Sheets any time — no
Google Cloud credentials required.

1. Create a new Google Sheet (e.g. "Bellcorp Leads").
2. In the sheet: **Extensions → Apps Script**.
3. Delete the sample code, paste the contents of **`google-apps-script.gs`** (in this repo), and **Save**.
4. **Deploy → New deployment** → gear icon → **Web app**.
   - *Execute as:* **Me**
   - *Who has access:* **Anyone**
   - Click **Deploy**, authorize, and **copy the Web app URL**.
5. Put that URL in your environment:
   - Local: add to `.env.local` → `SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/XXXX/exec`
   - Vercel: Project → Settings → Environment Variables → add the same key/value.

Submissions now append as rows: Timestamp · Name · Email · Phone · Company · Product Interest · Message.
Download any time via **File → Download → Microsoft Excel (.xlsx)**.

---

## 3. Prefer a database instead?

Swap the storage block in `app/api/contact/route.ts`. Example with **Supabase**
(free Postgres):

```bash
npm install @supabase/supabase-js
```

```ts
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!);
// ...inside POST, replacing the webhook block:
const { error } = await supabase.from("leads").insert(record);
if (error) throw error;
```

Create a `leads` table with columns matching the `record` object (name, email, phone,
company, product, message, ts). Vercel Postgres works the same way.

---

## 4. Deploy to Vercel

1. Push this folder to a GitHub repo.
2. On https://vercel.com → **Add New → Project** → import the repo.
3. Framework preset auto-detects **Next.js** — no build config needed.
4. Add the **`SHEETS_WEBHOOK_URL`** environment variable (from step 2).
5. **Deploy.** Add your custom domain (`bellcorpinternational.com`) under Settings → Domains.

---

## 5. Editing content

- **Business details** (phone, email, address, WhatsApp): one place — `lib/utils.ts` → `COMPANY`.
- **Sections** live in `components/` (Hero, About, Categories, WhyUs, Services, Stats, ContactSection, Footer).
- **Colors / fonts**: `tailwind.config.ts` (brand `navy` + `gold`) and `app/layout.tsx` (fonts).
- **Real photos**: drop images into `/public` and replace the placeholder tiles/panels
  (About visual, Hero preview tiles, product categories) with `next/image`. Search the
  components for the "Replace ... with a real photo" comments.

---

## Notes
- The logo is drawn as inline SVG (`components/Logo.tsx`) so it stays crisp at any size.
  Replace with your official logo file whenever ready.
- All nav links are in-page anchors; the layout is a single scrolling page matching the approved design.
