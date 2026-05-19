import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.APP_PASSWORD,
//   },
// });

//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,

//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.APP_PASSWORD,
//     },

//     connectionTimeout: 10000,
//   });

// transporter.verify((error, success) => {
//   if (error) {
//     console.log("MAIL ERROR:", error);
//   } else {
//     console.log("Mailer Ready");
//   }
// });

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,

  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD,
  },

  tls: {
    rejectUnauthorized: false,
  },

  connectionTimeout: 20000,
  greetingTimeout: 20000,
  socketTimeout: 20000,
});

export default transporter;
