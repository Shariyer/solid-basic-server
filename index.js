/** @format */

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//cross origin resource sharing set up at app
app.use(cors());

// server running response in root route
app.get("/", (req, res) => {
  res.send("Congratulations!! server is Running");
});

const allCourses = require("./data/categories.json");
app.get("/courses", (req, res) => {
  res.send(allCourses);
});
const courses = require("./data/categories.json");
app.get("/courses/singleCourse:id", (req, res) => {
  const reqId = req.params.id;
  const singleCourse = courses.find((c) => c.id === reqId);
  res.send(singleCourse);
});

// app listening at port 5000
app.listen(port, (req, res) => {
  console.log("server is running at port: ", port);
});
