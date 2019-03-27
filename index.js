var express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const API_PORT = 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "denisworkman3@gmail.com",
    pass: "Pork45y_ummy"
  }
});
const mailOptions = {
  from: "denisworkman3@gmail.com",
  to: "denisworkman3@gmail.com",
  subject: "Subject of your email",
  html: "<p>Hello there</p>"
};
transporter.sendMail(mailOptions, (err, info) => {
  console.log(err ? err : info)
});
app.get("/", function(req, res) {
  res.send("Hello World!");
  transporter.sendMail(mailOptions, (err, info) => {
    console.log(err ? err : info)
  });
});

app.post("/", function(req, res) {
  res.send(req.body);
});

app.listen(process.env.PORT || API_PORT, () =>
  console.log(`LISTENING ON PORT ${API_PORT}`)
);
