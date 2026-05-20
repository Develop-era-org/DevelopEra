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
      error: "Too many form submissions",
    });
  },

  keyGenerator: (req) => {
    console.log("Limiter hit from:", req.ip);
    return req.ip;
  },
});
export default formLimiter;
