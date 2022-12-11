import express, { Router } from "express";
import { CreateAccount } from "../controllers/AccoutController.js";
import { FindAccount } from "../controllers/AccoutController.js";
import { Login } from "../controllers/AccoutController.js";
import { CreateTableAccount } from "../controllers/AccoutController.js";
import uploadCloud from "../configs/cloudinary.js";
import { upadeAccount } from "../controllers/AccoutController.js";
import { getAccount } from "../controllers/AccoutController.js";

const routerAccount = express.Router();

routerAccount.get("/getAccount/:userName", CreateTableAccount);

routerAccount.get("/account/:userName", getAccount)

routerAccount.post("/account", uploadCloud.single("image"), CreateAccount);

routerAccount.put(
  "/account/:userName",
  uploadCloud.single("image"),
  upadeAccount
);

routerAccount.get("/register/:userName", FindAccount);

routerAccount.post("/login/:userName", Login);

export default routerAccount;
