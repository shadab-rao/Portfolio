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
        <h3>New Portfolio Contact Message</h3>

        <p><b>Subject:</b> ${subject}</p>

        <p><b>Name:</b> ${name}</p>

        <p><b>Email:</b> ${email}</p>

        <p><b>Message:</b></p>

        <p>${message}</p>
      `,
    });


    console.log("Mail sent successfully", data);

  } catch(error){

    console.log("Mail Error:", error);

    throw error;
  }

};


module.exports = sendMail;