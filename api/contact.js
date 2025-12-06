import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,  // your email
        pass: process.env.EMAIL_PASS,  // gmail app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,       // your receiving email
      subject: "New Contact Form Message",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error("Email Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send message.",
    });
  }
}
