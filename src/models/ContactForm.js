const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("ContactForm", {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, isEmail: true },
    message: { type: DataTypes.STRING, allowNull: false },
    area: { type: DataTypes.STRING },
  });
};
