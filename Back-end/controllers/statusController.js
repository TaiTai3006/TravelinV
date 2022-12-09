import { db } from "../index.js";


export const setStatus = ((req,res)=>{
    const IdPost = req.params.idPost;
    const staCheck = 'UPDATE post SET  post.status = "aprroved" WHERE post.idPost = ? '
    db.query(staCheck,IdPost, (err, result)=>{

    })
  })