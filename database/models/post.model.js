import { DataTypes } from "sequelize";
import { sequelize } from "../connections.js";


export const postSchema = sequelize.define("Post", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    userId: {
      type: DataTypes.INTEGER,
    }
  });
  




  sequelize.sync(); // the creation of the table