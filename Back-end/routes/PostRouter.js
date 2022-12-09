import express, { Router } from "express";
import { getProvince, createPost, createDes, createDes2 } from "../controllers/PostController";
import uploadCloud from "../configs/cloudinary.js";

const PostRouter = express.Router()

PostRouter.get('/Province', getProvince)

PostRouter.post('/Post/:userName',uploadCloud.single("image"), createPost)

PostRouter.post('/CreatePost/:idPost', uploadCloud.fields([{ name: 'image1' },
{ name: 'image2' }]), createDes)

PostRouter.post('/CreatePost2/:idPost', uploadCloud.single("image1"), createDes2)

export default PostRouter