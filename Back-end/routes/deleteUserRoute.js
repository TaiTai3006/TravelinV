import express,{Router} from 'express'
import {deleteUser} from "../controllers/deleteUserController"
const deleteUserRoute = express.Router()

deleteUserRoute.delete("/admin/user/delete/:userName", deleteUser)
export default deleteUserRoute