// pages/api/payment/verification.js
  export default function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ success: false, message: "Method not allowed" });
    }

    const responseData = {
      success: true,
      message: "Payment was successful.",
    };

    res.status(200).json(responseData);
  }
