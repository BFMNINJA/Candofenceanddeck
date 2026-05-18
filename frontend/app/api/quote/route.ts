import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, serviceType, message, source } = body;

    // Validate required fields (email optional for popup submissions)
    if (!firstName || !lastName || !phone || !serviceType) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the submission (Resend/email integration added when API key is configured)
    console.log("Quote request received:", {
      source: source || "main-form",
      name: `${firstName} ${lastName}`,
      phone,
      email: email || "(not provided)",
      serviceType,
      message: message || "(no message)",
      timestamp: new Date().toISOString(),
    });

    // Forward to backend if running
    try {
      const backendUrl = process.env.BACKEND_URL || "http://localhost:4000";
      await fetch(`${backendUrl}/api/quote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(5000),
      });
    } catch {
      // Backend not running - log only, still return success to user
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
