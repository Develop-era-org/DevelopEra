import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import connectDB from "./db/db.js";
import FormRoute from "./routes/FormRoute.js";
import transporter from "./mailer.js";
const port = process.env.PORT || 3000;

// connect DB
connectDB();

//environment config
dotenv.config();

//express app
const app = express();

//json parser
app.use(express.json());

//cors
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  }),
);

//Main router
app.use("/", FormRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/send", async (req, res) => {
//   try {
//     const info = await transporter.sendMail({
//       from: `"Chandu from DevelopEra" <${process.env.EMAIL}>`,

//       to: "mouryachaitanya7@gmail.com",

//       subject: "Following up from DevelopEra",

//       replyTo: process.env.EMAIL,

//       headers: {
//         "X-Priority": "3",
//         "X-Mailer": "DevelopEra Mail Service",
//       },

//       text: `
// Hello,

// I hope you're doing well.

// This is a quick test message from the DevelopEra contact system.

// We're currently configuring our backend infrastructure and email delivery system.

// Regards,
// Chandu
// DevelopEra
//       `,

//       html: `
//       <div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:40px;">

//         <div style="
//           max-width:600px;
//           margin:auto;
//           background:white;
//           padding:40px;
//           border-radius:12px;
//           border:1px solid #e5e5e5;
//         ">

//           <h2 style="
//             color:#111;
//             margin-bottom:20px;
//           ">
//             DevelopEra
//           </h2>

//           <p style="color:#333; font-size:16px; line-height:1.7;">
//             Hello,
//           </p>

//           <p style="color:#333; font-size:16px; line-height:1.7;">
//             I hope you're doing well.
//           </p>

//           <p style="color:#333; font-size:16px; line-height:1.7;">
//             This is a quick test message from the DevelopEra contact system.
//           </p>

//           <p style="color:#333; font-size:16px; line-height:1.7;">
//             We're currently configuring our backend infrastructure and email delivery system.
//           </p>

//           <div style="margin-top:40px;">
//             <p style="margin:0; color:#555;">
//               Regards,
//             </p>

//             <p style="
//               margin-top:8px;
//               font-weight:bold;
//               color:#111;
//             ">
//               Chandu
//             </p>

//             <p style="
//               margin-top:4px;
//               color:#777;
//               font-size:14px;
//             ">
//               DevelopEra
//             </p>
//           </div>

//         </div>

//       </div>
//       `,
//     });
//     res.status(200).json({
//       success: true,
//       message: "Email sent successfully",
//     });
//     console.log(info.response);
//   } catch (error) {
//     console.log(error);

//     res.status(500).json({
//       success: false,
//       message: "Email failed",
//     });
//   }
// });

//port listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
