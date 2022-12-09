import { Router } from "express";
import { db } from "../index.js";
export const getUser = ((req,res) =>{
    const sqlget = "select * from account"
    db.query(sqlget,(err,result) =>{
        res.send(result)
    })
})