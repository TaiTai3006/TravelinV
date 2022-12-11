import { db } from "../index.js";
import bcrypt from "bcrypt";
const cloudinary = require("cloudinary").v2;

export const CreateTableAccount = (req, res) => {
  const userNameId = req.params.userName;
  const q =
    "SELECT `userName`, `accountType`, `avatar` FROM `account` WHERE `userName` = ?";
  db.query(q,[userNameId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const getAccount = (req, res) => {
  const userNameId = req.params.userName;
  const q =
    "SELECT `userName`, `name`, `gender`, `gmail`, `phoneNumber`, `accountType`, `avatar` FROM `account` WHERE `userName` = ?";
  db.query(q, [userNameId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const CreateAccount = async (req, res) => {
  const q =
    "INSERT INTO account (`userName`, `password`, `name`, `gmail`, `accountType`) VALUES (?)";
  const image = req.file;
  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);
  const values = [
    req.body.userName,
    req.body.password,
    req.body.name,
    req.body.gmail,
    req.body.accountType,
  ];
  db.query(q, [values], (err, data) => {
    if (err) {
      if (image) cloudinary.uploader.destroy(image.filename);
      console.log(err)
      return res.json(err);
    }
    return res.json("Account has been created successfully");
  });
};

export const FindAccount = (req, res) => {
  const userNameId = req.params.userName;
  const q = "SELECT * FROM account WHERE userName = ?";
  db.query(q, [userNameId], (err, data) => {
    if (err) return res.json(err);
    return Object.keys(data).length !== 0 ? res.json(true) : res.json(false);
  });
};

export const Login = (req, res) => {
  const userNameId = req.params.userName;
  const q = "SELECT * FROM account WHERE userName = ?";
  db.query(q, [userNameId], async (err, data) => {
    if (err) return res.json(err);
    if (Object.keys(data).length !== 0) {
      const validPassword = await bcrypt.compare(
        req.body.password,
        data[0].password
      );
      if (validPassword) return res.json(true);
      else return res.json(false);
    } else return res.json(false);
  });
};

export const upadeAccount = (req, res) => {
  const userNameId = req.params.userName;
  const q =
    "UPDATE `account` SET `name`= ?,`gender`= ?,`gmail`= ?,`phoneNumber`= ?,`avatar`= ? WHERE `userName`= ?";
  const image = req.file;
  const values = [
    req.body.name,
    req.body.gender,
    req.body.gmail,
    req.body.phoneNumber,
    req.body.avatar = image?.path ,
  ];

  db.query(q, [...values, userNameId], (err, data) => {
    if (err) {
      if (image) cloudinary.uploader.destroy(image.filename);
      return res.json(err);
    }
    return res.json(data);
  });
};
