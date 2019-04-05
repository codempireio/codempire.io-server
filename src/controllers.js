const nodemailer = require("nodemailer");
const { USER_MAIL, NODEMAILER_CONFIG } = require("./config");

const transporter = nodemailer.createTransport(NODEMAILER_CONFIG);

function createMailOptions({ name, email, message }) {
  return {
    from: USER_MAIL,
    to: USER_MAIL,
    subject: "Request from codempire.io",
    html: `<p>name: ${name} </p><p>Email: ${email}</p><p>Message: ${message}</p>`
  };
}

function sendMailController(req, res) {
  const options = createMailOptions(req.body);

  transporter.sendMail(options, (err, info) => {
    if (err) {
      res.send(err);
    }
    res.send(info);
  });
}

function healthCheckController(req, res) {
  res.send("Server works.");
}

module.exports = {
  healthCheckController,
  sendMailController
};
