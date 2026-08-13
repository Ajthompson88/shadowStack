import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, message, website } = body;

    // Honeypot field for bots
    if (website) {
      return Response.json({ success: true }, { status: 200 });
    }

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (
      name.length > 100 ||
      email.length > 254 ||
      message.length > 5000
    ) {
      return Response.json(
        { error: "One or more fields are too long." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "ShadowStack Portfolio <onboarding@resend.dev>",
      to: ["aj.thompson8888@gmail.com"],
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { error: "Unable to send message." },
        { status: 500 }
      );
    }

    return Response.json(
      {
        success: true,
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}