const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("Subscriber", {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: { type: DataTypes.STRING, allowNull: false, isEmail: true },
  });
};
