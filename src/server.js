const express = require("express");
const cors = require("cors");

const {
  findAllSubscribers,
  createSubscriber,
} = require("./controllers/SubscriberController");

const {
  findAllContactForm,
  createContactForm,
} = require("./controllers/ContactFormController");

const server = express();
server.use(express.json());

// Configuración CORS
const corsOptions = {
  origin: ["http://localhost:3000", "https://localhost:3000"],
  credentials: true, // Permite incluir credenciales en las solicitudes (por ejemplo, cookies, certificados SSL, etc.)
};

server.use(cors(corsOptions));

server.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Rutas

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

server.post("/contactform", async (req, res) => {
  try {
    const { nombre, email, message, area } = req.body;
    const newSub2 = await createContactForm({ nombre, email, message, area });
    res
      .status(200)
      .json({ message: "Mensaje desde Formulario created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = server;
