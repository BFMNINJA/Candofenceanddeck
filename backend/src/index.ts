import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import quoteRouter from "./routes/quote";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));
app.use(express.json());

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "Can Do Fence & Deck API" });
});

// Routes
app.use("/api/quote", quoteRouter);

// Start
app.listen(PORT, () => {
  console.log(`\nCan Do Backend running on http://localhost:${PORT}`);
  console.log(`  POST /api/quote  — receive quote requests`);
  console.log(`  GET  /health     — health check\n`);
});

export default app;
