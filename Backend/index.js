import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import connectDB from "./db/db.js";
import FormRoute from "./routes/FormRoute.js";
const port = process.env.PORT || 3000;

// connect DB
connectDB();

//environment config
dotenv.config();

//express app
const app = express();

//rate limiter
app.set("trust proxy", 1);

//json parser
app.use(express.json());

//cors
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  }),
);
console.log("CORS configured f or: ", process.env.FRONTEND_URL);
// Global error handling middleware
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err);

  res.status(500).json({
    success: false,
    message: err.message,
  });
});
//Main router
app.use("/", FormRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
