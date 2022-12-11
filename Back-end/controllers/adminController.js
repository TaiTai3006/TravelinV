import { db } from "../index.js";


export const getpost_user = ((req,res)=>{
    const sqlget = "select * from post, account where post.userName = account.userName"
    db.query(sqlget, (err, result)=>{
        console.log(result)
        res.json(result)
    })
})