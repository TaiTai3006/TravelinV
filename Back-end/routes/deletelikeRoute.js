import express, {Router} from 'express'
import { deletelike } from '../controllers/deleteLikeController.js'

const deleteLike = express.Router()
deleteLike.delete("/admin/like/delete/:idPost", deletelike)
export default deleteLike