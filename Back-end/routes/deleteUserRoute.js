import express,{Router} from 'express'
import {deletepostUser, deleteUser} from "../controllers/deleteUserController.js"
const deleteUserRoute = express.Router()

deleteUserRoute.delete("/admin/user/delete/:userName", deleteUser)
//deleteUserRoute.get("/admin/user/get/:userName",getUserIdPost)
 deleteUserRoute.delete('/admin/user/post/delete:userName', deletepostUser)
export default deleteUserRoute
