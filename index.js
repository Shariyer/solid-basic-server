/** @format */

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//cross origin resource sharing set up at app
app.use(cors());

// server running response in root
app.get("/", (req, res) => {
  res.send("Congratulations!! server is Running");
});

// app listening at port 5000
app.listen(port, (req, res) => {
  console.log("server is running at port: ", port);
});
