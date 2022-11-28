import express from "express";
import mysql from "mysql";
import cors from "cors";
import routerAccount from "./routes/AccountRouter.js";
const app = express();

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "TravelinV",
});
app.use(express.json());
app.use(cors());
app.use(routerAccount);


// app.delete("/account/:userName", (req, res) => {
//     const userNameId = req.params.userName;
//     const q = " DELETE FROM account WHERE userName = ? ";

//     db.query(q, [userNameId], (err, data) => {
//       if (err) return res.send(err);
//       return res.json(data);
//     });
//   });

//   app.put("/account/:userName", (req, res) => {
//     const userNameId = req.params.userName;
//     const q = "UPDATE account SET `password` = ? WHERE userName = ?";

//     const values = [
//       req.body.password
//     ];

//     db.query(q, [...values,userNameId], (err, data) => {
//       if (err) return res.send(err);
//       return res.json(data);
//     });
//   });
app.listen(8800, () => {
  console.log("Connected ...");
});
