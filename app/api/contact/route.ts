import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
};

const CONTACT_RECEIVER_EMAIL =
  process.env.CONTACT_RECEIVER_EMAIL || "allouah30@outlook.com";

function cleanText(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Contact email service is not configured. Please contact me directly by email.",
        },
        { status: 503 }
      );
    }

    const body = (await request.json()) as ContactRequestBody;

    const name = cleanText(body.name);
    const email = cleanText(body.email);
    const message = cleanText(body.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, and message are required.",
        },
        { status: 400 }
      );
    }

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: CONTACT_RECEIVER_EMAIL,
      subject: `New portfolio message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `.trim(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while sending the message.",
      },
      { status: 500 }
    );
  }
}