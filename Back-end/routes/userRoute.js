import express, { Router } from "express";
import { getUser } from "../controllers/userController.js";

const userRouter = express.Router()

userRouter.get('/admin/user', getUser)
export default userRouter