import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const resendFrom = process.env.RESEND_FROM_EMAIL ?? "RK Healthcare <enquiries@rkhealthcare.co.uk>";
const resendTo = process.env.RESEND_TO_EMAIL ?? "info@rkhealthcare.co.uk";

type ContactRequestBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  reason?: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export async function POST(req: Request) {
  const body = (await req.json()) as ContactRequestBody;
  const { name, email, phone, message, reason } = body;

  if (!name || !email || !phone || !message || !reason) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "RESEND_API_KEY is not configured" },
      { status: 500 },
    );
  }

  try {
    const { data, error } = await resend.emails.send({
      from: resendFrom,
      to: resendTo,
      replyTo: email,
      subject: `New Enquiry: ${reason} — ${name}`,
      html: `
        <h2>New Professional Enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Reason:</strong> ${escapeHtml(reason)}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message)}</p>
      `,
    });

    if (error || !data?.id) {
      console.error("Resend send failed", {
        error,
        from: resendFrom,
        to: resendTo,
      });

      return NextResponse.json(
        { error: error?.message ?? "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    console.error("Resend send exception", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
