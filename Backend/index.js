import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import connectDB from "./db/db.js";
import FormRoute from "./routes/FormRoute.js";

const port = process.env.PORT || 3000;

// connect DB
connectDB();

// express app
const app = express();

// trust proxy
app.set("trust proxy", 1);

// json parser
app.use(express.json());

// cors
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  }),
);

console.log("CORS configured for:", process.env.FRONTEND_URL);

// routes
app.use("/", FormRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
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
