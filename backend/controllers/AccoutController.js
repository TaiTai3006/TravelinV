import { db } from "../index.js";

export const getAccount = (req, res) => {
  const q = "SELECT * FROM account";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const CreateAccount = (req,res)=>{
    const q = "INSERT INTO account (`userName`, `password`, `accountType`) VALUES (?)"
    const values = [
        req.body.userName,
        req.body.password,
        req.body.accountType
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Account has been created successfully")
    })
};

export const FindAccount = (req,res)=>{
    const userNameId = req.params.userName
    const q = "SELECT * FROM account WHERE userName = ?"
    db.query(q,[userNameId],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}