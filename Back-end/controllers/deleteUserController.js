import { db } from "../index.js";


export const deleteUser = ((req,res) =>{
    const userNameId = req.params.userName;
    const q = " DELETE FROM account WHERE userName = ? ";
    db.query(q,[userNameId], (err,result)=>{
    })
})
