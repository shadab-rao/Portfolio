const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async ({ name, email, message, subject }) => {
  try {
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",

      to: process.env.EMAIL,

      reply_to: email,

      subject: `Portfolio Contact: ${subject}`,

      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Portfolio Contact</title>
</head>

<body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,sans-serif;">

<div style="max-width:650px;margin:40px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,.08);">

  <div style="background:#2563eb;padding:25px;text-align:center;">
    <h1 style="margin:0;color:#ffffff;font-size:24px;">
      📩 New Portfolio Inquiry
    </h1>
  </div>

  <div style="padding:30px;">

    <p style="font-size:16px;color:#555;">
      Someone has contacted you through your portfolio website.
    </p>

    <table style="width:100%;border-collapse:collapse;margin-top:20px;">

      <tr>
        <td style="padding:12px;background:#f8fafc;font-weight:bold;width:150px;">
          Name
        </td>

        <td style="padding:12px;border-bottom:1px solid #eee;">
          ${name}
        </td>
      </tr>

      <tr>
        <td style="padding:12px;background:#f8fafc;font-weight:bold;">
          Email
        </td>

        <td style="padding:12px;border-bottom:1px solid #eee;">
          <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">
            ${email}
          </a>
        </td>
      </tr>

      <tr>
        <td style="padding:12px;background:#f8fafc;font-weight:bold;">
          Subject
        </td>

        <td style="padding:12px;border-bottom:1px solid #eee;">
          ${subject}
        </td>
      </tr>

    </table>

    <div style="margin-top:25px;">
      <h3 style="margin-bottom:10px;color:#111827;">
        Message
      </h3>

      <div style="background:#f8fafc;border-left:4px solid #2563eb;padding:18px;border-radius:6px;color:#444;line-height:1.7;">
        ${message}
      </div>
    </div>

  </div>

  <div style="background:#111827;padding:18px;text-align:center;color:#d1d5db;font-size:13px;">
    This message was sent from your Portfolio Contact Form.
  </div>

</div>

</body>
</html>
`,
    });

    console.log("Mail sent successfully", data);
  } catch (error) {
    console.log("Mail Error:", error);

    throw error;
  }
};

module.exports = sendMail;
