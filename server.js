const { response } = require("express");
const express = require("express");
const app = express();
const port = 9090;

const trainees = [
  { name: "Refik", region: "north-west" },
  { name: "Miguel", region: "north-west" },
  { name: "Zaw", region: "north-west" },
];

app.get("/", function (req, res) {
  console.log("hello world");
  res.send("hello world are u getting a response");
});

app.get("/trainees", function (req, res) {
  console.log(req.query.region, "...request.query.region");

  console.log("received a request to the /trainees");
  res.send({ trainees });
});

app.listen(port, function () {
  console.log("my application is now working");
});
