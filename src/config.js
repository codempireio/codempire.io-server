const USER_MAIL = process.env.USER_MAIL;
const NODEMAILER_CONFIG = {
  service: "gmail",
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.USER_PASS
  }
};
const API_PORT = 5000

module.exports = {
  NODEMAILER_CONFIG,
  USER_MAIL,
  API_PORT
}
