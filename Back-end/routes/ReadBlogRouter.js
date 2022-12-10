import express, { Router } from "express";
import { getAuthorPost, getDesPost, checkLike, createLike, deleteLike, getRelatedPots, getComment} from "../controllers/ReadBlogController";

const ReadBlogRouter = express.Router()

ReadBlogRouter.get('/AuthorPost/:idPost', getAuthorPost)

ReadBlogRouter.get('/DesPost/:idPost', getDesPost)

ReadBlogRouter.post('/CheckLike/:userName', checkLike)

ReadBlogRouter.post('/Like/:userName', createLike)

ReadBlogRouter.post('/Unlike/:userName', deleteLike)

ReadBlogRouter.post('/RelatedPots/:idPost', getRelatedPots)

ReadBlogRouter.get('/Comment/:idPost', getComment)

export default ReadBlogRouter