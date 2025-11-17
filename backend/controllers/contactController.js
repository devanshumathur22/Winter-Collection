import transporter from "../config/emailConfig.js";

export const sendMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // email send
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: `Welcome ${name}! - WinterWear`,
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for contacting WinterWear!</p>
        <p>We received your message:</p>
        <blockquote>${message}</blockquote>
        <p>Our team will reply soon.</p>
      `,
    });

    return res.json({ message: "Message sent successfully ✔ Check your email" });

  } catch (error) {
    console.log("Email Error ❌:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
};
