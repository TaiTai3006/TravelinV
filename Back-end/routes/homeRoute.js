import express, { Router } from "express";
import { getFeatured, getProvince, getRelatedpost, getSlider } from "../controllers/homeController";



const homeRouter = express.Router()
homeRouter.get('/home/featuredpost', getFeatured)
homeRouter.get('/home/gonext', getProvince)
homeRouter.get('/home/slider', getSlider)
homeRouter.get('/home/relatedpost', getRelatedpost)
export default homeRouter