import express,{Router} from 'express'
import {deleteUser, getUserIdPost} from "../controllers/deleteUserController"
const deleteUserRoute = express.Router()

deleteUserRoute.delete("/admin/user/delete/:userName", deleteUser)
deleteUserRoute.get("/admin/user/get/:userName",getUserIdPost)
export default deleteUserRoute
