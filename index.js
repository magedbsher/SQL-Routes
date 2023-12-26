import express from "express";
import userRouter from "./src/modules/users/user.routes.js";
import postRouter from"./src/modules/posts/post.routes.js"
import { sequelize } from "./database/connections.js";

const app = express();
app.use(express.json());
app.use(userRouter,postRouter)
app.use(postRouter)


try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}






app.listen(3000, () => {
  console.log("server is on");
});
