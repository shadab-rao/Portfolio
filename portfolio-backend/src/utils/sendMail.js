const nodemailer = require("nodemailer");

const sendMail = async ({ name, email, message, subject }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });


    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,

      // Email subject
      subject: `Portfolio Contact: ${subject}`,

      html: `
        <h3>New Portfolio Contact Message</h3>

        <p>
          <b>Subject:</b> ${subject}
        </p>

        <p>
          <b>Name:</b> ${name}
        </p>

        <p>
          <b>Email:</b> ${email}
        </p>

        <p>
          <b>Message:</b>
        </p>

        <p>
          ${message}
        </p>
      `,
    });


    console.log("Mail sent successfully");

  } catch (error) {
    console.log(error);
    throw error;
  }
};


module.exports = sendMail;