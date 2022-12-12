import { db } from "../index.js";


export const getpost_user = ((req,res)=>{
    const sqlget = "select * from post"
    db.query(sqlget, (err, result)=>{
        res.json(result)
    })
})


export const getpost_user_coba = ((req,res)=>{
    const sqlget = "select * from post"
    db.query(sqlget, (err, result)=>{
        res.json(result)
    })
})
