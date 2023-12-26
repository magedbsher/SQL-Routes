import { postSchema } from "../../../database/models/post.model.js";
import { userSchema } from "../../../database/models/user.model.js";

export const getAllPosts = async (req, res) => {
  let data = await postSchema.findAll();
  res.json({ message: "done", data });
};

export const addPosts = async (req, res) => {
  let { title, content, userId } = req.body;
  let data = await postSchema.create({ title, content, userId });
  res.json({ message: "done", data });
};

export const deletePosts = async (req, res) => {
  let { id } = req.body;
  let data = await postSchema.destroy({ where: { id } });
  res.json({ message: "done", data });
};

export const updatePosts = async (req, res) => {
  let { userId, name } = req.body;
  let data = await postSchema.update({ name }, { where: { userId } });
  res.json({ message: "done", data });
};

export const getOwnerInfo = async (req, res) => {
  let data = await postSchema.findAll({ include: userSchema });
  res.json({ message: "done", data });
};

export default userSchema;
userSchema.hasMany(postSchema, { foreignKey: "userId" });
postSchema.belongsTo(userSchema, { foreignKey: "userId" });
