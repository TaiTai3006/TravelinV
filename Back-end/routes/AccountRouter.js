import express from "express";
// import { getAccount } from "../controllers/AccoutController.js";
import { CreateAccount } from "../controllers/AccoutController.js";
import { FindAccount } from "../controllers/AccoutController.js";
import { Login } from "../controllers/AccoutController.js";
const routerAccount = express.Router();

// routerAccount.get("/account", getAccount);

routerAccount.post("/account", CreateAccount);

routerAccount.get("/register/:userName", FindAccount);

routerAccount.post("/login/:userName",Login)
export default routerAccount;
