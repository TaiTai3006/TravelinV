import { db } from "../index.js";

import { v4 as uuidv4 } from "uuid";

import { v2 as cloudinary } from "cloudinary";

export const getProvince = (req, res) => {
  const q = "SELECT * FROM `province`";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const createPost = (req, res) => {
  const userNameId = req.params.userName;
  const image = req.file;
  let today = new Date();
  let date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  const q =
    "INSERT INTO `post`(`idPost`, `idProvince`, `image`, `demoDescription`, `status`, `postName`, `userName`) VALUES (?)";
  const values = [
    req.body.idPost,
    req.body.idProvince,
    (req.body.image = image?.path),
    req.body.demoDescription,
    (req.body.status = "pending"),
    req.body.postName,
    (req.body.userName = userNameId),
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      if (image) cloudinary.uploader.destroy(image.filename);
      return res.json(err);
    }
    return res.json("Post has been created successfully");
  });
};

export const createDes = (req, res) => {
  const idPostId = req.params.idPost;
  const image = req.files;
  const q =
    "INSERT INTO `description`(`idDes`, `idPost`, `image1`, `image2`, `description`, `title`) VALUES (?)";
  const values = [
    (req.body.idDes = uuidv4()),
    (req.body.idPost = idPostId),
    (req.body.image1 = image?.image1[0]?.path),
    (req.body.image2 = image?.image2[0]?.path),
    req.body.description,
    req.body.title,
  ];
  db.query(q, [values], (err, data) => {
    if (err) {
      if (image) cloudinary.uploader.destroy(image.filename);
      return res.json(err);
    }
    return res.json("Post has been created successfully");
  });
};

export const createDes2 = (req, res) => {
    const idPostId = req.params.idPost;
    const image = req.file;
    const q =
      "INSERT INTO `description`(`idDes`, `idPost`, `image1`, `description`, `title`) VALUES (?)";
    const values = [
      (req.body.idDes = uuidv4()),
      (req.body.idPost = idPostId),
      (req.body.image1 = image?.path),
      req.body.description,
      req.body.title,
    ];
    db.query(q, [values], (err, data) => {
      if (err) {
        if (image) cloudinary.uploader.destroy(image.filename);
        return res.json(err);
      }
      return res.json("Post has been created successfully");
    });
  };