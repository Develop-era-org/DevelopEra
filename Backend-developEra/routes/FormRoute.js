import dotenv from "dotenv";
import formLimiter from "../middlewares/ratelimiter/formLimiter.js";
import FormSubmit from "../db/controllers/FormSubmit.js";
import FormEmail from "../Services/Email/FormEmail.js";

import express from "express";
const router1 = express.Router();

dotenv.config();

router1.post("/form", formLimiter, FormSubmit, FormEmail, async (req, res) => {
  res.status(200).json({
    message: "form submitted and email sent successfully",
  });
});

export default router1;
