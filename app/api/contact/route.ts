import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const name = form.get("name");
  const email = form.get("email");
  const message = form.get("message");

  const body = `
New Lead Inquiry from YourTime Website:
Name: ${name}
Email: ${email}
Message: ${message}
  `;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "YourTime Website <info@get-your-time-back.com>",
      to: ["keegs@get-your-time-back.com"],
      subject: "New Lead Inquiry",
      text: body
    })
  });

  return NextResponse.redirect("/thank-you");
}
