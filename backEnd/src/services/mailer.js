// src/services/mailer.js
const nodemailer = require("nodemailer");

async function createTransporter() {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "pauline.gulgowski@ethereal.email",
      pass: "mnK6wBezU2t5JygAGA",
    },
  });


  return { transporter, testAccount };
}

async function sendAssignment(toEmail, toName, assignedName) {
  const { transporter, testAccount } = await createTransporter();

  const mailOptions = {
    from: `"Secret Santa" <${testAccount.user}>`,
    to: toEmail,
    subject: "Seu amigo secreto — quem você tirou",
    text: `Olá ${toName},\n\nVocê tirou: ${assignedName}\n\nBoas festas!`,
    html: `<p>Olá <b>${toName}</b>,</p><p>Você tirou: <b>${assignedName}</b></p>`,
  };

  const info = await transporter.sendMail(mailOptions);


  const previewUrl = nodemailer.getTestMessageUrl(info);
  return { info, previewUrl, account: testAccount };
}

module.exports = { sendAssignment, createTransporter };
