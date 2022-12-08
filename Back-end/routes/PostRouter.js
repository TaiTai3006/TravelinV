import express, { Router } from "express";
import { getProvince, createPost } from "../controllers/PostController";
import uploadCloud from "../configs/cloudinary.js";

const PostRouter = express.Router()

PostRouter.get('/Province', getProvince)

PostRouter.post('/Post/:userName',uploadCloud.single("image"), createPost)

export default PostRouter