import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body as Record<string, string>;

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: "Tous les champs sont requis." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO || "andrianisaina23@gmail.com";

    if (!host || !user || !pass) {
      return new Response(
        JSON.stringify({ error: "Configuration SMTP manquante sur le serveur." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const transporter = nodemailer.createTransport({ host, port, auth: { user, pass } });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to,
      subject: `[Portfolio] ${subject}`,
      text: message,
      html: `<p><strong>De :</strong> ${name} &lt;${email}&gt;</p><p><strong>Sujet :</strong> ${subject}</p><p>${message.replace(/\n/g, "<br/>")}</p>`,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
    } catch {
      return new Response(JSON.stringify({ error: "Erreur d'envoi du message." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
  }
}
