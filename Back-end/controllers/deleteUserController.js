import { db } from "../index.js";


export const deleteUser = ((req,res) =>{
    const userNameId = req.params.userName;
    const q = " DELETE FROM account WHERE userName = ? ";
    db.query(q,[userNameId], (err,result)=>{
    })
})
export const getUserIdPost = (()=>{
    const usename = req.params.userName
    const IdPost = "select idPost from post, `account` where `account`.userName = post.userName and userName = ? "
    db.query(IdPost,usename,(err,result)=>{
        
    })
})