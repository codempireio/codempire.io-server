const express = require("express");
const bodyParser = require("body-parser");

const {
  healthCheckController,
  sendMailController
} = require("./src/controllers");
const { API_PORT } = require("./src/config");

const ROOT_ROUTE = "/";
const port = process.env.PORT || API_PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get(ROOT_ROUTE, healthCheckController);
app.post(ROOT_ROUTE, sendMailController);

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
