import express, { Router } from "express";
import {
  getAuthorPost,
  getDesPost,
  checkLike,
  createLike,
  deleteLike,
  getRelatedPots,
  getComment,
  getReply,
  createComment,
  createReply,
  deleteComment,
  deleteReply,
  editComment,
  editReply
} from "../controllers/ReadBlogController.js";

const ReadBlogRouter = express.Router();

ReadBlogRouter.get("/AuthorPost/:idPost", getAuthorPost);

ReadBlogRouter.get("/DesPost/:idPost", getDesPost);

ReadBlogRouter.post("/CheckLike/:userName", checkLike);

ReadBlogRouter.post("/Like/:userName", createLike);

ReadBlogRouter.post("/Unlike/:userName", deleteLike);

ReadBlogRouter.post("/RelatedPots/:idPost", getRelatedPots);

ReadBlogRouter.get("/Comment/:idPost", getComment);

ReadBlogRouter.get("/Reply/:idPost", getReply);

ReadBlogRouter.post("/CreateComment/:idPost", createComment);

ReadBlogRouter.post("/CreateReply/:idComment", createReply);

ReadBlogRouter.delete("/DeleteComment/:idComment", deleteComment)

ReadBlogRouter.delete("/DeleteReply/:idComment", deleteReply)

ReadBlogRouter.put("/EditComment/:idComment", editComment)

ReadBlogRouter.put("/EditReply/:idReply", editReply)

export default ReadBlogRouter;
