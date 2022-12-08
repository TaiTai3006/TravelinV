import { db } from "../index.js";

const cloudinary = require("cloudinary").v2;

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
    console.log(req.body)
  const values = [
    req.body.idPost,
    req.body.idProvince,
    req.body.image = image?.path,
    req.body.demoDescription,
    (req.body.status = "pending"),
    req.body.postName,
    req.body.userName = userNameId,
  ];
  
  db.query(q, [values], (err, data) => {
    if (err) {
        if (image) cloudinary.uploader.destroy(image.filename);
        return res.json(err);
      }
    return res.json('Post has been created successfully');
  });
};
