import express, { Router } from "express";
import { getUser } from "../controllers/userController";

const userRouter = express.Router()

userRouter.get('/admin/user', getUser)
export default userRouter