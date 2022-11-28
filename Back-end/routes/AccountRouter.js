import express from "express";
import { getAccount } from "../controllers/AccoutController.js";
import { CreateAccount } from "../controllers/AccoutController.js";
import { FindAccount } from "../controllers/AccoutController.js";
const routerAccount = express.Router()

routerAccount.get('/account',getAccount);

routerAccount.post('/account',CreateAccount);

routerAccount.get('/account/:userName', FindAccount)
export default routerAccount;