import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  subject: z.string().min(1).max(200),
  message: z.string().min(10).max(4000),
  website: z.string().max(0).optional(), // honeypot
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = schema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });

  const { RESEND_API_KEY, CONTACT_TO_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    return NextResponse.json({ ok: false, error: "Server not configured" }, { status: 500 });
  }
  const { Resend } = await import("resend");
  const resend = new Resend(RESEND_API_KEY);
  const { name, email, subject, message } = parsed.data;
  await resend.emails.send({
    from: "Portfolio <noreply@borisohandja.com>",
    to: [CONTACT_TO_EMAIL],
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });
  return NextResponse.json({ ok: true });
}
