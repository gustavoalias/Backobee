const express = require("express");

const {
  findAllSubscribers,
  createSubscriber,
} = require("./controllers/SubscriberController");

const cors = require("cors");

const server = express();
server.use(express.json());
server.use(cors());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.get("/newsletter", async (req, res) => {
  try {
    const subs = await findAllSubscribers();
    res.status(200).json(subs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

server.post("/newsletter", async (req, res) => {
  try {
    const email = req.body.email;
    const newSub2 = await createSubscriber(email);
    res.status(200).json({ message: "Subscriber created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = server;
