import express,{Router} from 'express'
import { deletePost } from '../controllers/postdeleteController'

const deletePostRouter = express.Router()
deletePostRouter.delete("/admin/delete/:idPost", deletePost)
export default deletePostRouter