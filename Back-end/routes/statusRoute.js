import express, { Router } from "express";
import { setStatus } from "../controllers/statusController.js";


const statusRoute = express.Router()
statusRoute.put('/admin/user/update/:idPost', setStatus)
export default statusRoute