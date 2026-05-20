import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
dotenv.config();

import connectDB from "./db/db.js";
import FormRoute from "./routes/FormRoute.js";
import { rateLimit } from "express-rate-limit";

const port = process.env.PORT || 3000;

// connect DB
connectDB();

// express app
const app = express();

app.use(helmet());
console.log("Helmet security middleware enabled");

// json parser
app.use(express.json());

// cors
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  }),
);
console.log("CORS configured for:", process.env.FRONTEND_URL);

// trust proxy
app.set("trust proxy", true);
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }),
);
// routes
app.use("/", FormRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
//route for the render health check using cron job auto ping every 5 minutes
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is healthy",
  });
});

// global error middleware MUST be last
// app.use((err, req, res, next) => {
//   console.error("GLOBAL ERROR:", err);

//   res.status(500).json({
//     success: false,
//     message: err.message || "Server Error",
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
