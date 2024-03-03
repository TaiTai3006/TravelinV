// import { db } from "../index.js";





export const getFeatured = ((req,res)=>{
    const sqlPost = "select * from `post` where post.status = 'approved' order by `like` desc limit 3;"
    //where post.status = 'aprroved'
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
    const sqlPost = "select * from `post` where post.status = 'approved' "
    db.query(sqlPost, (err, result) => {
      res.send(result)
    })
  })

export const getRelatedpost2 = ((req,res)=>{
    const sqlPost = "SELECT * FROM province, post WHERE province.idProvince = post.idProvince and post.status = 'approved' GROUP BY province.idProvince ORDER BY post.like DESC "
    db.query(sqlPost, (err, result) => {
      res.send(result)
    })
  })

  export const getRelatedpost1 = ((req,res)=>{
    const sqlPost = "SELECT * FROM post where post.status = 'approved' "
    db.query(sqlPost, (err, result) => {
      res.send(result)
    })
  })
  