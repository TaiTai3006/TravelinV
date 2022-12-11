import express, { Router } from "express";
import { getFeatured, getProvince, getRelatedpost1, getRelatedpost2, getSlider } from "../controllers/homeController";



const homeRouter = express.Router()
homeRouter.get('/home/featuredpost', getFeatured)
homeRouter.get('/home/gonext', getProvince)
homeRouter.get('/home/slider', getSlider)
homeRouter.get('/home/relatedpost2', getRelatedpost2)
homeRouter.get('/home/relatedpost1', getRelatedpost1)
export default homeRouter