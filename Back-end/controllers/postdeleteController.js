import { db } from "../index.js";


export const deletePost_user  = ((req,res) => {
    const id = req.params.userName;
    const sqldelete = "delete from post where userName = ?";
    db.query(sqldelete, [id], (err,result)=>{
      if(err) console.log(err)
    })
})

export const deletePost_idpost = ((req,res) => {
  const id = req.params.idPost;
  const sqldelete = "delete from post where idPost = ?";
  db.query(sqldelete, [id], (err,result)=>{
    if(err) console.log(err)
  })
})