const { Sequelize } = require("sequelize");
require("dotenv").config();

const { HOST, DB, USER, PASSWORD, PORT } = process.env;

const database = new Sequelize(
  `mysql://${USER}:${PASSWORD}@${HOST}:${PORT}/${DB}`
);

module.exports = database;
