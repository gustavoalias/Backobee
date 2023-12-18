const express = require("express");
const uuid = require("uuid");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

let subscribers = ["gustavoalias@gmail.com", "lauty@gmail.com"];

app.get("/newsletter", (req, res) => {
  res.send("Hello");
});

app.post("/newsletter", (req, res) => {
  const email = req.body.email;
  subscribers = subscribers.concat(email);
  res.send(subscribers);
  console.log(subscribers);
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
