import { Router, Request, Response } from "express";
import { Resend } from "resend";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { firstName, lastName, phone, email, serviceType, message } = req.body;

  if (!firstName || !lastName || !phone || !email || !serviceType) {
    res.status(400).json({ success: false, error: "Missing required fields" });
    return;
  }

  const toEmail = process.env.TO_EMAIL || "sales@candofence.com";
  const fromEmail = process.env.FROM_EMAIL || "quotes@candofenceanddeck.com";

  console.log(`\n--- New Quote Request ---`);
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Phone: ${phone}`);
  console.log(`Email: ${email}`);
  console.log(`Service: ${serviceType}`);
  console.log(`Message: ${message || "(none)"}`);
  console.log(`Time: ${new Date().toLocaleString("en-CA")}`);
  console.log(`-------------------------\n`);

  // Send email via Resend if API key is configured
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: `Can Do Fence & Deck <${fromEmail}>`,
        to: [toEmail],
        replyTo: email,
        subject: `New Quote Request — ${serviceType} — ${firstName} ${lastName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0055a5; padding: 24px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 22px;">New Quote Request</h1>
            </div>
            <div style="padding: 32px; background: #f8f9fb;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8eaed; color: #666; width: 140px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e8eaed; font-weight: bold;">${firstName} ${lastName}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8eaed; color: #666;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #e8eaed;"><a href="tel:${phone}">${phone}</a></td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8eaed; color: #666;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e8eaed;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8eaed; color: #666;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #e8eaed; font-weight: bold; color: #0055a5;">${serviceType}</td></tr>
                <tr><td style="padding: 10px 0; color: #666; vertical-align: top;">Message</td><td style="padding: 10px 0;">${message || "<em>No message provided</em>"}</td></tr>
              </table>
            </div>
            <div style="padding: 16px 32px; background: #e8eaed; text-align: center; color: #999; font-size: 12px;">
              Sent from candofenceanddeck.com &mdash; ${new Date().toLocaleString("en-CA")}
            </div>
          </div>
        `,
      });
      console.log("Email sent via Resend to", toEmail);
    } catch (err) {
      console.error("Resend error:", err);
      // Still return success — don't fail the user-facing request on email issues
    }
  } else {
    console.log("RESEND_API_KEY not set — email not sent. Set it in .env to enable.");
  }

  res.json({ success: true });
});

export default router;
