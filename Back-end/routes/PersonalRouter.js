import express from "express";
// import { getAccount } from "../controllers/AccoutController.js";
import { getPost } from "../controllers/PersonalController";
import { getPostPending } from "../controllers/PersonalController";

import { getPostLike } from "../controllers/PersonalController.js";
import { getUser } from "../controllers/PersonalController.js";
import { DeletePostDes } from "../controllers/PersonalController.js";
import { DeleteLike } from "../controllers/PersonalController.js";
import { DeletePost } from "../controllers/PersonalController.js";

const routerPersonal = express.Router()

// routerAccount.get('/user',getAccount);
routerPersonal.get('/:userName',getUser);
routerPersonal.get('/:userName/Personal/Post',getPost);
routerPersonal.get('/:userName/Personal/PostPending',getPostPending);
routerPersonal.get('/:userName/Personal/PostLike',getPostLike);
routerPersonal.delete('/:userName/Personal/DeletePost/:idPost', DeletePost)
routerPersonal.delete('/:userName/Personal/DeleteLike/:idPost', DeleteLike)
routerPersonal.delete('/:userName/Personal/DeletePostDes/:idPost', DeletePostDes)


export default routerPersonal