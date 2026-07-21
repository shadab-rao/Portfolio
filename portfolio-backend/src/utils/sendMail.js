const nodemailer = require("nodemailer");

const sendMail = async ({ name, email, message, subject }) => {
  try {

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,

      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },

      connectionTimeout: 10000,
      socketTimeout: 10000,
    });


    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,

      subject: `Portfolio Contact: ${subject}`,

      html: `
        <h3>New Portfolio Contact</h3>

        <p><b>Subject:</b> ${subject}</p>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>

        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });


    console.log("Mail sent successfully");

  } catch(error){
    console.log(error);
    throw error;
  }
};


module.exports = sendMail;