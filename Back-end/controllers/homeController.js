import { db } from "../index.js";




export const getFeatured = ((req,res)=>{
    const sqlPost = "select * from `post` order by `like` desc limit 3;"
    db.query(sqlPost, (err, result) => {
      res.send(result)
    })
  })
 export const getProvince =((req,res)=>{
    const sqlPost = "select * from `province`"
    db.query(sqlPost, (err, result) => {
      res.send(result)
    })
  })
 export const getSlider =((req,res)=>{
    const sqlPost = "select * from `post` "
    db.query(sqlPost, (err, result) => {
      res.send(result)
    })
  })
export const getRelatedpost = ((req,res)=>{
    const sqlPost = "SELECT province.provinceName, post.postName, post.userName, post.demoDescription, post.image FROM province, post WHERE province.idProvince = post.idProvince "
    db.query(sqlPost, (err, result) => {
      res.send(result)
    })
  })