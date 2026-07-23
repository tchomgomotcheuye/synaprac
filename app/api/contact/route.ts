import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "tchomgoandremichellemouel@gmail.com",
      subject: body.subject,
      html: `
        <h2>Nouveau message</h2>

        <p><strong>Nom :</strong> ${body.name}</p>

        <p><strong>Email :</strong> ${body.email}</p>

        <p><strong>Téléphone :</strong> ${body.phone}</p>

        <hr>

        <p>${body.message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}