import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("FORM DATA:", { name, email, message });

    const data = await resend.emails.send({
      from: "Alaaeldeen Portfolio <onboarding@resend.dev>",
      to: ["allouah30@icloud.com"],

      // VERY IMPORTANT for reply
      reply_to: email,

      subject: `New Portfolio Message from ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6">
          <h2>New Portfolio Contact Message</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>
          <p>${message}</p>

          <hr/>
          <p style="font-size:12px;color:gray">
          Sent from your portfolio contact form
          </p>
        </div>
      `,
    });

    console.log("EMAIL RESPONSE:", data);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}