export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields required" });
  }

  try {
    // Your logic here (nodemailer, DB etc...)
    console.log("Form received:", { name, email, message });

    return res.status(200).json({
      success: true,
      message: "Message received successfully!",
    });

  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}
