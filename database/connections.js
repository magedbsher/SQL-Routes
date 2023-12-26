import { Sequelize } from "sequelize";



export const sequelize = new Sequelize("assig4", "root", "", {
    host: "localhost",
    dialect: "mysql",
  });