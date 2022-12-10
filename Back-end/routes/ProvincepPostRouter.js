import express, { Router } from "express";

import { getProvincePost, getProvince, getDestination } from "../controllers/ProvincePostController";

const ProvincePostRouter = express.Router()

ProvincePostRouter.get('/Province/:idProvince', getProvince)

ProvincePostRouter.get('/ProvincePost/:idProvince', getProvincePost)

ProvincePostRouter.get('/Destination/:idProvince', getDestination)

export default ProvincePostRouter
