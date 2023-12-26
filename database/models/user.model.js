import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../connections.js";

export const userSchema = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  password: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.STRING,
  },
});



sequelize.sync(); // the creation of the table
