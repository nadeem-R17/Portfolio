const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  console.log(name, email, message);
  try {
    // Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Website: Message from ${name}`,
      text: `From: ${email}\nMessage: ${message}`,
    });
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error sending email");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
