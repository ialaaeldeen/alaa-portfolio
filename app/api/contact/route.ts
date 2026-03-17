import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  console.log("CONTACT API CALLED");

  try {
    const body = await req.json();
    const { name, email, message } = body;

    console.log("FORM DATA RECEIVED:", { name, email, message });

    // Basic validation
    if (!name || !email || !message) {
      console.error("VALIDATION FAILED");
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND API KEY MISSING");
      return NextResponse.json(
        { success: false, error: "Email service not configured." },
        { status: 500 }
      );
    }

    const emailResponse = await resend.emails.send({
      from: "Alaaeldeen Portfolio <onboarding@resend.dev>",
      to: ["allouah30@icloud.com"],

      subject: `New Portfolio Message from ${name}`,

      reply_to: email,

      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6; padding:10px;">
          <h2>📩 New Portfolio Contact Message</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>
          <p>${message}</p>

          <hr />

          <p style="font-size:12px;color:gray">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,

      text: `
New Portfolio Contact Message

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    console.log("EMAIL SENT SUCCESSFULLY:", emailResponse);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email. Please try again later.",
      },
      { status: 500 }
    );
  }
}