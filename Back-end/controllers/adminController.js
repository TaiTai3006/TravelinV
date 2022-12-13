import { db } from "../index.js";


export const getpost_user = ((req,res)=>{
    const sqlget = `SELECT * FROM post
                            ORDER BY (CASE status WHEN 'pending' THEN 1
                            WHEN 'approved'THEN 2 
                            ELSE 100 END) ASC, dateTime DESC`
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
