const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello, CI/CD! from Kong Samnang");
});
module.exports = app;
