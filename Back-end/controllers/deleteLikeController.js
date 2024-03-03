import { db } from "../index.js";

export const deletelike = ((req,res) =>{
    const userNameId = req.params.idPost;
    const q = " DELETE FROM `like` WHERE idPost = ? ";
    db.query(q,[userNameId], (err,result)=>{
        if(err) console.log(err)
    })
})