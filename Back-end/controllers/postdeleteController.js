import { db } from "../index.js";


export const deletePost = ((req,res) => {
    const id = req.params.idPost;
    const sqldelete = "delete from post where idPost = ?";
    db.query(sqldelete, [id], (err,result)=>{
      if(err) console.log(err)
    })
})