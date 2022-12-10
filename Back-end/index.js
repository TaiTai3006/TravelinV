import express from "express";
import mysql from "mysql";
import cors from "cors";
import routerAccount from "./routes/AccountRouter.js";
import homeRouter from "./routes/homeRoute.js";
import PostRouter from "./routes/PostRouter.js";
import routerPersonal from "./routes/PersonalRouter"
import routerBlogs from "./routes/BlogsRouter.js";
import ProvincePostRouter from "./routes/ProvincepPostRouter.js";
import ReadBlogRouter from "./routes/ReadBlogRouter.js";
import adminRoute from "./routes/adminRoute.js"
import userRoute from "./routes/userRoute.js"
import deletePostRouter from "./routes/deletedPostRouter"
import deleteUserRoute from "./routes/deleteUserRoute"
import statusRoute from "./routes/statusRoute"
import deleteLike from "./routes/deletelikeRoute.js";
import deleteDes from "./routes/deleteDesRoute.js";
// import "./configs/Database.js"
const app = express();

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "TravelinV",
});

db.connect((err)=>{
  if(err) throw err;
  console.log('Connected Database...')
})

app.use(express.json());
app.use(cors());
app.use(routerAccount);
app.use(homeRouter)
app.use(PostRouter)
app.use(routerPersonal);
app.use(routerBlogs);
app.use(ProvincePostRouter)
app.use(ReadBlogRouter)
app.use(adminRoute);
app.use(userRoute);
app.use(deletePostRouter);
app.use(deleteUserRoute);
app.use(statusRoute);
app.use(deleteLike);
app.delete("/admin/description/delete/:idPost",(req,res)=>{
  const IDpost = req.params.idPost;
  const q = "delete from descriptionpost where idPost = ?";
  db.query(q, IDpost, (err,result)=>{

  })
})
// app.use(deleteDes);
// app.delete("/account/:userName", (req, res) => {
//     const userNameId = req.params.userName;
//     const q = " DELETE FROM account WHERE userName = ? ";

//     db.query(q, [userNameId], (err, data) => {
//       if (err) return res.send(err);
//       return res.json(data);
//     });
//   });

  // app.put("/account/:userName", (req, res) => {
  //   const userNameId = req.params.userName;
  //   const q = "UPDATE account SET `password` = ? WHERE userName = ?";

  //   const values = [
  //     req.body.password
  //   ];

  //   db.query(q, [...values,userNameId], (err, data) => {
  //     if (err) return res.send(err);
  //     return res.json(data);
  //   });
  // });

app.listen(8800, () => {
  console.log("Connected ...");
});
