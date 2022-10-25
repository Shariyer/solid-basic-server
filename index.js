/** @format */

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Congratulations!! server is Running");
});
app.listen(port, (req, res) => {
  console.log("server is running at port: ", port);
});
