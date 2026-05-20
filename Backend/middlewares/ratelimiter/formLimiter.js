import rateLimit from "express-rate-limit";

const formLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,

  max: 3,

  standardHeaders: true,

  legacyHeaders: false,

  handler: (req, res) => {
    console.log("BLOCKED:", req.ip);

    res.status(429).json({
      success: false,
      error: "Too many form submissions. Please wait 5 minutes.",
    });
  },
});

export default formLimiter;
