import nodemailer from "nodemailer";

export const sendEmail = async (data: Record<string, any>) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASS,
    },
  });
  await transporter.sendMail({
    from: `"${data.name}" <${data.email}>`,
    to: "anantdadhich66@gmail.com",
    subject: `From Portfolio: ${data.email}`,
    text: `From: ${data.email} \n ${data.message}`,
    html: `<p><b>From: ${data.email}</b></p></br><p>${data.message}</p>`,
  });
};