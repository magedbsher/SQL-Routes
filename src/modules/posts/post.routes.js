import  express  from "express";
import{getAllPosts,addPosts,deletePosts, updatePosts, getOwnerInfo} from "../posts/post.controller.js"
const router = express.Router()



router.get("/posts",getAllPosts)
router.post("/posts",addPosts)
router.delete("/posts",deletePosts)
router.put("/posts",updatePosts)
router.get("/postsWithInfo",getOwnerInfo)







export default router