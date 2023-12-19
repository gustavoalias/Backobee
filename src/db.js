require("dotenv").config();
const { Sequelize } = require("sequelize");
const { HOST, DB, USER, PASSWORD, PORT } = process.env;
const SubscriberFunction = require("./models/Subscriber");

const database = new Sequelize(
  `mysql://${USER}:${PASSWORD}@${HOST}:${PORT}/${DB}`,
  { logging: false }
);

SubscriberFunction(database);

module.exports = { database, ...database.models };
