import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    console.log("FORM DATA:", name, email, message);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["allouah30@icloud.com"],
      subject: "New Portfolio Message",
      replyTo: email,
      html: `
        <h2>New Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    });

    console.log("EMAIL SENT:", response);

    return Response.json({ success: true });

  } catch (error) {
    console.error("ERROR:", error);
    return Response.json({ error: "Email failed" }, { status: 500 });
  }
}