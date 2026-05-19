import rateLimit from "express-rate-limit";

const formLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 3, // max 3 requests

  message: {
    success: false,
    error: "Too many form submissions. Please wait 5 minutes.",
  },

  standardHeaders: true,
  legacyHeaders: false,
});

export default formLimiter;
