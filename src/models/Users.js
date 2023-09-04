const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
// En Mayúsculas y singular      // en minúsculas y singular
const Canciones = sequelize.define("cancion", {
  // Definimos las columnas aquí
  first_name: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(150),
  },
  email: {
    type: DataTypes.STRING(150),
  },
  password: {
    type: DataTypes.STRING(100),
  },
  birthday: {
    type: DataTypes.DATEONLY,
  },
});

module.exports = Canciones;
