import express,{Router} from 'express'
import { deletePost_idpost, deletePost_user } from '../controllers/postdeleteController'

const deletePostRouter = express.Router()
deletePostRouter.delete("/admin/delete/:userName", deletePost_user)
deletePostRouter.delete("/admin/delete/post/:idPost", deletePost_idpost)
export default deletePostRouter