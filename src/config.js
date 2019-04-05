const USER_MAIL = "denisworkman3@gmail.com";
const NODEMAILER_CONFIG = {
  service: "gmail",
  auth: {
    user: USER_MAIL,
    pass: "Pork45y_ummy"
  }
};
const API_PORT = 5000

module.exports = {
  NODEMAILER_CONFIG,
  USER_MAIL,
  API_PORT
}
