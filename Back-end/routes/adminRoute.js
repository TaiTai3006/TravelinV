import express, { Router } from "express";
import {getpost_user} from "../controllers/adminController"

const adminRoute = express.Router()
adminRoute.get("/admin/post",getpost_user)




export default adminRoute