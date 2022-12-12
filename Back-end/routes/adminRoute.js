import express, { Router } from "express";
import {getpost_user, getpost_user_coba} from "../controllers/adminController"

const adminRoute = express.Router()
adminRoute.get("/admin/post",getpost_user)
adminRoute.get("/admin/coba/post", getpost_user_coba)

export default adminRoute