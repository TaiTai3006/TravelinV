import { db } from "../index.js";


export const getpost_user = ((req,res)=>{
    const sqlget = "select * from post, account,province where post.userName = account.userName and post.idProvince = province.idProvince"
    db.query(sqlget, (err, result)=>{
        res.json(result)
    })
})


export const getpost_user_coba = ((req,res)=>{
    const sqlget = "select * from post, account where post.userName = account.userName"
    db.query(sqlget, (err, result)=>{
        res.json(result)
    })
})